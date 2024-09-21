import React from "react";
import "./App.css";
import Header from "./components/header/header";
import Home from "./components/Home/Home";
import About from './components/about/About';
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Qualification from "./components/qualification/Qualification";
import Work from "./components/work/Work";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";



const App = () => {
  return(
    <>
    <Header/>
    <main className="main">
      <Home />
      <About />
      <Skills />
      <Services />
      <Qualification />
      <Work />
      <Contact/>
    </main>

    <Footer />
    <ScrollUp />

    </>
  )
}

export default App