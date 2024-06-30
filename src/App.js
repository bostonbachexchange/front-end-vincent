import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Home from './components/Home';
import Nosotros from './components/Nosotros';
// import Proyectos from './components/Proyectos';
// import Ecos from './components/Ecos';
// import ArchivoDeSuenos from './components/ArchivoDeSuenos';
// import Contacto from './components/Contacto';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        {/* <Route path="/proyectos" component={Proyectos} /> */}
        {/* <Route path="/ecos" component={Ecos} /> */}
        {/* <Route path="/archivo-de-suenos" component={ArchivoDeSuenos} /> */}
        {/* <Route path="/contacto" component={Contacto} /> */}
      </Routes>
    </Router>
  );
}

export default App;
