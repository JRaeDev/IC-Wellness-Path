'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

type Food = {
  id: number;
  name: string;
  category: string | null;
  ic_friendly: string | null; // 'safe' | 'caution' | 'avoid'
  notes: string | null;
};

const badgeClasses: Record<string, string> = {
  safe: 'bg-emerald-100 text-emerald-800',
  caution: 'bg-amber-100 text-amber-800',
  avoid: 'bg-rose-100 text-rose-800'
};

export default function FoodsPage() {
  const [foods, setFoods] = useState<Food[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFoods() {
      const { data, error } = await supabase
        .from('foods')
        .select('*')
        .order('name', { ascending: true });

      if (!error && data) setFoods(data as Food[]);
      setLoading(false);
    }
    loadFoods();
  }, []);

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">IC-friendly foods</h1>
      <p className="text-sm text-slate-700">
        This list is based on common IC experiences and resources. Everyone&apos;s bladder is different—use this as a starting point, not a rulebook.
      </p>

      {loading && <p className="text-sm">Loading foods…</p>}

      {!loading && (
        <ul className="space-y-2">
          {foods.map((food) => (
            <li
              key={food.id}
              className="flex items-start justify-between gap-3 rounded-md bg-white border px-3 py-2"
            >
              <div>
                <p className="text-sm font-medium">{food.name}</p>
                {food.category && (
                  <p className="text-xs text-slate-500">{food.category}</p>
                )}
                {food.notes && (
                  <p className="text-xs text-slate-600 mt-1">{food.notes}</p>
                )}
              </div>
              {food.ic_friendly && (
                <span
                  className={`text-[10px] px-2 py-1 rounded-full self-center font-medium ${
                    badgeClasses[food.ic_friendly] ?? 'bg-slate-100 text-slate-700'
                  }`}
                >
                  {food.ic_friendly}
                </span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
