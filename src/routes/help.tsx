import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/help")({
  component: HelpPage,
});

const FAQS = [
  ["Do I need the gel pad membership?", "No. Buy boxes of 32 pairs for £25 whenever you need them. Membership is £20 a month, with the first month free when you add it to a device. Pause or cancel anytime."],
  ["What if I change my mind?", "Tell us within 30 days of delivery. We send a prepaid returns label. Postage comes off the refund unless the device is faulty."],
  ["How long does delivery take?", "Standard delivery is free and takes 2 to 3 working days. Express is £7.95 if you order by 2pm, Monday to Friday. Jersey and Guernsey take one extra day."],
  ["Do I need a phone?", "Only to set up. Neutrack C (iOS 17+ or Android 14+) saves your intensity and session length. After that, the device button starts a session."],
  ["Where do I wear it?", "On the underside of the right wrist, slightly towards the thumb. Wear a watch on the other wrist so it does not sit on the pads."],
  ["Do you ship outside the UK?", "Not yet. Delivery is UK and Channel Islands only. You can travel with the device if you pack enough pads."],
  ["What does the warranty cover?", "One year from purchase, for repair or replacement of the electrical parts. It does not cover the strap, casing, gel pads, or damage from misuse."],
  ["Can I pay in instalments?", "At checkout you can choose card, Apple Pay, Google Pay or Klarna on eligible orders. Membership renewals are billed separately and are not split into instalments."],
  ["Is there a larger strap?", "Yes. If the standard strap is small, a larger black strap is available. Ask in the contact form and include your order number."],
  ["How do I delete my Neutrack account?", "Send a message from the contact page and ask for account deletion. Include the email on the account."],
];

function HelpPage() {
  const [open, setOpen] = useState(0);
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-4xl font-semibold">Help Centre</h1>
      <p className="mt-3 text-muted">Orders, delivery, wearing the device, and the app.</p>
      <div className="mt-6 flex flex-wrap gap-2 text-sm">
        <Link to="/setup" className="rounded-full border border-line px-4 py-2">Set-up guides</Link>
        <Link to="/how-it-works" className="rounded-full border border-line px-4 py-2">How it works</Link>
        <Link to="/contact" className="rounded-full border border-line px-4 py-2">Contact</Link>
      </div>
      <div className="mt-8 divide-y divide-line border-y border-line">
        {FAQS.map(([q, a], index) => (
          <div key={q}>
            <button
              type="button"
              className="tap flex min-h-14 w-full items-center justify-between gap-4 py-4 text-left font-medium"
              onClick={() => setOpen(open === index ? -1 : index)}
              aria-expanded={open === index}
            >
              {q}
              <span className="text-muted">{open === index ? "–" : "+"}</span>
            </button>
            {open === index ? <p className="pb-4 text-sm text-muted">{a}</p> : null}
          </div>
        ))}
      </div>
    </div>
  );
}
