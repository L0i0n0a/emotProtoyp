"use client";
import { fullTerms } from "../data/terms";
import { agbText } from "../data/terms";

export default function TermsFull({ onConfirm, onBack }) {
  return (
    <div className="flex flex-col h-[80vh] space-y-4">
      <h2 className="text-xl font-semibold text-blue-800">Vollständige AGB</h2>

      <div className="flex-1 overflow-y-auto rounded bg-gray-100 text-gray-900 p-4 whitespace-pre-wrap shadow-inner">
        {agbText}
      </div>

      <div className="flex justify-end pt-2 border-t">
        <button onClick={onBack} className="text-sm text-blue-700 underline hover:text-blue-900 mr-4">
          Zurück
        </button>
        <button onClick={onConfirm} className="bg-blue-700 text-white px-4 py-2 rounded">
          Ich akzeptiere
        </button>
      </div>
    </div>
  );
}
