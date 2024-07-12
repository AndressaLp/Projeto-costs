import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import NewProject from "./components/pages/NewProject"
import Contact from "./components/pages/Contact"
import Company from "./components/pages/Company"
import Container from "./components/layout/Container"

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Link to="/">Home</Link>
          <Link to="/newproject">Novo Projeto</Link>
          <Link to="/contact">Contato</Link>
          <Link to="/company">Empresa</Link>
        </div>
        <Container customClass="min-height">
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/newproject" element={<NewProject/>} />
            <Route exact path="/contact" element={<Contact/>} />
            <Route exact path="/company" element={<Company/>} />
          </Routes>
        </Container>
      </Router>
    </div>
  );
}

export default App;