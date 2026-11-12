import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/setup")({
  component: SetupPage,
});

const GUIDES = [
  {
    kicker: "Gel pads",
    title: "Applying gel pads",
    body: "A fresh pair goes on the contact points before every session. Press them on flat so the whole pad touches the device. Peel the backing only when you are ready to wear it.",
    image: "/media/gel-pads.png",
  },
  {
    kicker: "Placement",
    title: "Placing the device",
    body: "Wear it on the underside of the right wrist, slightly toward the thumb. The strap should be secure but not tight. Keep watches and bracelets on the other wrist.",
    image: "/media/device-on-arm.jpg",
  },
  {
    kicker: "Full guide",
    title: "Setting up Neupulse C",
    body: "Charge with the USB-C cable. Open Neutrack C, pair over Bluetooth, then choose intensity and session length. After that, the button on the device starts a session.",
    image: "/media/device-activate.jpg",
  },
  {
    kicker: "Full guide",
    title: "Changing the strap",
    body: "Unclip the strap from both lugs, line up the new strap, and click it home until it sits flush. A larger black strap is available if the standard one is too small.",
    image: "/media/device-closed.jpg",
  },
];

function SetupPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-4xl font-semibold">Set up Neupulse C</h1>
      <p className="mt-4 text-lg text-muted">
        Four short guides cover pads, placement, first pairing, and a strap change. Do them in order the first time.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {GUIDES.map((guide) => (
          <article key={guide.title} className="overflow-hidden rounded-card border border-line">
            <img src={guide.image} alt="" className="aspect-video w-full object-cover" />
            <div className="p-5">
              <p className="text-xs font-medium tracking-wide text-muted">{guide.kicker}</p>
              <h2 className="mt-1 text-xl font-medium">{guide.title}</h2>
              <p className="mt-2 text-sm text-muted">{guide.body}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-10 flex flex-wrap gap-3">
        <Link to="/product" className="inline-flex min-h-12 items-center rounded-full bg-ink px-7 text-sm font-medium text-paper">Shop Neupulse C</Link>
        <Link to="/help" className="inline-flex min-h-12 items-center rounded-full border border-line px-7 text-sm font-medium">Help Centre</Link>
      </div>
    </div>
  );
}
