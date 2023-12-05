import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
      <Routes>
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
