// App.jsx
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Certificates from "./pages/Certificates";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Skills from "./pages/Skills";
import LeetCodeSec from "./pages/LeetCodeSec";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<About />} />
        <Route path="about" element={<About />} />
        <Route path="education" element={<Education />} />
        <Route path="skills" element={<Skills />} />
        <Route path="projects" element={<Projects />} />
        <Route path="experience" element={<Experience />} />
        <Route path="certificates" element={<Certificates />} />
        <Route path="leetcode" element={<LeetCodeSec />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
