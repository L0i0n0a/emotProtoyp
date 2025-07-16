// App.js
"use client";
import { useState } from "react";
import TermsFlow from "./components/TermsFlow";

function App() {
  const [started, setStarted] = useState(false);

  return (
    <div className="p-8 w-[80vw] mx-auto ">
      {!started ? (
        <button
          onClick={() => setStarted(true)}
          className="px-6 py-3 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition"
        >
          Start
        </button>
      ) : (
        <TermsFlow />
      )}
    </div>
  );
}

export default App;
