import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './components/Home';
import Nosotros from './components/Nosotros';
import Proyectos from './components/Proyectos';
// import Ecos from './components/Ecos';
// import ArchivoDeSuenos from './components/ArchivoDeSuenos';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Semblanzas from './components/Semblanzas';
import SobreElProyecto from './components/SobreElProyecto';
import EscribeTuSueno from './components/EscribeTuSueno';

const basename = process.env.PUBLIC_URL;

const AppContent = () => {
  const location = useLocation();
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  useEffect(() => {
    if (location.pathname === '/archivo-de-suenos/escribe-tu-sueno') {
      setIsNavbarVisible(false);
    } else {
      setIsNavbarVisible(true);
    }
  }, [location.pathname]);

  return (
    <>
      <Navbar isVisible={isNavbarVisible} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/proyectos" element={<Proyectos />} />
        {/* <Route path="/ecos" component={Ecos} /> */}
        {/* <Route path="/archivo-de-suenos" component={ArchivoDeSuenos} /> */}
        <Route path="/archivo-de-suenos/sobre-el-proyecto" element={<SobreElProyecto />} />
        <Route path="/archivo-de-suenos/escribe-tu-sueno" element={<EscribeTuSueno />} />
        <Route path="/semblanzas" element={<Semblanzas />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
    </>
  );
};

function App() {
  return (
    <Router basename={basename}>
      <AppContent />
    </Router>
  );
}

export default App;
