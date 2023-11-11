import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Actualites from './pages/actu/Actualites';
import Partenaires from './pages/partenaires/Partenaires';
import FormulaStudent from './pages/fs/FormulaStudent';
import PrototypeDefficience from './pages/pe/PrototypeDefficience';
import LienActu from './pages/lienActu/LienActu';
import Contact from './pages/contact/Contact';
import Team from './pages/team/Team';
import Admin from './pages/admin/Admin';
import NewArticles from './pages/new_articles/NewArticles';
import Connected from './pages/connected/Connected';
import Equipe from './pages/equipes/Equipe';
import Legal from './pages/legal/Legal';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route exact path="/admin" element={<Admin />}></Route>
        <Route exact path="/connected" element={<Connected />}></Route>
        <Route exact path="/admin/new_articles" element={<NewArticles />}></Route>
        <Route path="/actualites" element={<Actualites />}></Route>
        <Route path="/actualites/:link" element={<LienActu />}></Route>
        <Route path="/equipe/:link" element={<Equipe />}></Route>
        <Route path="/presentation-formula-student" element={<FormulaStudent />}></Route>
        <Route path="/presentation-prototype_defficience" element={<PrototypeDefficience />}></Route>
        <Route path="/partenaires" element={<Partenaires />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/contact/:name" element={<Team />}></Route>
        <Route path="/mentions-legales" element={<Legal />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;