import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/try")({
  component: TryPage,
});

const FAQS: [string, string][] = [
  ["Can I cancel or reschedule?", "Yes, free of charge up to 7 days before the session. Inside 7 days, send a message and the team will try to help. Charges may apply."],
  ["Where are sessions held?", "At the office in Nottingham. The welcome email has directions."],
  ["Do I need to bring anything?", "No. If you buy on the day, bring a credit or debit card. Cash, Apple Pay and Google Pay are not taken in the session."],
  ["Can I bring someone?", "If you are 18 or over, you can bring a guest. Under 18s must come with a legal guardian aged 18 or over."],
  ["What if I do not live in the UK?", "You can attend, but read the shipping and travel notes first. The device itself only ships to UK and Channel Islands addresses."],
  ["Can I buy extra gel pads on the day?", "Yes. Boxes are £25, up to 6 at a time, by card only."],
];

function TryPage() {
  const [open, setOpen] = useState(0);
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <p className="text-sm font-medium tracking-wide text-muted">Nottingham</p>
      <h1 className="mt-2 text-4xl font-semibold">Try Before You Buy</h1>
      <p className="mt-4 text-lg text-muted">
        Visit the home base in Nottingham to make sure Neupulse C works for you.
      </p>
      <p className="mt-3 font-medium">45-minute session · based in Nottingham · £50 per session</p>
      <p className="mt-4 text-muted">
        <span className="font-semibold text-ink">96%</span> of people who try Neupulse C at a session go on to buy one. Fill in a short eligibility form first, then choose a time.
      </p>
      <p className="mt-4 rounded-card bg-mist p-4 text-sm">
        Sessions are fully booked for 2026. Register interest for 2027 and you will hear when dates open.
      </p>

      <h2 className="mt-12 text-2xl font-semibold">How it works</h2>
      <ol className="mt-4 space-y-3">
        {[
          ["Check you are eligible", "A short form. If you are eligible, you go straight through to booking."],
          ["Book a time", "Choose a slot and pay £50. A welcome email has directions. Under 18s must come with a legal guardian."],
          ["Try it with the team", "Two people from Customer Experience stay with you, answer questions, and guide a few activities. Buy on the day and the £50 comes off the device so you can take it home. Buy later and the appointment cost still comes off."],
        ].map(([title, body], index) => (
          <li key={title} className="rounded-card border border-line p-4">
            <span className="text-sm text-muted">Step {index + 1}</span>
            <p className="mt-1 font-medium">{title}</p>
            <p className="mt-1 text-sm text-muted">{body}</p>
          </li>
        ))}
      </ol>

      <div className="mt-8 grid gap-4">
        <blockquote className="rounded-card bg-mist p-5 text-sm">
          “I have just been using it everywhere now. There is not a day where I go without it.”
        </blockquote>
        <blockquote className="rounded-card bg-mist p-5 text-sm">
          “It was amazing. I didn’t know my brain could feel so calm. I could actually follow a train of thought.”
        </blockquote>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link to="/contact" className="inline-flex min-h-12 items-center rounded-full bg-ink px-7 text-sm font-medium text-paper">
          Register interest for 2027
        </Link>
        <Link to="/product" className="inline-flex min-h-12 items-center rounded-full border border-line px-7 text-sm font-medium">
          Order for home instead
        </Link>
      </div>

      <h2 className="mt-14 text-2xl font-semibold">Frequently asked questions</h2>
      <div className="mt-4 divide-y divide-line border-y border-line">
        {FAQS.map(([q, a], index) => (
          <div key={q}>
            <button type="button" className="tap flex min-h-14 w-full items-center justify-between gap-4 py-3 text-left font-medium" onClick={() => setOpen(open === index ? -1 : index)}>
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
