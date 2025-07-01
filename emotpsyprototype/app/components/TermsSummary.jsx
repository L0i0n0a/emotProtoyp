"use client";
import { summary } from "../data/terms";

export default function TermsSummary({ onConfirm, onBack }) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-blue-800 font-sans">Zusammenfassung</h2>
      <pre className="bg-blue-100 text-blue-900 p-4 rounded whitespace-pre-wrap font-sans">{summary}</pre>
      <div className="flex gap-4">
        <button onClick={onBack} className="text-sm text-blue-700 underline hover:text-blue-900">
          Zurück
        </button>
        <button onClick={onConfirm} className="bg-blue-700 text-white px-4 py-2 rounded">
          Ich akzeptiere
        </button>
      </div>
    </div>
  );
}