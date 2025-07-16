"use client";
import { missedClauses } from "../data/terms";

export default function ShameScreen({ userChoice }) {
  return (
    <div className="p-8 mt-16 w-[80vw] h-[80vh] max-w-3xl mx-auto bg-blue-50 shadow-inner rounded-lg border border-blue-200">
      {userChoice === "summary" ? (
        <>
          <h2 className="text-2xl font-bold text-red-700">⚠️ AGBs akzeptiert</h2>
          <p className="mt-4 text-gray-800">
            Du hast dich für die <strong>Zusammenfassung durch die KI</strong> entschieden.
            Hier sind einige Klauseln, denen du zugestimmt hast ohne den Originaltext zu lesen:
          </p>
          <ul className="list-disc pl-6 mt-4 text-red-700 text-sm space-y-1">
            {missedClauses.map((clause, idx) => (
              <li key={idx}>{clause}</li>
            ))}
          </ul>

          <div className="mt-6 text-gray-700 text-sm space-y-3">
            <p>
              <strong>Die KI hat dir Inhalte zwar gefiltert, war dabei aber nicht neutral.</strong> <br />  
              Ihre Auswahl basiert auf Datenmustern und statistischer Relevanz, nicht auf deinen individuellen
              Interessen.
            </p>
            <p>
              Was wie Unterstützung wirkt, kann zur Entmündigung führen – wenn wir Entscheidungen
              nicht mehr selbst hinterfragen.
            </p>
            <p className="italic text-gray-600">
              Vielleicht lohnt sich beim nächsten Mal ein genauerer Blick. Juristische Verantwortung
              bleibt bei dir.
            </p>
          </div>
        </>
      ) : (
        <>
          <h2 className="text-2xl font-bold text-blue-700">🎉 Respekt!</h2>
          <p className="mt-4 text-gray-800">
            Du hast die vollständigen AGB gelesen – und damit bewusst selbst entschieden. Stark!
          </p>
        </>
      )}
    </div>
  );
}
