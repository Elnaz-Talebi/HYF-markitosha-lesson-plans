"use client";

import { createContext, useContext, useReducer } from "react";

const ACTIONS = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
};

const initialState = {
  count: 0,
};

function counterReducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case ACTIONS.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
}

const CounterContext = createContext();

export function CounterProvider({ children }) {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  const increment = () => {
    dispatch({ type: ACTIONS.INCREMENT });
  };

  const decrement = () => {
    dispatch({ type: ACTIONS.DECREMENT });
  };

  const value = {
    count: state.count,
    increment,
    decrement,
  };

  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
}

export function useCounterContext() {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error("useCounterContext must be used within a CounterProvider");
  }
  return context;
}
