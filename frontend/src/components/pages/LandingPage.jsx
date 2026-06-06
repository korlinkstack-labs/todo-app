import React from 'react'
import Navbar from '../common/Navbar';
import Hero from '../common/Hero';
import Services from '../common/Services';
import Contact from '../common/Contact';
import Footer from '../common/Footer';

const LandingPage = () => {
  return (
   <>
    <Navbar />
    <Hero />
    <Services /> 
    <Contact />
    <Footer />
   </>
  )
}

export default LandingPage