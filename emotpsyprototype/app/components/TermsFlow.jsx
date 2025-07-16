// components/TermsFlow.js
"use client";
import { useState } from "react";
import OptionSelector from "./OptionSelector";
import TermsFull from "./TermsFull";
import TermsSummary from "./TermsSummary";
import ShameScreen from "./ShameScreen";

function TermsFlow() {
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

export default TermsFlow;
