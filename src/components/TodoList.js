import TodoItem from './TodoItem';

function TodoList({ taches, changerEtat, supprimerTache, editerTache }) {
  if (taches.length === 0) {
    return <p className="text-muted">Aucune tâche pour le moment.</p>;
  }

  return (
    <ul className="list-group">
      {taches.map((tache) => (
        <TodoItem
          key={tache.id}
          tache={tache}
          changerEtat={changerEtat}
          supprimerTache={supprimerTache}
          editerTache={editerTache}
        />
      ))}
    </ul>
  );
}

export default TodoList;
