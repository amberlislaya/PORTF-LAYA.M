import React from 'react'
import Header from './components/Head/Header'
import './App.css';
import Home from './components/Homes/Home'
import Features from './components/Features/Features';
import Portfolio from './components/Portfolio/Portfolio';
import Resume from './components/Resume/Resume';
import Testionial from './components/Testimonial/Testionial';
import Blog from './components/Blog/Blog';
import Contact from "./components/Contact/Contact";
import Footer from './components/Footer';




const App = () => {

return (
  <>
  <Header />
  <Home />
  <Features />
  <Portfolio />
  <Resume/>
  <Testionial/>
  <Blog/>
  <Contact/>
  <Footer/>
</>

);
}

export default App;
