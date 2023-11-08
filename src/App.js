import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import About from "./pages/About";
import Project from "./pages/Project";
import Writing from "./pages/Writing";
import Contact from "./pages/Contact";
import Layout from "./layouts/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Main />} />
          <Route path="about" element={<About />} />
          <Route path="project" element={<Project />} />
          <Route path="writing" element={<Writing />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
