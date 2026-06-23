'use client';

import Link from 'next/link';

export function Navbar() {
  return (
    <header className="border-b bg-white">
      <nav className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg">
          IC Compass
        </Link>
        <div className="flex gap-4 text-sm">
          <Link href="/foods">Foods</Link>
          <Link href="/log">Log</Link>
          <Link href="/products">Resources</Link>
        </div>
      </nav>
    </header>
  );
}
