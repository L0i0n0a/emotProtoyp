"use client";
import { fullTerms } from "../data/terms";

export default function OptionSelector({ onSelect }) {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl text-center font-bold text-blue-900">Willkommen zu unseren AGB</h1>
      <p className="text-m text-blue-800">
        <span className="font-bold">Hinweis:</span> Diese KI wurde speziell darauf trainiert, juristische Dokumente wie AGBs effizient zu analysieren.
        Sie greift auf umfangreiche rechtliche Datensätze zurück, erkennt zentrale Klauseln und priorisiert wichtige Inhalte.
        Im Vergleich zur manuellen Lektüre ist sie nicht nur deutlich schneller, sondern berücksichtigt auch Aspekte, die Laien oft übersehen.
      </p>
      <p className="text-m text-blue-800">
        Sie gibt dir eine prägnante Zusammenfassung der wichtigsten Punkte und hilft dir, informierte Entscheidungen zu treffen.
      </p>
      <p className="text-blue-800 text-xl font-bold">Vorschau: </p>
      {/* Vorschau-Fenster */}
      <div className="bg-blue-50 text-blue-900 p-4 rounded shadow-inner h-48 overflow-hidden whitespace-pre-wrap border border-blue-200 text-sm">
        {fullTerms}
      </div>
      
      <div className="flex gap-4">
        <button
          onClick={() => onSelect("full")}
          className="bg-blue-700 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-800 transition-colors"
        >
          Ich lese die vollen AGB
        </button>
        <button
          onClick={() => onSelect("summary")}
          className="bg-blue-200 text-blue-900 px-4 py-2 rounded cursor-pointer hover:bg-blue-300 transition-colors"
        >
          Zeig mir die Kurzfassung
        </button>
      </div>
    </div>
  );
}