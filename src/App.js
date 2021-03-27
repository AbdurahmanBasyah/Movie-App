import React from 'react';
import './index.css';
import Header from './component/Header';
import Container from './component/Container';

// API HTTPS: "http://www.omdbapi.com/?i=tt3896198&apikey=b1a2c737"

function App() {


  return (
    <div className="App">
      <Header />
      <Container />
    </div>
  );
}

export default App;
