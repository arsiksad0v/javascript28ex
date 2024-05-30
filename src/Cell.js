import React from 'react';

const Cell = ({ hasItem, clicked, onClick }) => {
  return (
    <div 
      onClick={onClick} 
      className={`cell ${clicked ? 'clicked' : ''}`}
    >
      {clicked && (hasItem ? 'O' : '')}
    </div>
  );
};

export default Cell;
