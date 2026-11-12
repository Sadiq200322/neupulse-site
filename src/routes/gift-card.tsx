import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { gbp, useCart } from "@/lib/cart";

export const Route = createFileRoute("/gift-card")({
  component: GiftPage,
});

const AMOUNTS = [25, 50, 100, 250, 500];

function GiftPage() {
  const [amount, setAmount] = useState(100);
  const [added, setAdded] = useState(false);
  const add = useCart((state) => state.add);

  return (
    <div className="mx-auto grid max-w-5xl gap-10 px-4 py-16 lg:grid-cols-2">
      <div className="flex aspect-square items-center justify-center rounded-card bg-ink text-paper">
        <div className="text-center">
          <p className="text-sm tracking-wide text-paper/70">Neupulse</p>
          <p className="mt-2 text-5xl font-semibold">{gbp(amount)}</p>
          <p className="mt-2 text-sm text-paper/70">Gift card</p>
        </div>
      </div>
      <div>
        <h1 className="text-4xl font-semibold">Neupulse Gift Card</h1>
        <p className="mt-4 text-muted">
          Use it on any product, including Neupulse C, gel pads and accessories. The card is emailed with a unique code. Forward it, or print it. Remaining balance stays on the card. Valid for 12 months. Not exchangeable for cash.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {AMOUNTS.map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => {
                setAmount(value);
                setAdded(false);
              }}
              className={`tap min-h-12 rounded-full border px-5 text-sm font-medium ${
                amount === value ? "border-ink bg-ink text-paper" : "border-line"
              }`}
              aria-pressed={amount === value}
            >
              {gbp(value)}
            </button>
          ))}
        </div>
        <button
          type="button"
          className="tap mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-ink text-sm font-medium text-paper"
          onClick={() => {
            add({
              id: `gift-${amount}`,
              name: `Gift card ${gbp(amount)}`,
              price: amount,
              detail: "Emailed code. Valid 12 months. Usable on any product.",
            });
            setAdded(true);
          }}
        >
          Add {gbp(amount)} gift card
        </button>
        {added ? (
          <p className="mt-3 text-sm">
            Added. <Link to="/cart" className="underline">View cart</Link>
          </p>
        ) : null}
      </div>
    </div>
  );
}
