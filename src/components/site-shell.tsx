import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, ShoppingBag, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { cartCount, useCart } from "@/lib/cart";

const NAV = [
  { to: "/product", label: "Neupulse C" },
  { to: "/gel-pads", label: "Gel Pads" },
  { to: "/try", label: "Try Before You Buy" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/science", label: "The Science" },
  { to: "/help", label: "Help" },
] as const;

const TICKER = [
  "Want it tomorrow? Choose Express delivery at checkout",
  "96% who tried Neupulse C went on to buy",
  "Rated 4.8 out of 5 on Google · 22 reviews",
  "Try Neupulse C at home for 30 days",
];

export function SiteShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (state) => state.location.pathname });
  const count = useCart((state) => cartCount(state.items));

  useEffect(() => {
    void useCart.persist.rehydrate();
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [path]);

  return (
    <div className="min-h-screen bg-paper text-ink">
      <div className="overflow-hidden bg-ink text-paper">
        <div className="ticker-track flex w-max gap-16 py-2.5 text-sm">
          {[...TICKER, ...TICKER].map((line, index) => (
            <span key={`${line}-${index}`} className="px-4 whitespace-nowrap">
              {line}
            </span>
          ))}
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-4 px-4">
          <Link to="/" className="flex items-center gap-2">
            <img src="/media/logo.png" alt="Neupulse" className="h-8 w-auto" />
          </Link>

          <nav className="hidden items-center gap-6 text-sm font-medium lg:flex">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-ink/80 transition hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              to="/cart"
              className="inline-flex min-h-11 items-center gap-2 rounded-full px-3 text-sm font-medium tap"
            >
              <ShoppingBag className="size-5" />
              Cart{count > 0 ? ` (${count})` : ""}
            </Link>
            <button
              type="button"
              className="inline-flex size-11 items-center justify-center rounded-full tap lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
        {open ? (
          <nav className="menu-rise border-t border-line px-4 py-3 lg:hidden">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="block min-h-11 py-2 text-base font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        ) : null}
      </header>

      <main>{children}</main>

      <footer className="border-t border-line bg-mist">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <img src="/media/logo.png" alt="" className="mb-4 h-8 w-auto" />
            <p className="text-sm text-muted">Live every day, better.</p>
          </div>
          <FooterCol
            title="Shop"
            links={[
              ["/product", "Neupulse C"],
              ["/gel-pads", "Gel Pads"],
              ["/gift-card", "Gift Cards"],
              ["/cart", "Cart"],
            ]}
          />
          <FooterCol
            title="Learn"
            links={[
              ["/how-it-works", "How It Works"],
              ["/science", "The Science"],
              ["/about", "About"],
              ["/try", "Try Before You Buy"],
            ]}
          />
          <FooterCol
            title="Support"
            links={[
              ["/help", "Help Centre"],
              ["/setup", "Set-up guides"],
              ["/contact", "Contact"],
            ]}
          />
        </div>
        <p className="px-4 pb-8 text-center text-xs text-muted">
          © 2026 Neupulse. Ships to the UK and Channel Islands. Checkout is ready
          for your payment provider.
        </p>
      </footer>
    </div>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: [string, string][];
}) {
  return (
    <div>
      <h2 className="mb-3 text-sm font-semibold">{title}</h2>
      <ul className="space-y-2 text-sm text-muted">
        {links.map(([to, label]) => (
          <li key={to}>
            <Link to={to} className="hover:text-ink">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
