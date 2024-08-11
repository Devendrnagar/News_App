import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import NewsBoard from './Components/NewsBoard';

function App() {
  return (
    <div className="App">
      <Navbar />
      <NewsBoard/>
    </div>
  );
}

export default App;
