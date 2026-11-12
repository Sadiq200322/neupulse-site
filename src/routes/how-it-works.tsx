import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/how-it-works")({
  component: HowPage,
});

function HowPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-4xl font-semibold">How Neupulse C works</h1>
      <p className="mt-4 text-lg text-muted">
        Our research has been shaped by conversations with individuals and families seeking new approaches to everyday challenges. That led to a non-invasive wearable that can be used comfortably outside a clinic.
      </p>
      <p className="mt-4 text-muted">
        Neupulse C uses gentle, rhythmic stimulation at the wrist, targeting peripheral nerves that communicate with the brain. The approach is designed to interact with natural brain activity involved in movement and self-regulation. Research has explored how this kind of stimulation may influence brain rhythms linked to motor control.
      </p>
      <p className="mt-4 text-muted">
        Neupulse C translates that science into a wearable for everyday wellbeing.
      </p>

      <h2 className="mt-14 text-3xl font-semibold">The Neupulse C system</h2>
      <p className="mt-3 text-muted">
        A connected experience: the device, the Neutrack C app, and custom gel pads, built to sit inside a daily routine.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <article className="rounded-card border border-line p-5">
          <img src="/media/device-closed.jpg" alt="Neupulse C device" className="mb-4 w-full rounded-2xl bg-mist object-cover" />
          <h3 className="font-medium">The Neupulse C device</h3>
          <p className="mt-2 text-sm text-muted">A discreet wrist-worn wearable that delivers gentle stimulation and fits into the day.</p>
          <Link to="/product" className="mt-4 inline-block text-sm font-medium underline">Shop Neupulse C</Link>
        </article>
        <article className="rounded-card border border-line p-5">
          <img src="/media/gel-pads.png" alt="Neupulse gel pads" className="mb-4 w-full rounded-2xl bg-mist object-cover" />
          <h3 className="font-medium">Custom-made gel pads</h3>
          <p className="mt-2 text-sm text-muted">They keep contact with the skin comfortable, so each session stays consistent.</p>
          <Link to="/gel-pads" className="mt-4 inline-block text-sm font-medium underline">Shop gel pads</Link>
        </article>
        <article className="rounded-card border border-line p-5">
          <img src="/media/device-phone.jpg" alt="Neutrack C on a phone beside the device" className="mb-4 aspect-square w-full rounded-2xl bg-mist object-cover" />
          <h3 className="font-medium">The Neutrack C app</h3>
          <p className="mt-2 text-sm text-muted">Set up the device and manage sessions. iOS 17 or later, Android 14 or later.</p>
          <Link to="/setup" className="mt-4 inline-block text-sm font-medium underline">Visit the set-up page</Link>
        </article>
      </div>

      <h2 className="mt-14 text-3xl font-semibold">Getting started is simple</h2>
      <ol className="mt-6 space-y-3">
        {[
          "Apply a fresh pair of gel pads to the device.",
          "Strap it on the underside of the right wrist, slightly toward the thumb.",
          "Switch on and set a comfortable but strong level in Neutrack C.",
          "Wear it through daily activities. Start a session whenever you want support.",
        ].map((step, index) => (
          <li key={step} className="rounded-card border border-line p-4">
            <span className="text-sm text-muted">Step {index + 1}</span>
            <p className="mt-1 font-medium">{step}</p>
          </li>
        ))}
      </ol>

      <section className="mt-14 rounded-card bg-mist p-8">
        <h2 className="text-2xl font-semibold">Looking for a gift?</h2>
        <p className="mt-2 text-muted">Gift cards are available in £25, £50, £100, £250 and £500. They work on any product on the site.</p>
        <Link to="/gift-card" className="mt-6 inline-flex min-h-12 items-center rounded-full bg-ink px-7 text-sm font-medium text-paper">
          Buy a gift card
        </Link>
      </section>
    </div>
  );
}
