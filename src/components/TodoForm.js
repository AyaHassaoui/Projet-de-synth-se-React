import { useState } from 'react';

function TodoForm({ ajouterTache }) {
  const [texte, setTexte] = useState('');
  const [erreur, setErreur] = useState('');

  const soumettreFormulaire = (e) => {
    e.preventDefault();
    if (texte.trim() === '') {
      setErreur('Le champ ne peut pas être vide.');
      return;
    }
    ajouterTache(texte);
    setTexte('');
    setErreur('');
  };

  return (
    <form onSubmit={soumettreFormulaire}>
      <input
        value={texte}
        onChange={(e) => setTexte(e.target.value)}
        placeholder="Nouvelle tâche"
      />
      <button type="submit">Ajouter</button>
      {erreur && <p style={{ color: 'red' }}>{erreur}</p>}
    </form>
  );
}

export default TodoForm;
