import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { cartTotal, gbp, useCart } from "@/lib/cart";

export const Route = createFileRoute("/checkout")({
  component: CheckoutPage,
});

const METHODS = ["Card", "Apple Pay", "Google Pay", "Klarna"];

function CheckoutPage() {
  const items = useCart((state) => state.items);
  const clear = useCart((state) => state.clear);
  const [method, setMethod] = useState(METHODS[0]);
  const [express, setExpress] = useState(false);
  const [order, setOrder] = useState<string | null>(null);
  const shipping = express ? 7.95 : 0;
  const total = cartTotal(items) + shipping;

  if (order) {
    return (
      <div className="mx-auto max-w-xl px-4 py-16 text-center">
        <h1 className="text-4xl font-semibold">Order noted</h1>
        <p className="mt-4 text-muted">
          Reference {order}. Nothing was charged. Swap this step for your payment
          provider and this confirmation becomes a real receipt.
        </p>
        <p className="mt-2 text-sm text-muted">
          Method: {method}. Delivery: {express ? "Express" : "Standard"}.
        </p>
        <Link to="/" className="mt-8 inline-flex min-h-12 items-center rounded-full bg-ink px-7 text-sm font-medium text-paper">
          Back home
        </Link>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-xl px-4 py-16">
        <h1 className="text-4xl font-semibold">Checkout</h1>
        <p className="mt-4 text-muted">Add something before checkout.</p>
        <Link to="/product" className="mt-6 inline-flex min-h-12 items-center rounded-full bg-ink px-7 text-sm font-medium text-paper">
          Shop Neupulse C
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto grid max-w-5xl gap-10 px-4 py-16 lg:grid-cols-5">
      <form
        className="space-y-4 lg:col-span-3"
        onSubmit={(event) => {
          event.preventDefault();
          const ref = `NP-${Date.now().toString().slice(-6)}`;
          setOrder(ref);
          clear();
        }}
      >
        <h1 className="text-4xl font-semibold">Checkout</h1>
        <p className="text-sm text-muted">
          UK and Channel Islands. This screen is the payment slot — no card numbers are collected or stored.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Full name" name="name" />
          <Field label="Email" name="email" type="email" />
          <Field label="Address" name="address" className="sm:col-span-2" />
          <Field label="City" name="city" />
          <Field label="Postcode" name="postcode" />
        </div>
        <fieldset>
          <legend className="text-sm font-medium">Payment method</legend>
          <div className="mt-2 grid grid-cols-2 gap-2">
            {METHODS.map((name) => (
              <button
                key={name}
                type="button"
                onClick={() => setMethod(name)}
                className={`tap min-h-12 rounded-full border text-sm font-medium ${
                  method === name ? "border-ink bg-ink text-paper" : "border-line"
                }`}
              >
                {name}
              </button>
            ))}
          </div>
        </fieldset>
        <fieldset>
          <legend className="text-sm font-medium">Delivery</legend>
          <div className="mt-2 grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setExpress(false)}
              className={`tap min-h-12 rounded-full border px-3 text-sm font-medium ${
                express ? "border-line" : "border-ink bg-ink text-paper"
              }`}
            >
              Standard · Free
            </button>
            <button
              type="button"
              onClick={() => setExpress(true)}
              className={`tap min-h-12 rounded-full border px-3 text-sm font-medium ${
                express ? "border-ink bg-ink text-paper" : "border-line"
              }`}
            >
              Express · £7.95
            </button>
          </div>
          <p className="mt-2 text-xs text-muted">
            Express orders placed by 2pm, Monday to Friday, leave the same day.
          </p>
        </fieldset>
        <button
          type="submit"
          className="tap inline-flex min-h-12 w-full items-center justify-center rounded-full bg-ink text-sm font-medium text-paper"
        >
          Place order · {gbp(total)}
        </button>
      </form>
      <aside className="h-fit rounded-card bg-mist p-6 lg:col-span-2">
        <h2 className="font-medium">Your order</h2>
        <ul className="mt-4 space-y-3 text-sm">
          {items.map((item) => (
            <li key={item.id} className="flex justify-between gap-3">
              <span>
                {item.name}
                {item.qty > 1 ? ` × ${item.qty}` : ""}
              </span>
              <span>{gbp(item.price * item.qty)}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 flex justify-between text-sm text-muted">
          <span>Delivery</span>
          <span>{shipping === 0 ? "Free" : gbp(shipping)}</span>
        </p>
        <p className="mt-4 flex justify-between border-t border-line pt-4 font-semibold">
          <span>Due today</span>
          <span>{gbp(total)}</span>
        </p>
      </aside>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  className?: string;
}) {
  return (
    <label className={`block text-sm font-medium ${className}`}>
      {label}
      <input
        required
        name={name}
        type={type}
        className="mt-1 w-full rounded-full border border-line bg-paper px-4 py-3 font-normal"
      />
    </label>
  );
}
