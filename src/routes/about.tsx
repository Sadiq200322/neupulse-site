import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

const FOUNDERS = [
  ["Professor Stephen Jackson", "Founder and Chief Scientific Officer"],
  ["Emeritus Professor Georgina Jackson", "Founder, Non-executive Director and Senior Science Officer"],
  ["Dr Barbara Morera", "Founder, Director and Chief Research Officer"],
];

const BOARD = [
  ["Ian Rhodes", "Chair of the board"],
  ["Paul Cable", "Chief Executive Officer and Director"],
  ["Karl Moss", "Independent Non-executive Director"],
  ["David O'Reilly", "Investor and Director"],
  ["James Duncan", "Investor and Observer"],
  ["Sandy Reid", "Board Observer"],
  ["Dr Amanda Larkin", "Observer and Finance Director"],
];

const LEADERS = [
  ["Paul Cable", "Chief Executive Officer"],
  ["Dr David Moser", "Chief Technology Officer"],
  ["Claire Hall", "Chief Compliance Officer"],
  ["Ben Garland", "eCommerce Operations"],
  ["Dr Amanda Larkin", "Chief Financial Officer"],
  ["Dr Basil Matta", "Medical Director"],
  ["Richard Cohen", "Chief Operating Officer"],
];

function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <p className="text-sm font-medium tracking-wide text-muted">The Neupulse journey</p>
      <h1 className="mt-2 text-4xl font-semibold">Founded in science, developed by people</h1>
      <p className="mt-4 text-lg text-muted">
        Our story began over 20 years ago in neuroscience research. Today that work is becoming technologies that support wellbeing.
      </p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        <article className="rounded-card bg-mist p-6">
          <h2 className="text-xl font-medium">Vision</h2>
          <p className="mt-2 text-sm text-muted">Accessible solutions that help people live more of the life they want.</p>
        </article>
        <article className="rounded-card bg-mist p-6">
          <h2 className="text-xl font-medium">Mission</h2>
          <p className="mt-2 text-sm text-muted">Give people a practical, drug-free way to find calm when tension builds.</p>
        </article>
      </div>

      <People title="Our founders" people={FOUNDERS} />
      <People title="Board of directors" people={BOARD} />
      <People title="Senior leadership" people={LEADERS} />

      <section className="mt-12 rounded-card border border-line p-6">
        <h2 className="text-xl font-medium">Join the team</h2>
        <p className="mt-2 text-sm text-muted">
          People here say the motivation comes from work that tries to improve lives. Vacancies are posted as they open.
        </p>
      </section>
    </div>
  );
}

function People({ title, people }: { title: string; people: string[][] }) {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {people.map(([name, role]) => (
          <li key={name + role} className="rounded-card border border-line p-4">
            <p className="font-medium">{name}</p>
            <p className="text-sm text-muted">{role}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
