import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.scss';
import Home from './pages/Home';
import Fiche from './pages/Fiche-logement';
import Apropos from './pages/A-propos';
import PageErreur from './pages/404';
import Header from './components/Header';
import Footer from './components/Footer';

const root = createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/fiche-logement/:logementId" element={<Fiche />} />
        <Route path="/a-propos" element={<Apropos />} />
        <Route path="*" element={<PageErreur />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
