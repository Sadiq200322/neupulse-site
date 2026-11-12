import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="mx-auto max-w-xl px-4 py-16">
      <h1 className="text-4xl font-semibold">Contact us</h1>
      <p className="mt-3 text-muted">
        Send a message and the team replies as soon as they can. Check the Help Centre first — most order, delivery and setup questions are already answered there.
      </p>
      <div className="mt-6 grid gap-3 text-sm">
        <Link to="/help" className="rounded-card border border-line p-4 font-medium">Need help? Start in the Help Centre</Link>
        <Link to="/try" className="rounded-card border border-line p-4 font-medium">Register for a 2027 Try Before You Buy session</Link>
        <p className="rounded-card border border-line p-4 text-muted">Account deletion: say so in the message and include the email on the Neutrack account.</p>
      </div>
      {sent ? (
        <p className="mt-8 rounded-card bg-ok-soft p-5 text-sm text-ok">
          Saved locally. Wire this form to your inbox when you connect email.
        </p>
      ) : (
        <form
          className="mt-8 space-y-4"
          onSubmit={(event) => {
            event.preventDefault();
            setSent(true);
          }}
        >
          <Field label="Name" name="name" />
          <Field label="Email" name="email" type="email" />
          <label className="block text-sm font-medium">
            Message
            <textarea
              required
              name="message"
              rows={5}
              className="mt-1 w-full rounded-2xl border border-line px-4 py-3 font-normal"
            />
          </label>
          <button
            type="submit"
            className="inline-flex min-h-12 items-center rounded-full bg-ink px-7 text-sm font-medium text-paper"
          >
            Send
          </button>
        </form>
      )}
    </div>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <label className="block text-sm font-medium">
      {label}
      <input
        required
        name={name}
        type={type}
        className="mt-1 w-full rounded-full border border-line px-4 py-3 font-normal"
      />
    </label>
  );
}
