import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { Formations } from './pages/Formations';
import { Conferences } from './pages/Conferences';
import { Coaching } from './pages/Coaching';
import { Contact } from './pages/Contact';
import { Immobilier } from './pages/investissements/Immobilier';
import { Agriculture } from './pages/investissements/Agriculture';
import { Bourse } from './pages/investissements/Bourse';
import { Mobilite } from './pages/investissements/Mobilite';
import { Temoignages } from './pages/Temoignages';
import { Confidentialite } from './pages/legal/Confidentialite';
import { ConditionsGenerales } from './pages/legal/ConditionsGenerales';

function App() {
  return (
    <div className="min-h-screen bg-bg-deep text-text-primary flex flex-col font-sans selection:bg-brand/30 selection:text-white">
      <Navbar />
      <main className="flex-1 pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/formations" element={<Formations />} />
          <Route path="/conferences" element={<Conferences />} />
          <Route path="/coaching" element={<Coaching />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/investissements/immobilier" element={<Immobilier />} />
          <Route path="/investissements/agriculture" element={<Agriculture />} />
          <Route path="/investissements/bourse" element={<Bourse />} />
          <Route path="/investissements/mobilite" element={<Mobilite />} />
          <Route path="/temoignages" element={<Temoignages />} />
          <Route path="/legal/confidentialite" element={<Confidentialite />} />
          <Route path="/legal/conditions" element={<ConditionsGenerales />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
