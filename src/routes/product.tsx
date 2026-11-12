import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { gbp, useCart } from "@/lib/cart";

export const Route = createFileRoute("/product")({
  component: ProductPage,
});

const GALLERY = [
  { src: "/media/device-open.jpg", alt: "Neupulse C with strap open" },
  { src: "/media/device-on-arm.jpg", alt: "Neupulse C worn on a wrist" },
  { src: "/media/device-phone.jpg", alt: "Using a phone while wearing Neupulse C" },
  { src: "/media/device-activate.jpg", alt: "Switching on the Neupulse C" },
  { src: "/media/device-closed.jpg", alt: "Neupulse C with strap fastened" },
];

const OFFERS = [
  {
    id: "membership",
    name: "Neupulse C + Gel Pad Membership",
    price: 500,
    badge: "Most popular",
    detail: "£500 today, then £20/month. First month of gel pads free. Pause or cancel anytime.",
  },
  {
    id: "one-box",
    name: "Neupulse C + 1 Gel Pad Box",
    price: 525,
    badge: "",
    detail: "Device plus one box of 32 pairs.",
  },
  {
    id: "six-box",
    name: "Neupulse C + 6 Gel Pad Boxes",
    price: 650,
    badge: "",
    detail: "Device plus six boxes so you are stocked from day one.",
  },
];

const BUY_FAQS: [string, string][] = [
  ["Do I need the gel pad membership?", "No. Buy a box of 32 pairs for £25 whenever you need them. Membership is £20 a month, and the first month is free when you add it with Neupulse C. No minimum term."],
  ["What if I change my mind?", "Tell us within 30 days of delivery. We send a prepaid returns label. Postage comes off the refund unless the device is faulty."],
  ["How long does delivery take?", "Standard delivery is free and takes 2 to 3 working days. Express is £7.95 if you order by 2pm, Monday to Friday. Jersey and Guernsey take one extra day."],
  ["Can I try it first?", "Yes. A 45-minute session at the Nottingham office is £50, and that fee comes off the device if you buy on the day."],
  ["Do I need a smartphone?", "Only to set up. Neutrack C on iOS 17+ or Android 14+ saves your settings. After that, the button on the device starts a session."],
  ["Battery, wear, warranty", "Up to 8 hours on a charge. Right wrist, underside, slightly toward the thumb. One-year warranty covers the electrical parts, not the strap, casing, or gel pads."],
];

const SUITABILITY = [
  "People with an implanted electronic device, such as a pacemaker",
  "People using a body-worn electronic device, such as an insulin pump",
  "Metal implants in the lower arm, wrist, or hand",
  "Suspected or diagnosed epilepsy or another seizure disorder",
  "Swollen, infected, or broken skin, or a brain tumour",
  "Children under 12",
];

const INFO = [
  {
    id: "use",
    label: "How to use",
    body: [
      "Apply a fresh pair of gel pads to the device.",
      "Strap it on the underside of the right wrist, slightly toward the thumb.",
      "Switch on and set a comfortable but strong level in Neutrack C.",
      "Wear it through the day. The button starts the next session.",
      "Use a fresh pair of gel pads every time.",
    ],
  },
  {
    id: "specs",
    label: "Specifications",
    body: [
      "Wearing position: right wrist",
      "Stimulation: multiple intensity levels, set in the app",
      "Power: rechargeable battery, USB-C. Up to 8 hours",
      "Materials: skin-safe silicone",
      "Connectivity: Bluetooth, Neutrack C",
      "In the box: device, charging plug, USB-C cable, user manual",
      "Made in the UK. One-year limited warranty on the electrical parts",
    ],
  },
  {
    id: "manual",
    label: "User manual",
    body: [
      "The printed manual ships in the box.",
      "The same steps live on the set-up page: pads, placement, first pairing, and a strap change.",
      "After setup, intensity and session length stay on the device.",
    ],
  },
  {
    id: "suit",
    label: "Is it suitable for me?",
    body: SUITABILITY,
  },
];

