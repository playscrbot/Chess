import React from 'react';
import './App.css'; // Import your CSS file

const App = () => {
  const handleSinglePlayerClick = () => {
    window.location.href = 'https://dashing-manatee-36acad.netlify.app'; // Replace with your actual URL
  };

  const handleTwoPlayerClick = () => {
    window.location.href = 'https://chesss-3d.netlify.app'; // Replace with your actual URL
  };

  return (
    <div className="app-container">
      <h1 className="title">Chess Corner</h1>
      <p className="description">Choose your game mode:</p>
      <div className="button-container">
      <button className="chess-button" onClick={handleSinglePlayerClick}>
      <span className="icon">♟️</span> Single Player
      </button>
      <button className="chess-button" onClick={handleTwoPlayerClick}>
      <span className="icon">♟️♟️</span> Two Player
      </button>
      </div>
    </div>
  );
};

export default App;