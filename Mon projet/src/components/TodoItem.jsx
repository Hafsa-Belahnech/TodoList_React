//Modification du code pour un design amélioré

function TodoItem({ tache, changerEtat, supprimerTache }) {
  return (
    <li className="todo-item">
      <div className="todo-content">
        <input
          type="checkbox"
          className="todo-checkbox"
          checked={tache.terminee}
          onChange={() => changerEtat(tache.id)}
        />
        <span className={`todo-text ${tache.terminee ? 'completed' : ''}`}>
          {tache.texte}
        </span>
      </div>
      <button className="delete-btn" onClick={() => supprimerTache(tache.id)}>
        
      </button>
    </li>
  );
}

export default TodoItem;
