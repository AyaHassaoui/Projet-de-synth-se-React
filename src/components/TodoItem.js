import { useState } from 'react';

function TodoItem({ tache, changerEtat, supprimerTache, editerTache }) {
  const [enEdition, setEnEdition] = useState(false);
  const [nouveauTexte, setNouveauTexte] = useState(tache.texte);

  const validerEdition = () => {
    if (nouveauTexte.trim() === '') return;
    editerTache(tache.id, nouveauTexte);
    setEnEdition(false);
  };

  return (
    <li className="list-group-item d-flex align-items-center justify-content-between">
      <div className="d-flex align-items-center flex-grow-1 gap-2">
        <input
          type="checkbox"
          className="form-check-input me-2"
          checked={tache.terminee}
          onChange={() => changerEtat(tache.id)}
        />

        {enEdition ? (
          <input
            className="form-control"
            value={nouveauTexte}
            onChange={(e) => setNouveauTexte(e.target.value)}
          />
        ) : (
          <span
            style={{
              textDecoration: tache.terminee ? 'line-through' : 'none',
              color: tache.terminee ? '#6c757d' : 'inherit'
            }}
          >
            {tache.texte}
          </span>
        )}
      </div>

      <div className="btn-group btn-group-sm ms-2">
        {enEdition ? (
          <>
            <button className="btn btn-success" onClick={validerEdition}>
              OK
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => {
                setEnEdition(false);
                setNouveauTexte(tache.texte);
              }}
            >
              Annuler
            </button>
          </>
        ) : (
          <button
            className="btn btn-outline-secondary"
            onClick={() => setEnEdition(true)}
          >
            Modifier
          </button>
        )}
        <button
          className="btn btn-outline-danger"
          onClick={() => supprimerTache(tache.id)}
        >
          X
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
