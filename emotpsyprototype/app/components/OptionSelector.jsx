"use client";
export default function OptionSelector({ onSelect }) {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Willkommen zu unseren AGB</h1>
      <p className="text-gray-700">Wie möchtest du fortfahren?</p>
      <div className="flex gap-4">
        <button onClick={() => onSelect("full")} className="bg-green-600 text-white px-4 py-2 rounded">Ich lese die vollen AGB</button>
        <button onClick={() => onSelect("summary")} className="bg-yellow-500 text-black px-4 py-2 rounded">Zeig mir die Kurzfassung</button>
      </div>
    </div>
  );
}
