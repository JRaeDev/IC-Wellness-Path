export default function ProductsPage() {
  return (
    <div className="space-y-4 max-w-2xl">
      <h1 className="text-2xl font-bold">IC-friendly guides and resources</h1>
      <p className="text-sm text-slate-700">
        These are simple, practical resources created from lived experience with IC.
        They&apos;re meant to save you time, energy, and guesswork.
      </p>

      <ul className="space-y-3">
        <li className="bg-white border rounded-md p-4">
          <h2 className="text-sm font-semibold">7-Day IC-Friendly Meal Plan (Beginner)</h2>
          <p className="text-xs text-slate-700 mt-1">
            A gentle, low-trigger starter plan with simple meals and snacks.
          </p>
          <a
            href="https://your-gumroad-link-here"
            target="_blank"
            className="inline-block mt-2 text-xs font-medium text-sky-700 underline"
          >
            View details
          </a>
        </li>

        <li className="bg-white border rounded-md p-4">
          <h2 className="text-sm font-semibold">IC Grocery List + Flare-Safe Snacks</h2>
          <p className="text-xs text-slate-700 mt-1">
            A printable list you can take to the store, plus snack ideas that are usually gentle.
          </p>
          <a
            href="https://your-gumroad-link-here"
            target="_blank"
            className="inline-block mt-2 text-xs font-medium text-sky-700 underline"
          >
            View details
          </a>
        </li>
      </ul>
    </div>
  );
}
