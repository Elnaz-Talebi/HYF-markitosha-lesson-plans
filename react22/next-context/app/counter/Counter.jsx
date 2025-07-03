"use client";

import { useCounterContext } from "./CounterContext";
import "./counter.css";

export default function Counter() {
  const { count, increment, decrement } = useCounterContext();

  return (
    <div className="counter-container">
      <h1 className="counter-title">Counter with Context & Reducer</h1>

      <div className="counter-display">
        <span>{count}</span>
      </div>

      <div className="counter-buttons">
        <button className="counter-button decrement" onClick={decrement}>
          -
        </button>
        <button className="counter-button increment" onClick={increment}>
          +
        </button>
      </div>
    </div>
  );
}
