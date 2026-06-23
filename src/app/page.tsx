import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <h1 className="text-3xl font-bold">
          IC-friendly eating, simplified.
        </h1>
        <p className="text-slate-700 text-sm">
          IC Compass is a gentle, practical space for people living with interstitial cystitis.
          Find IC-friendly foods, track symptoms, and explore tools that make daily life a little easier.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/foods"
            className="px-4 py-2 rounded-md bg-sky-600 text-white text-sm font-medium"
          >
            Browse IC-friendly foods
          </Link>
          <Link
            href="/log"
            className="px-4 py-2 rounded-md border text-sm font-medium"
          >
            Start a symptom log
          </Link>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <div className="p-4 rounded-lg bg-white shadow-sm border">
          <h2 className="font-semibold mb-2 text-sm">Food clarity</h2>
          <p className="text-xs text-slate-700">
            A growing list of IC-friendly foods, with simple labels: safe, caution, avoid.
          </p>
        </div>
        <div className="p-4 rounded-lg bg-white shadow-sm border">
          <h2 className="font-semibold mb-2 text-sm">Symptom tracking</h2>
          <p className="text-xs text-slate-700">
            Log pain, urgency, and notes so you can start to see patterns over time.
          </p>
        </div>
        <div className="p-4 rounded-lg bg-white shadow-sm border">
          <h2 className="font-semibold mb-2 text-sm">Practical resources</h2>
          <p className="text-xs text-slate-700">
            Meal ideas, grocery lists, and guides created by someone who actually lives with IC.
          </p>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="font-semibold text-sm">Stay in the loop</h2>
        <p className="text-xs text-slate-700">
          I’m building IC Compass slowly and thoughtfully. Drop your email if you want new tools,
          recipes, and resources as they’re released.
        </p>
        <form className="flex flex-col sm:flex-row gap-2 max-w-md">
          <input
            type="email"
            placeholder="you@example.com"
            className="flex-1 border rounded-md px-3 py-2 text-sm"
          />
          <button
            type="submit"
            className="px-4 py-2 rounded-md bg-sky-600 text-white text-sm font-medium"
          >
            Join the list
          </button>
        </form>
      </section>
    </div>
  );
}
