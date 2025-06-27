"use client";
export default function ShameScreen({ userChoice }) {
  const missedClauses = [
    "We reserve the right to sell your data.",
    "You agree to mandatory arbitration in Antarctica.",
    "Your content may be used in advertising without your consent.",
  ];

  return (
    <div className="p-6 bg-red-50 border-l-4 border-red-700 shadow-sm">
      {userChoice === "summary" ? (
        <>
          <h2 className="text-2xl font-bold text-red-700">😳 Oh oh...</h2>
          <p className="mt-4">
            Du hast dich für die <strong>Zusammenfassung</strong> entschieden. Hier ist, was du gerade unterschrieben hast – ohne es zu wissen:
          </p>
          <ul className="list-disc pl-6 mt-4 text-red-600">
            {missedClauses.map((clause, idx) => (
              <li key={idx}>{clause}</li>
            ))}
          </ul>
          <p className="mt-6 italic">Vielleicht das nächste Mal... ein bisschen gründlicher? 🤷‍♂️</p>
        </>
      ) : (
        <>
          <h2 className="text-2xl font-bold text-green-700">🎉 Respekt!</h2>
          <p className="mt-4">Du hast tatsächlich die vollständigen AGB gelesen. Du bist eine seltene Spezies.</p>
        </>
      )}
    </div>
  );
}