function ProductPage() {
  const [shot, setShot] = useState(0);
  const [offerId, setOfferId] = useState(OFFERS[0].id);
  const [faq, setFaq] = useState(0);
  const [info, setInfo] = useState(INFO[0].id);
  const [added, setAdded] = useState(0);
  const add = useCart((state) => state.add);
  const offer = OFFERS.find((item) => item.id === offerId) ?? OFFERS[0];
  const current = GALLERY[shot] ?? GALLERY[0];
  const panel = INFO.find((tab) => tab.id === info) ?? INFO[0];

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <img key={current.src} src={current.src} alt={current.alt} className="fade-swap w-full rounded-card bg-mist" />
          <div className="mt-3 grid grid-cols-5 gap-2">
            {GALLERY.map((image, index) => (
              <button
                key={image.src}
                type="button"
                onClick={() => setShot(index)}
                className={`tap overflow-hidden rounded-xl border ${index === shot ? "border-ink" : "border-transparent"}`}
                aria-label={`Photo ${index + 1}`}
                aria-pressed={index === shot}
              >
                <img src={image.src} alt="" className="aspect-square w-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-medium tracking-wide text-muted">Why Neupulse C</p>
          <h1 className="mt-2 text-4xl font-semibold">Neupulse C</h1>
          <p className="mt-3 text-muted">
            A wearable for everyday calm. Gentle, rhythmic stimulation, whenever you need it.
            Drug-free and non-invasive.
          </p>

          <div className="mt-8 space-y-3">
            {OFFERS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setOfferId(item.id);
                  setAdded(0);
                }}
                aria-pressed={offerId === item.id}
                className={`tap w-full rounded-card border p-4 text-left ${
                  offerId === item.id ? "border-ink bg-mist" : "border-line"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    {item.badge ? (
                      <span className="mb-2 inline-block rounded-full bg-ok-soft px-2 py-0.5 text-xs font-medium text-ok">
                        {item.badge}
                      </span>
                    ) : null}
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
              add(offer);
              setAdded((count) => count + 1);
            }}
          >
            Add to basket · {gbp(offer.price)}
          </button>
          {added > 0 ? (
            <p className="mt-3 text-sm">
              {added === 1 ? "1 added." : `${added} added.`}{" "}
              <Link to="/cart" className="underline">
                View cart
              </Link>
            </p>
          ) : null}
          <p className="mt-3 text-xs text-muted">Ships to the UK and Channel Islands only.</p>

          <ul className="mt-8 space-y-2 text-sm text-muted">
            <li>Designed and made in the UK</li>
            <li>One-year limited warranty</li>
            <li>Free delivery, 2 to 3 working days · Express £7.95</li>
            <li>30-day returns · Klarna on eligible orders</li>
            <li>In the box: device, charging plug, USB-C cable, user manual</li>
          </ul>
        </div>
      </div>

      <section className="mt-16 grid gap-4 md:grid-cols-3">
        {[
          ["The moment", "Busy days, restless moments, and tension that builds up."],
          ["The pulse", "Gentle pulses at the wrist, at an intensity you set in the app."],
          ["The feeling", "Calm: the feeling users describe most."],
        ].map(([title, body]) => (
          <article key={title} className="rounded-card bg-mist p-6">
            <h2 className="font-medium">{title}</h2>
            <p className="mt-2 text-sm text-muted">{body}</p>
          </article>
        ))}
      </section>

      <section className="mt-6 grid gap-4 sm:grid-cols-2">
        <article className="rounded-card border border-line p-6">
          <p className="text-4xl font-semibold">97%</p>
          <p className="mt-2 text-sm text-muted">plan to keep using Neupulse C</p>
        </article>
        <article className="rounded-card border border-line p-6">
          <p className="text-4xl font-semibold">9.4/10</p>
          <p className="mt-2 text-sm text-muted">how likely they are to recommend it</p>
        </article>
      </section>
      <p className="mt-3 text-xs text-muted">
        From interviews with 95 Neupulse C users or their parents at four weeks, 2026. Recommend score based on 91 answers.
      </p>

      <section className="mt-16">
        <h2 className="text-3xl font-semibold">Hear from the people who wear it</h2>
        <p className="mt-2 text-muted">A short film with the Neupulse community. Each story is personal to the people in it.</p>
        <div className="mt-6 overflow-hidden rounded-card bg-ink">
          <iframe
            className="aspect-video w-full"
            src="https://www.youtube-nocookie.com/embed/745chexMbsU"
            title="Neupulse community film"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>

      <section className="mt-16">
        <div role="tablist" aria-label="Product details" className="flex gap-2 overflow-x-auto pb-1">
          {INFO.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={info === tab.id}
              onClick={() => setInfo(tab.id)}
              className={`tap min-h-11 shrink-0 rounded-full px-4 text-sm font-medium ${
                info === tab.id ? "bg-ink text-paper" : "border border-line"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div role="tabpanel" className="fade-swap mt-6 rounded-card border border-line p-6" key={panel.id}>
          <h2 className="text-2xl font-semibold">{panel.label}</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            {panel.body.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
          {panel.id === "manual" ? (
            <Link to="/setup" className="mt-4 inline-block text-sm font-medium underline">
              Open the set-up guides
            </Link>
          ) : null}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Questions before you buy</h2>
        <div className="mt-4 divide-y divide-line border-y border-line">
          {BUY_FAQS.map(([q, a], index) => (
            <div key={q}>
              <button
                type="button"
                className="tap flex min-h-12 w-full items-center justify-between gap-4 py-3 text-left text-sm font-medium"
                aria-expanded={faq === index}
                onClick={() => setFaq(faq === index ? -1 : index)}
              >
                {q}
                <span className="text-muted">{faq === index ? "–" : "+"}</span>
              </button>
              {faq === index ? <p className="pb-3 text-sm text-muted">{a}</p> : null}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
