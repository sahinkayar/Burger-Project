import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbarlink from "./components/navbarlink";
import Menu from "./components/Menu";
import About from "./components/About";
import Contact from "./components/Contact";
function App() {
  return (
    <>
      <Routes>
        <Route path="/Home" element={<Navbarlink />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
