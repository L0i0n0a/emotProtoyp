"use client";
import { useState } from "react";
import OptionSelector from "./components/OptionSelector";
import TermsFull from "./components/TermsFull";
import TermsSummary from "./components/TermsSummary";
import ShameScreen from "./components/ShameScreen";

function App() {
  const [choice, setChoice] = useState(null);
  const [confirmed, setConfirmed] = useState(false);

  if (confirmed) return <ShameScreen userChoice={choice} />;

  return (
    <div className="p-8 w-[80vw] mx-auto">
      {!choice ? (
        <OptionSelector onSelect={setChoice} />
      ) : choice === "full" ? (
        <TermsFull
          onConfirm={() => setConfirmed(true)}
          onBack={() => setChoice(null)}
        />
      ) : (
        <TermsSummary 
          onConfirm={() => setConfirmed(true)} 
          onBack={() => setChoice(null)}
        />
      )}
    </div>
  );
}

export default App;
