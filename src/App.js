import React, { useState } from 'react';
import GameBoard from './GameBoard';
import ResetButton from './ResetButton';
import TryCounter from './TryCounter';
import './App.css';

const createItems = () => {
  const items = Array(36).fill().map(() => ({
    hasItem: false,
    clicked: false,
  }));
  const randomIndex = Math.floor(Math.random() * 36);
  items[randomIndex].hasItem = true;
  return items;
};

const App = () => {
  const [items, setItems] = useState(createItems());
  const [tries, setTries] = useState(0);

  const handleCellClick = (index) => {
    if (items[index].clicked) return;

    const newItems = items.map((item, i) => 
      i === index ? { ...item, clicked: true } : item
    );

    setItems(newItems);
    setTries(tries + 1);
  };

  const handleReset = () => {
    setItems(createItems());
    setTries(0);
  };

  return (
    <div className="app">
      <GameBoard items={items} onCellClick={handleCellClick} />
      <TryCounter tries={tries} />
      <ResetButton onReset={handleReset} />
    </div>
  );
};

export default App;
