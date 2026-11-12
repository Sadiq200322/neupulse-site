import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <>
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <p className="text-sm font-medium tracking-wide text-muted">A new era of brain health</p>
          <h1 className="mt-3 text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">
            Live every day, better.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted">
            Neupulse C is a wrist-worn wellness device that uses gentle median nerve
            stimulation to evoke feelings of calm and relaxation when restlessness or
            tension builds.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/product"
              className="inline-flex min-h-12 items-center rounded-full bg-ink px-7 text-sm font-medium text-paper"
            >
              Shop Neupulse C
            </Link>
            <Link
              to="/try"
              className="inline-flex min-h-12 items-center rounded-full border border-line px-7 text-sm font-medium"
            >
              Try Before You Buy
            </Link>
          </div>
          <p className="mt-6 text-sm text-muted">★ 4.8/5 on Google · 96% of trials became a purchase</p>
        </div>
        <img
          src="/media/device-open.jpg"
          alt="Neupulse C wearable with its strap open"
          className="w-full rounded-card bg-mist"
        />
      </section>

      <section className="bg-mist">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center">
          <h2 className="text-3xl font-semibold">Who we are</h2>
          <p className="mt-4 text-muted">
            Built on 20 years of University of Nottingham research, including a completed
            clinical trial. Drug-free, non-invasive and backed by 30-day returns. Available
            in the UK and Channel Islands.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-center text-3xl font-semibold">Getting started</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            ["1", "Order the device", "Buy Neupulse C, or book a Try Before You Buy session in Nottingham."],
            ["2", "Download Neutrack C", "The free app sets intensity and session length on iOS and Android."],
            ["3", "Personalise it", "Help Centre articles walk through setup so the first session feels easy."],
          ].map(([n, title, body]) => (
            <article key={n} className="rounded-card border border-line p-6">
              <p className="text-4xl font-light">{n}</p>
              <h3 className="mt-3 text-lg font-medium">{title}</h3>
              <p className="mt-2 text-sm text-muted">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-mist">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-center text-3xl font-semibold">Don't take our word for it</h2>
          <p className="mt-2 text-center text-muted">Hear from the Neupulse community</p>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              ["Tilly's Story", "Tilly's adventures with Nelly the Neupulse."],
              ["Ollie's Story", "Ollie is pursuing automotive mechanics with his Neupulse C."],
              ["Katie's Story", "Katie's dreams of dancing have been made possible by her Neupulse C."],
            ].map(([title, body]) => (
              <article key={title} className="rounded-card bg-paper p-6">
                <h3 className="font-medium">{title}</h3>
                <p className="mt-2 text-sm text-muted">{body}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              ["I have just been using it everywhere now. There is not a day where I go without it.", "United Kingdom · 15 September 2026"],
              ["You have changed my life. My dreams feel possible, and my brain feels more like home.", "United Kingdom · 24 August 2026"],
              ["I've been doing things I enjoy again and I've just been an overall happier person.", "United Kingdom · 3 August 2026"],
            ].map(([quote, meta]) => (
              <blockquote key={meta} className="rounded-card border border-line bg-paper p-6">
                <p className="text-sm">{quote}</p>
                <footer className="mt-3 text-xs text-muted">{meta}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <img
            src="/media/device-on-arm.jpg"
            alt="Person wearing the Neupulse C on their wrist"
            className="w-full rounded-card object-cover"
          />
          <div>
            <h2 className="text-3xl font-semibold">Built on 20 years of neuroscience.</h2>
            <p className="mt-4 text-muted">
              Neupulse is a University of Nottingham spin-out, built on the research of
              Professor Stephen Jackson, Professor Georgina Jackson and Dr Barbara Morera.
            </p>
            <Link to="/science" className="mt-6 inline-block text-sm font-medium underline">
              Explore the science
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center">
          <h2 className="text-3xl font-semibold">Try Before You Buy</h2>
          <p className="mt-3 text-lg text-paper/80">
            96% of people who try Neupulse C at a session go on to buy one.
          </p>
          <p className="mt-2 text-sm text-paper/70">
            45-minute session in Nottingham · £50, taken off the device if you buy.
          </p>
          <Link
            to="/try"
            className="mt-8 inline-flex min-h-12 items-center rounded-full bg-paper px-7 text-sm font-medium text-ink"
          >
            See how sessions work
          </Link>
        </div>
      </section>
    </>
  );
}
