"use client";
import { fullTerms } from "../data/terms";

export default function TermsFull({ onConfirm }) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Vollständige AGB</h2>
      <pre className="bg-gray-100 p-4 rounded whitespace-pre-wrap">{fullTerms}</pre>
      <button onClick={onConfirm} className="bg-blue-700 text-white px-4 py-2 rounded">Ich akzeptiere</button>
    </div>
  );
}
