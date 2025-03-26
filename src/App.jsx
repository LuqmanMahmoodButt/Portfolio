
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Game from "./pages/Game"; // Import Game


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/game" element={<Game />} /> {/* Game Route */}
        <Route path="/about" element={<About />} />
      </Routes>
      <footer className="footer">
        <div className="container">
        </div>
      </footer>
    </BrowserRouter>
  );
};

export default App;
