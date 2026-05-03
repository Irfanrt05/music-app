import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Music from "./pages/Music";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MusicDetail from "./pages/MusicDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/music" element={<Music />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/music/:id" element={<MusicDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
