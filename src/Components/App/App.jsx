import React from 'react';
import Header from '../Header/Header';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import Footer from '../Footer/Footer';
import projectsList from '../../content/projects';

import './App.css';

function App() {
  const aboutText = `
  I'm based out of Houston and I strive to create apps that help people learn or otherwise better their lives. \n
  React is my go-to choice for work on the front-end, and I'm well versed in Node.js, Express, and PostgreSQL on the back-end.
  I love projects that push my abilities and require me to level up. \n
  If you would like some freelance work done or are looking to hire, you can connect with me here.
  Feel free to take a look at some of my work, or learn more about me. 
  `;

  // const aboutText = 'Hello I am five words';


  return (
    <div className="App">
      <Header />
      <About goalText={aboutText} />
      <Contact />
      <Projects projects={projectsList} />
      <Footer />
    </div>
  );
}

export default App;
