// App.js
"use client";
import { useState } from "react";
import TermsFlow from "./components/TermsFlow";

function App() {
  const [started, setStarted] = useState(false);

  return (
    <div className="p-8 w-[90vw] max-w-5xl mx-auto">
      {!started ? (
        <div className="flex flex-col items-center justify-center h-[85vh] text-center space-y-6">
          <h1 className="text-3xl font-bold mb-4">
            Informationen zu den Allgemeinen Geschäftsbedingungen
          </h1>

          <div className="text-lg leading-relaxed space-y-4 max-w-3xl">
            <div>
              <h2 className="text-xl font-semibold mb-2">Hinweis zur Systemverwendung</h2>
              <p>
                Dieses System wurde so konzipiert, dass es flexibel in unterschiedliche Anwendungen und digitale Plattformen integriert werden kann, bei denen die Darstellung und Bestätigung von Allgemeinen Geschäftsbedingungen (AGB) erforderlich ist.
              </p>
              <p>
                Ob in Webportalen, mobilen Apps, E-Commerce-Systemen oder unternehmensinternen Anwendungen – das Modul eignet sich zur strukturierten und nutzerfreundlichen Vermittlung rechtlicher Inhalte. Durch die Kombination aus vollständiger Darstellung und verständlicher Zusammenfassung unterstützt es sowohl die rechtliche Absicherung als auch die Nutzerorientierung.
              </p>
            </div>
          </div>

          <button
            onClick={() => setStarted(true)}
            className="mt-8 px-8 py-4 text-lg bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
          >
            Start
          </button>
        </div>
      ) : (
        <TermsFlow />
      )}
    </div>
  );
}

export default App;
