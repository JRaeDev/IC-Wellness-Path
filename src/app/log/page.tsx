'use client';

import { FormEvent, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function LogPage() {
  const [pain, setPain] = useState(3);
  const [urgency, setUrgency] = useState(3);
  const [notes, setNotes] = useState('');
  const [status, setStatus] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus('Saving…');

    const { error } = await supabase.from('symptom_logs').insert({
      pain_level: pain,
      urgency_level: urgency,
      notes
    });

    if (error) {
      setStatus('Something went wrong. Please try again.');
    } else {
      setStatus('Saved.');
      setNotes('');
      setPain(3);
      setUrgency(3);
    }
  }

  return (
    <div className="space-y-4 max-w-md">
      <h1 className="text-2xl font-bold">Log a flare or symptom day</h1>
      <p className="text-sm text-slate-700">
        Quick notes are enough. You don&apos;t have to be perfect—this is just for you.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4 bg-white border rounded-md p-4">
        <div className="space-y-1">
          <label className="text-xs font-medium">Pain level (1–10)</label>
          <input
            type="number"
            min={1}
            max={10}
            value={pain}
            onChange={(e) => setPain(Number(e.target.value))}
            className="w-full border rounded-md px-2 py-1 text-sm"
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs font-medium">Urgency level (1–10)</label>
          <input
            type="number"
            min={1}
            max={10}
            value={urgency}
            onChange={(e) => setUrgency(Number(e.target.value))}
            className="w-full border rounded-md px-2 py-1 text-sm"
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs font-medium">Notes (optional)</label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={4}
            className="w-full border rounded-md px-2 py-1 text-sm"
            placeholder="What did you eat? Stress? Sleep? Anything that feels relevant."
          />
        </div>

        <button
          type="submit"
          className="px-4 py-2 rounded-md bg-sky-600 text-white text-sm font-medium"
        >
          Save entry
        </button>

        {status && <p className="text-xs text-slate-600">{status}</p>}
      </form>
    </div>
  );
}
