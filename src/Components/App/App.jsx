import React from 'react';
import About from '../About/About';
import './App.css';

function App() {
  const aboutText = `
  I'm based out of Houston and I strive to create apps that help people learn or otherwise better their lives.
  React is my go-to choice for work on the front-end, and I'm well versed in Node.js, Express, and PostgreSQL on the back-end.
  I love projects that push my abilities and require me to level up. 
  If you would like some freelance work donw or are looking to hire, you can connect with me here.
  Feel free to take a look at some of my work, or learn more about me. 
  `;


  return (
    <div className="App">
      <About goalText={aboutText} />
    </div>
  );
}

export default App;
