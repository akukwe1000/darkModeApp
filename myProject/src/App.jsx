import React from 'react'
import { DarkModeProvider } from './components/DarkModeContext';
import Header from './components/Header'
import Hero from './sections/Hero'
import About from './sections/About';
import PopularArea from './sections/PopularArea'; 
import Properties from './sections/Properties';
// import Services from './sections/Services';
// import Client from './sections/Client';
import Contact from './sections/Contact';
import Footer from './components/Footer';
// import Heads from './components/Heads';

const App = () => {
  return (
    <>
      <DarkModeProvider>
        {/* <Heads/> */}
        <Header/>
        <Hero/>
        <About/>
        <PopularArea/> 
        <Properties/>
        {/* <Services/> */}
        {/* <Client/> */}
        <Contact/>
        <Footer/>

      </DarkModeProvider>
    </>
  )
}

export default App