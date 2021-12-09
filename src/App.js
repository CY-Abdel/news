// rsc + ctrl + espace
// POUR CREER LE COMPOSANT SANS L'ECRIRE
import React from 'react';
import { BrowserRouter, Routes, Routes } from 'react-router-dom';

import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>

          <Route exact path="/" element={<Home />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
