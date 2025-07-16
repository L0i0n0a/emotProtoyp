"use client";
import { summary } from "../data/terms";

export default function TermsSummary({ onConfirm, onBack }) {
  return (
    <div className="space-y-4 text-lg">
      <h2 className="text-xl font-semibold text-blue-800 font-sans">Zusammenfassung der KI</h2>
      <p>Die zusammengefasste Version der AGB wurde mithilfe künstlicher Intelligenz erstellt. Ziel ist es, die wesentlichen Inhalte verständlich, kompakt und nutzerfreundlich darzustellen, ohne den rechtlichen Rahmen zu verändern.</p>
      <ul className="bg-blue-100 text-blue-900 p-4 rounded font-sans list-disc pl-8">
  {summary.split('\n').map((line, index) => (
    <li key={index} className="m-1 whitespace-pre-wrap">{line}</li>
  ))}
</ul>

      <div className="flex flex-row items-center justify-between w-full pt-2 border-t">
        <button onClick={onBack} className="text-m text-grey-300 hover:underline hover:text-blue-400 mr-4 cursor-pointer">
          Zurück
        </button>
        <button onClick={onConfirm} className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition-colors cursor-pointer">
          Ich akzeptiere
        </button>
      </div>
    </div>
  );
}