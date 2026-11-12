import { create } from "zustand";
import { persist } from "zustand/middleware";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  detail: string;
  qty: number;
};

type Draft = Omit<CartItem, "qty">;

type CartState = {
  items: CartItem[];
  add: (item: Draft) => void;
  setQty: (id: string, qty: number) => void;
  remove: (id: string) => void;
  clear: () => void;
};

const waiting: Draft[] = [];

function withQty(items: CartItem[]) {
  return items.map((item) => ({ ...item, qty: item.qty > 0 ? item.qty : 1 }));
}

function applyAdd(items: CartItem[], item: Draft) {
  const found = items.find((entry) => entry.id === item.id);
  if (found) {
    return items.map((entry) =>
      entry.id === item.id ? { ...entry, qty: entry.qty + 1 } : entry,
    );
  }
  return [...items, { ...item, qty: 1 }];
}

export const useCart = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      add: (item) => {
        if (!useCart.persist.hasHydrated()) waiting.push(item);
        set((state) => ({ items: applyAdd(state.items, item) }));
      },
      setQty: (id, qty) =>
        set((state) => ({
          items:
            qty < 1
              ? state.items.filter((item) => item.id !== id)
              : state.items.map((item) => (item.id === id ? { ...item, qty } : item)),
        })),
      remove: (id) =>
        set((state) => ({ items: state.items.filter((item) => item.id !== id) })),
      clear: () => set({ items: [] }),
    }),
    {
      name: "neupulse-cart",
      skipHydration: true,
      merge: (persisted, current) => {
        const stored = persisted as { items?: CartItem[] } | undefined;
        return { ...current, items: withQty(stored?.items ?? []) };
      },
      onRehydrateStorage: () => (state) => {
        if (!state || waiting.length === 0) {
          waiting.length = 0;
          return;
        }
        let items = withQty(state.items);
        for (const item of waiting) items = applyAdd(items, item);
        waiting.length = 0;
        useCart.setState({ items });
      },
    },
  ),
);

export function cartCount(items: CartItem[]) {
  return items.reduce((sum, item) => sum + item.qty, 0);
}

export function cartTotal(items: CartItem[]) {
  return items.reduce((sum, item) => sum + item.price * item.qty, 0);
}

export function gbp(value: number) {
  const digits = Number.isInteger(value) ? 0 : 2;
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(value);
}
