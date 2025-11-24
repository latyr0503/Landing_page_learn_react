import { useState } from "react";
import { sculptureList } from "../lib/data";

export default function AboutPage() {
  return (
    <div className="container py-12 space-y-8">
      <h1 className="text-4xl font-bold text-purple-800">A propos</h1>

      <Temoignages />
    </div>
  );
}

function Temoignages() {
  const [index, setIndex] = useState(0);
  const [afficher, setAfficher] = useState(true);

  function handleClick() {
    setIndex(index + 1);
    console.log(index);
  }

  function handleAfficher() {
    setAfficher(!afficher);
  }

  const sculpture = sculptureList[index];

  return (
    <div>
      <button
        className="bg-purple-800 text-white px-4 py-2 rounded-md cursor-pointer"
        onClick={() => setIndex(index - 1)}
      >
        precedent
      </button>

      <button
        className="bg-purple-800 text-white px-4 py-2 rounded-md cursor-pointer"
        onClick={handleClick}
      >
        Suivant
      </button>
      <h2>
        <i>{sculpture.name} </i>
        par {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} sur {sculptureList.length})
      </h3>
      <img src={sculpture.url} alt={sculpture.alt} />

      <button
        className="bg-purple-800 text-white px-4 py-2 rounded-md cursor-pointer"
        onClick={handleAfficher}
      >
        afficher
      </button>

      {afficher ? (
        <p>{sculpture.description}</p>
      ) : (
        <p>description non disponible</p>
      )}
    </div>
  );
}
