"use client";
import { missedClauses } from "../data/terms";

export default function ShameScreen({ userChoice }) {
  return (
    <div className="p-8 mt-16 max-w-3xl w-full mx-auto bg-blue-50 shadow-inner rounded-lg border border-blue-200">
      {userChoice === "summary" ? (
        <>
          <h2 className="text-2xl font-bold text-blue-700">Vielleicht lohnt sich beim nächsten Mal ein genauerer Blick</h2>
          <div className="mt-6 text-gray-700 space-y-3">
            <p>
              Die KI hat die Inhalte für dich gefiltert, dabei aber keine persönliche Bewertung vorgenommen.
Sie orientiert sich an Datenmustern und statistischer Relevanz, nicht an deinen individuellen Bedürfnissen oder Prioritäten. </p>

<p>Unsere Zusammenfassungen bieten einen schnellen Überblick über die wichtigsten Punkte, ersetzen jedoch nicht dein eigenes Urteilsvermögen – besonders bei rechtlichen Entscheidungen.</p>

<p> Ein genauerer Blick in die vollständigen AGB lohnt sich daher immer. Die juristische Verantwortung liegt bei dir. </p>
            
          </div>
          <p className="mt-4 text-gray-800">
            Du hast dich für die <strong>Zusammenfassung durch die KI</strong> entschieden.
            Hier sind einige Klauseln, denen du zugestimmt hast ohne den Originaltext zu lesen:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-1">
            {missedClauses.map((clause, idx) => (
              <li key={idx}>{clause}</li>
            ))}
          </ul>

          
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
