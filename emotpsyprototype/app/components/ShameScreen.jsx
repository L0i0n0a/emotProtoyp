"use client";
import { missedClauses } from "../data/terms";

export default function ShameScreen({ userChoice }) {
  return (
    <div className="p-6 rounded shadow-md bg-white border border-gray-200">
      {userChoice === "summary" ? (
        <>
          <h2 className="text-2xl font-bold text-red-700">😳 Oh oh...</h2>
          <p className="mt-4 text-gray-800">
            Du hast dich für die <strong>Zusammenfassung</strong> entschieden. Hier ist, was du gerade unterschrieben hast – ohne es zu wissen:
          </p>
          <ul className="list-disc pl-6 mt-4 text-red-700 text-sm space-y-1">
            {missedClauses.map((clause, idx) => (
              <li key={idx}>{clause}</li>
            ))}
          </ul>
          <p className="mt-6 italic text-gray-600">
            Vielleicht das nächste Mal... ein bisschen gründlicher? 🤷‍♂️
          </p>
        </>
      ) : (
        <>
          <h2 className="text-2xl font-bold text-blue-700">🎉 Respekt!</h2>
          <p className="mt-4 text-gray-800">
            Du hast tatsächlich die vollständigen AGB gelesen. Du bist eine seltene Spezies.
          </p>
        </>
      )}
    </div>
  );
}
