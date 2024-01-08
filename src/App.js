import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Actualites from "./pages/actu/Actualites";
import Partenaires from "./pages/partenaires/Partenaires";
import FormulaStudent from "./pages/fs/FormulaStudent";
import PrototypeDefficience from "./pages/pe/PrototypeDefficience";
import LienActu from "./pages/lienActu/LienActu";
import Contact from "./pages/contact/Contact";
import Team from "./pages/team/Team";
import Admin from "./pages/admin/Admin";
import NewArticles from "./pages/new_articles/NewArticles";
import Connected from "./pages/connected/Connected";
import Equipe from "./pages/equipes/Equipe";
import Legal from "./pages/legal/Legal";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import fr from "./languages/fr.json";
import en from "./languages/en.json";

function App() {
  var Airtable = require("airtable");

  try {
    var base = new Airtable({ apiKey: process.env.REACT_APP_API }).base(
      "app2C0wRuRDCffv1l"
    );
    var base_membres = new Airtable({
      apiKey: process.env.REACT_APP_API_LISTE_MEMBRES,
    }).base("appxNPrzDBAj2zY4M");
  } catch (e) {
    console.log("Airtable API key is not defined", e);
  }

  var dictionnaire = fr;

  try {
    if (localStorage.getItem("ved-language") !== null) {
      if (localStorage.getItem("ved-language") === "french") {
        dictionnaire = fr;
      } else {
        dictionnaire = en;
      }
    }
  } catch (e) {
    console.log("Dictionnaire not found");
  }

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home base={base} json={dictionnaire} />}
        ></Route>
        <Route path="/admin" element={<Admin base={base} />}></Route>
        <Route path="/connected" element={<Connected base={base} />}></Route>
        <Route
          path="/admin/new_articles"
          element={<NewArticles base={base} />}
        ></Route>
        <Route
          path="/actualites"
          element={<Actualites base={base} json={dictionnaire} />}
        ></Route>
        <Route
          path="/actualites/:link"
          element={<LienActu base={base} json={dictionnaire} />}
        ></Route>
        <Route
          path="/equipe/:link"
          element={<Equipe base={base_membres} json={dictionnaire} />}
        ></Route>
        <Route
          path="/presentation-formula-student"
          element={<FormulaStudent json={dictionnaire} />}
        ></Route>
        <Route
          path="/presentation-prototype_defficience"
          element={<PrototypeDefficience json={dictionnaire} />}
        ></Route>
        <Route
          path="/partenaires"
          element={<Partenaires json={dictionnaire} />}
        ></Route>
        <Route
          path="/contact"
          element={<Contact base={base} json={dictionnaire} />}
        ></Route>
        <Route
          path="/contact/:name"
          element={<Team base={base} json={dictionnaire} />}
        ></Route>
        <Route
          path="/mentions-legales"
          element={<Legal json={dictionnaire} />}
        ></Route>
        <Route
          path="*"
          element={<Home base={base} json={dictionnaire} />}
        ></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
