import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <button
        className="actionBtn"
        onClick={() => {
          setCounter((prev) => (prev - 1 >= 0 ? prev - 1 : 0));
        }}
      >
        -
      </button>
      <span className="myCounter">{counter}</span>
      <button
        className="actionBtn"
        onClick={() => {
          setCounter((prev) => (prev + 1 <= 20 ? prev + 1 : prev));
        }}
      >
        +
      </button>
    </div>
  );
}
