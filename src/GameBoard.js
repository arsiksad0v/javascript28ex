import React from 'react';
import Cell from './Cell';

const GameBoard = ({ items, onCellClick }) => {
  return (
    <div className="game-board">
      {items.map((item, index) => (
        <Cell 
          key={index}
          hasItem={item.hasItem}
          clicked={item.clicked}
          onClick={() => onCellClick(index)}
        />
      ))}
    </div>
  );
};

export default GameBoard;