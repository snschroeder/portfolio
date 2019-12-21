import React from 'react';
import Header from '../Header/Header';
import Divider from '../Divider/Divider';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import MoreAbout from '../MoreAbout/MoreAbout';
import Footer from '../Footer/Footer';
import projectsList from '../../content/projects';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Divider />
      <About />
      <Divider />
      <Contact />
      <Divider />
      <Projects projects={projectsList} />
      <Divider />
      <MoreAbout />
      <Footer />
    </div>
  );
}

export default App;
