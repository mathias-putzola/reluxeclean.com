// App.tsx
'use client';

import React from 'react';
import Navbar from './components/Navbar';
import Herosection from './components/Herosection';
import Prestations from './components/Prestations';
import Planning from './components/Planning';
import Contact from './components/Contact';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Herosection />
      <Prestations />
      <Planning />*
      <Contact /> 
    </div>
  );
};

export default App;