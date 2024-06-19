import React from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Feature from './Components/Feature';
import Offer from './Components/Offer';
import About from './Components/About';
import Contact from './Components/Contact';
import Admin from './Components/Admin';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<>
          <Navbar />
          <Header />
          <Feature />
          <Offer />
          <About />
          <Contact />
        </>} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;