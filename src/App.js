import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact"
import Company from "./components/pages/Company"
import Container from "./components/layout/Container"
import Projects from "./components/pages/Projects";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Container customClass="min_height">
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/projects" element={<Projects/>} />
            <Route exact path="/contact" element={<Contact/>} />
            <Route exact path="/company" element={<Company/>} />
          </Routes>
        </Container>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
