import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './component/Navbar';
import HeroSection from './component/HeeroSection';
import AfricaSection1 from './component/AfricaSection1';
import AmericaSection from './component/AmericaSection';
import SignIn from './content/SignIn';
import SignUp from './content/SignUp';
// import Navbar2 from './component/Navbar2'

function Layout() {
  const location = useLocation();

  // Hide navbar on specific pages
  const hideNavbar = location.pathname === '/SignIn' || location.pathname === '/SignUp';

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <section id="AfricaSection"><AfricaSection1 /></section>
              <section id="AmericaSection"><AmericaSection /></section>
            </>
          }
        />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
    {/* <Navbar2/> */}
      <Layout />
    </BrowserRouter>
  );
}
