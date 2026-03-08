import { useState } from 'react';
//pour le formulaire

function TodoForm({ ajouterTache }) {
  const [texte, setTexte] = useState('');

  const soumettreFormulaire = (e) => {
    e.preventDefault();
    if (texte.trim() === '') return;
    ajouterTache(texte);
    setTexte('');
  };

  return (
    <form className="app-container" onSubmit={soumettreFormulaire}>
      <input
        value={texte}
        onChange={(e) => setTexte(e.target.value)}
        placeholder="Nouvelle tâche"
        required
      />
      <button type="submit">Ajouter</button>
    </form>
  );
}

export default TodoForm;