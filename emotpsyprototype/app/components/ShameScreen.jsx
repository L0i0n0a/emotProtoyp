"use client";
import { useState, useRef } from "react";
import { missedClauses, fullTerms } from "../data/terms";

export default function ShameScreen({ userChoice }) {
  const [showFullTerms, setShowFullTerms] = useState(false);
  const topRef = useRef(null);

  return (
    <div ref={topRef} className="p-8 mt-16 max-w-7xl w-[80vw] mx-auto bg-blue-50 shadow-inner rounded-lg border border-blue-200">
      {userChoice === "summary" ? (
        <>
          <h2 className="text-2xl font-bold text-blue-700">Vielleicht lohnt sich beim nächsten Mal ein genauerer Blick</h2>
          <div className="mt-6 text-gray-700 space-y-3">
            <p>
              Die KI hat die Inhalte für dich gefiltert, dabei aber keine persönliche Bewertung vorgenommen.
              Sie orientiert sich an Datenmustern und statistischer Relevanz, nicht an deinen individuellen Bedürfnissen oder Prioritäten.
            </p>
            <p>
              Unsere Zusammenfassungen bieten einen schnellen Überblick über die wichtigsten Punkte, ersetzen jedoch nicht dein eigenes Urteilsvermögen – besonders bei rechtlichen Entscheidungen.
            </p>
            <p>
              Ein genauerer Blick in die vollständigen AGB lohnt sich daher immer. Die juristische Verantwortung liegt bei dir.
            </p>
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
            <p className="mt-4 text-gray-800">Wenn du jetzt das Bedürnis hast dir die AGB nocheinmal genauer anzuschauen kannst du das hier tun.</p>
          {/* Show Full Terms Button */}
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowFullTerms((v) => !v)}
              className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 transition-colors cursor-pointer shadow"
            >
              {showFullTerms ? "Vollständige AGB ausblenden" : "Vollständige AGB anzeigen"}
            </button>
          </div>
          {showFullTerms && (
            <>
              <div className="mt-8 p-6 bg-blue-100 rounded shadow-inner text-gray-900 whitespace-pre-wrap">
                <h3 className="text-lg font-bold text-blue-800 mb-2">Vollständige AGB</h3>
                {fullTerms}
              </div>
              <div className="flex justify-center mt-4">
                <button
                  className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 transition-colors cursor-pointer shadow"
                  onClick={() => {
                    if (topRef.current) {
                      topRef.current.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Zurück zum Anfang
                </button>
              </div>
            </>
          )}
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
