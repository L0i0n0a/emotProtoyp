"use client";
import { summary } from "../data/terms";

export default function TermsSummary({ onConfirm }) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Zusammenfassung</h2>
      <pre className="bg-yellow-100 p-4 rounded whitespace-pre-wrap">{summary}</pre>
      <button onClick={onConfirm} className="bg-gray-700 text-white px-4 py-2 rounded">Ich akzeptiere (ungelesen 😅)</button>
    </div>
  );
}
