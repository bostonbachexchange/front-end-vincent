import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Nosotros from './components/Nosotros';
import Proyectos from './components/Proyectos';
// import Ecos from './components/Ecos';
// import ArchivoDeSuenos from './components/ArchivoDeSuenos';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Semblanzas from './components/Semblanzas';
import SobreElProyecto from './components/SobreElProyecto';

const basename = process.env.PUBLIC_URL;

function App() {
  return (
    <Router basename={basename}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/proyectos" element={<Proyectos />} />
        {/* <Route path="/ecos" component={Ecos} /> */}
        {/* <Route path="/archivo-de-suenos" component={ArchivoDeSuenos} /> */}
        <Route path="/archivo-de-suenos/sobre-el-proyecto" element={<SobreElProyecto />} />
        <Route path="/semblanzas" element={<Semblanzas />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
