"use client";


import { useEffect, useRef, useState } from "react";
import { fullTerms } from "../data/terms";
import { agbText } from "../data/terms";

export default function TermsFull({ onConfirm, onBack }) {
  // 5 minutes in milliseconds
  const DURATION = 2 * 60 * 1000;
  const [elapsed, setElapsed] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setElapsed((prev) => {
        if (prev + 100 > DURATION) {
          clearInterval(intervalRef.current);
          return DURATION;
        }
        return prev + 100;
      });
    }, 100);
    return () => clearInterval(intervalRef.current);
  }, []);

  const percent = Math.min((elapsed / DURATION) * 100, 100);
  const isReady = elapsed >= DURATION;

  return (
    <div className="flex flex-col h-[90vh] space-y-4">
      <h2 className="text-xl font-semibold text-blue-600">Vollständige AGB</h2>

      {/* Progress Bar */}
      <div className="w-full h-2 bg-gray-200 rounded overflow-hidden mb-2">
        <div
          className="h-full bg-blue-600 transition-all duration-100"
          style={{ width: `${percent}%` }}
        />
      </div>
      <div className="text-s text-gray-200 mb-2">
        {isReady
          ? "Du kannst jetzt akzeptieren."
          : `Bitte lies die AGB. Du kannst in ${Math.ceil((DURATION - elapsed) / 1000)} Sekunden akzeptieren.`}
      </div>

      <div className="flex-1 overflow-y-auto rounded bg-gray-100 text-gray-900 p-4 whitespace-pre-wrap shadow-inner">
        {fullTerms}
      </div>

      <div className="flex flex-row items-center justify-between w-full pt-2 border-t">
        <button onClick={onBack} className="text-m text-grey-300 hover:underline hover:text-blue-200 mr-4 cursor-pointer">
          Zurück
        </button>
        <button
          onClick={onConfirm}
          className={`bg-blue-700 text-white px-4 py-2 rounded transition-opacity ${isReady ? '' : 'opacity-50 cursor-not-allowed'}`}
          disabled={!isReady}
        >
          Ich akzeptiere
        </button>
      </div>
    </div>
  );
}
