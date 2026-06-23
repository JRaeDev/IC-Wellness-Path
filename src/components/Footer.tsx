export function Footer() {
  return (
    <footer className="border-t bg-white mt-8">
      <div className="max-w-4xl mx-auto px-4 py-4 text-xs text-slate-500 flex justify-between">
        <span>© {new Date().getFullYear()} IC Compass</span>
        <span>Not medical advice. For information only.</span>
      </div>
    </footer>
  );
}
