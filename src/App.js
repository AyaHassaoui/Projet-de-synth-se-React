// src/App.js
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

import Accueil from './pages/Accueil';
import Article from './pages/Article';

function App() {
  // -------- ARTICLES --------
  const [articles] = useState([
    { id: 1, titre: 'Premier article', contenu: 'Contenu du premier article.' },
    { id: 2, titre: 'Deuxième article', contenu: 'Contenu du deuxième article.' }
  ]);

  // -------- TACHES --------
  const [taches, setTaches] = useState([]);

  const ajouterTache = (texte) => {
    const nouvelleTache = {
      id: Date.now(),
      texte,
      terminee: false,
    };
    setTaches([...taches, nouvelleTache]);
  };

  const changerEtat = (id) => {
    setTaches(
      taches.map((t) =>
        t.id === id ? { ...t, terminee: !t.terminee } : t
      )
    );
  };

  const supprimerTache = (id) => {
    setTaches(taches.filter((t) => t.id !== id));
  };

  const editerTache = (id, nouveauTexte) => {
    setTaches(
      taches.map((t) =>
        t.id === id ? { ...t, texte: nouveauTexte } : t
      )
    );
  };

  return (
    <BrowserRouter>
      <div className="container mt-3">
        {/* MENU */}
        <nav className="mb-4">
          <Link to="/" className="me-3">Accueil</Link>
          <Link to="/todos">To-Do</Link>
        </nav>

        {/* ROUTES */}
        <Routes>
          <Route path="/" element={<Accueil articles={articles} />} />
          <Route path="/article/:id" element={<Article articles={articles} />} />

          <Route
            path="/todos"
            element={
              <div>
                <h1 className="mb-3">To-Do List Interactive</h1>
                <TodoForm ajouterTache={ajouterTache} />
                <TodoList
                  taches={taches}
                  changerEtat={changerEtat}
                  supprimerTache={supprimerTache}
                  editerTache={editerTache}
                />
              </div>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
