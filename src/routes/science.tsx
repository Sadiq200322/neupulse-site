import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/science")({
  component: SciencePage,
});

function SciencePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-4xl font-semibold">The science behind Neupulse</h1>
      <p className="mt-4 text-lg text-muted">
        Neupulse C is a wrist wearable that uses gentle, rhythmic stimulation to support a sense of calm. It builds on over 20 years of neuroscience research led by our founders at the University of Nottingham.
      </p>
      <div className="mt-6 space-y-4 text-muted">
        <p>Our research began in 2005, exploring Tourette syndrome and the brain networks involved in movement and cognitive control. Early studies used brain imaging and stimulation to understand how changes in brain function relate to the natural variation of tics over time.</p>
        <p>In 2009, work with the UK charity Tourettes Action, the NIHR and Nottingham Biomedical Research Centre highlighted the need for approaches that could be used more easily outside a clinic.</p>
        <p>The team investigated non-invasive ways of interacting with brain activity, including methods indicated to influence neural rhythms associated with motor control. Techniques such as transcranial magnetic stimulation were explored, but they were not practical for everyday use.</p>
        <p>That led to rhythmic median nerve stimulation as a more accessible alternative. Supported by the University of Nottingham, Tourettes Action, and the NIHR Nottingham Biomedical Research Centre, this work became the broader Neupulse platform.</p>
        <p>Clinical studies, including a UK double-blind trial, have explored this approach in people with tic disorders. Findings indicated changes in tic-related measures under certain conditions. The research continues to inform clinical development.</p>
        <p>The medical device, Neupulse M, is under development and moving through regulatory approval. Neupulse C is the wellness form of the same approach, made for general wellbeing.</p>
      </div>

      <h2 className="mt-14 text-3xl font-semibold">Findings from clinical studies</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Stat title="Motor tics" value="77%" label="of participants receiving active stimulation showed at least a 25% reduction in motor tic severity versus their baseline over 4 weeks." />
        <Stat title="Phonic tics" value="54%" label="showed at least a 25% reduction in phonic tic severity versus baseline over the same period." />
      </div>
      <p className="mt-4 text-xs text-muted">
        These findings relate to clinical research in people with tic disorders and are part of ongoing clinical development. Neupulse C is a wellness device. It is not designed to diagnose, treat, or cure any medical condition.
      </p>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">From research to the real world</h2>
        <p className="mt-3 text-sm text-muted">
          This film looks at research into median nerve stimulation in people with tic disorders. It reflects the clinical studies behind the wider platform. It does not show the intended use of Neupulse C.
        </p>
        <div className="mt-4 overflow-hidden rounded-card bg-ink">
          <iframe
            className="aspect-video w-full"
            src="https://www.youtube-nocookie.com/embed/o_NvRsYMQg4"
            title="Median nerve stimulation research"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>

      <h2 className="mt-14 text-2xl font-semibold">Meet the scientists</h2>
      <ul className="mt-4 grid gap-3 sm:grid-cols-3">
        {[
          ["Prof. Stephen Jackson", "Founder and Chief Scientific Officer"],
          ["Prof. Georgina Jackson", "Founder and Senior Science Officer"],
          ["Dr Barbara Morera", "Founder and Chief Research Officer"],
        ].map(([name, role]) => (
          <li key={name} className="rounded-card border border-line p-4">
            <p className="font-medium">{name}</p>
            <p className="mt-1 text-sm text-muted">{role}</p>
          </li>
        ))}
      </ul>
      <Link to="/how-it-works" className="mt-10 inline-flex min-h-12 items-center rounded-full bg-ink px-7 text-sm font-medium text-paper">
        How Neupulse C works
      </Link>
    </div>
  );
}

function Stat({ title, value, label }: { title: string; value: string; label: string }) {
  return (
    <article className="rounded-card bg-mist p-6">
      <p className="text-sm font-medium text-muted">{title}</p>
      <p className="mt-2 text-4xl font-semibold">{value}</p>
      <p className="mt-2 text-sm text-muted">{label}</p>
    </article>
  );
}
