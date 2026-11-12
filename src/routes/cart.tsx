import { createFileRoute, Link } from "@tanstack/react-router";
import { cartTotal, gbp, useCart } from "@/lib/cart";

export const Route = createFileRoute("/cart")({
  component: CartPage,
});

function CartPage() {
  const items = useCart((state) => state.items);
  const remove = useCart((state) => state.remove);
  const setQty = useCart((state) => state.setQty);
  const total = cartTotal(items);

  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-4xl font-semibold">Cart</h1>
      {items.length === 0 ? (
        <div className="mt-8">
          <p className="text-muted">Your basket is empty.</p>
          <Link
            to="/product"
            className="tap mt-6 inline-flex min-h-12 items-center rounded-full bg-ink px-7 text-sm font-medium text-paper"
          >
            Shop Neupulse C
          </Link>
        </div>
      ) : (
        <>
          <ul className="mt-8 divide-y divide-line border-y border-line">
            {items.map((item) => (
              <li key={item.id} className="flex items-start justify-between gap-4 py-4">
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="mt-1 text-sm text-muted">{item.detail}</p>
                  <div className="mt-3 flex items-center gap-2">
                    <button
                      type="button"
                      aria-label={`Fewer ${item.name}`}
                      className="tap inline-flex size-11 items-center justify-center rounded-full border border-line"
                      onClick={() => setQty(item.id, item.qty - 1)}
                    >
                      −
                    </button>
                    <span className="w-8 text-center text-sm font-medium">{item.qty}</span>
                    <button
                      type="button"
                      aria-label={`More ${item.name}`}
                      className="tap inline-flex size-11 items-center justify-center rounded-full border border-line"
                      onClick={() => setQty(item.id, item.qty + 1)}
                    >
                      +
                    </button>
                    <button
                      type="button"
                      className="tap ml-2 text-sm underline"
                      onClick={() => remove(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <p className="font-semibold">{gbp(item.price * item.qty)}</p>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex items-center justify-between">
            <p className="text-muted">Today</p>
            <p className="text-2xl font-semibold">{gbp(total)}</p>
          </div>
          <p className="mt-2 text-xs text-muted">
            Membership renewals are billed later by your payment provider. This total is what is due now.
          </p>
          <Link
            to="/checkout"
            className="tap mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-ink text-sm font-medium text-paper sm:w-auto sm:px-10"
          >
            Checkout
          </Link>
        </>
      )}
    </div>
  );
}
