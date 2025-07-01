"use client";
import { fullTerms } from "../data/terms";

export default function OptionSelector({ onSelect }) {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-blue-800">Willkommen zu unseren AGB</h1>
      <p className="text-blue-700 font-bold">Vorschau: </p>

      {/* Vorschau-Fenster */}
      <div className="bg-blue-50 text-blue-900 p-4 rounded shadow-inner h-48 overflow-hidden whitespace-pre-wrap border border-blue-200 text-sm">
        {fullTerms}
      </div>
      <p className="text-sm text-blue-600">
        Hinweis: Die vollständigen AGB sind lang und detailliert. Bitte wähle eine Option, um fortzufahren.
      </p>
      <div className="flex gap-4">
        <button
          onClick={() => onSelect("full")}
          className="bg-blue-700 text-white px-4 py-2 rounded"
        >
          Ich lese die vollen AGB
        </button>
        <button
          onClick={() => onSelect("summary")}
          className="bg-blue-200 text-blue-900 px-4 py-2 rounded"
        >
          Zeig mir die Kurzfassung
        </button>
      </div>
    </div>
  );
}