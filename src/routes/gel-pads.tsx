import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { gbp, useCart } from "@/lib/cart";

export const Route = createFileRoute("/gel-pads")({
  component: GelPadsPage,
});

const PACKS = [
  {
    id: "pads-membership",
    name: "Gel Pad Membership",
    price: 20,
    detail: "32 pairs delivered every month. £20 instead of £25. Pause or cancel anytime.",
  },
  {
    id: "pads-1",
    name: "Single box · 32 pairs",
    price: 25,
    detail: "About one month of daily use.",
  },
  {
    id: "pads-3",
    name: "3 pack · 96 pairs",
    price: 75,
    detail: "About three months of daily use.",
  },
  {
    id: "pads-6",
    name: "6 pack · 192 pairs",
    price: 150,
    detail: "About six months of daily use.",
  },
];

function GelPadsPage() {
  const [id, setId] = useState(PACKS[0].id);
  const [added, setAdded] = useState(false);
  const add = useCart((state) => state.add);
  const pack = PACKS.find((item) => item.id === id) ?? PACKS[0];

  return (
    <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 lg:grid-cols-2">
      <img
        src="/media/gel-pads.png"
        alt="Box of Neupulse single-use gel pads"
        className="w-full rounded-card bg-mist"
      />
      <div>
        <h1 className="text-4xl font-semibold">Neupulse Gel Pads</h1>
        <p className="mt-3 text-muted">
          Single-use pads made for Neupulse C. Each box holds 32 pairs, about a month of daily sessions. They are the contact between the device and the skin, so a fresh pair each time keeps the session comfortable.
        </p>
        <ul className="mt-4 space-y-1 text-sm text-muted">
          <li>32 pairs of single-use gel pads per box</li>
          <li>Made for the Neupulse C contacts</li>
          <li>Free UK delivery</li>
        </ul>
        <div className="mt-8 space-y-3">
          {PACKS.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                setId(item.id);
                setAdded(false);
              }}
              aria-pressed={id === item.id}
              className={`tap w-full rounded-card border p-4 text-left ${id === item.id ? "border-ink bg-mist" : "border-line"}`}
            >
              <div className="flex justify-between gap-3">
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="mt-1 text-sm text-muted">{item.detail}</p>
                </div>
                <p className="font-semibold">{gbp(item.price)}</p>
              </div>
            </button>
          ))}
        </div>
        <button
          type="button"
          className="tap mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-ink text-sm font-medium text-paper"
          onClick={() => {
            add(pack);
            setAdded(true);
          }}
        >
          Add {pack.name} · {gbp(pack.price)}
        </button>
        {added ? (
          <p className="mt-3 text-sm">
            Added.{" "}
            <Link to="/cart" className="underline">
              View cart
            </Link>
          </p>
        ) : null}
        <p className="mt-4 text-sm text-muted">
          Buying a device too? Choose membership on the Neupulse C page and the first month is free.
        </p>
      </div>
    </div>
  );
}
