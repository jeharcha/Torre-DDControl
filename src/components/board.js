import React, { useState } from 'react';
import '../styles/index.css';

function Board() {
  const [{ count, count2 }, setCount] = useState({ count: 10, count2: 20 });
  const [count3, setCount3] = useState(30);

  return (
    <div className="Board">
      <p>Soy el board</p>
      <p>Sup</p>
      <button
        onClick={() => {
          setCount((currentState) => ({
            count: currentState.count + 1,
            count2: currentState.count2 + 2,
          }));
          setCount3((j) => j + 1);
        }}
      >
        +
      </button>
      <p>Count: {count}</p>
      <p>Count2: {count2}</p>
      <p>Count3: {count3}</p>
    </div>
  );
}

export default Board;
