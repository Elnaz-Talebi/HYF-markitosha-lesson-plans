"use client";

import { createContext, useContext, useReducer } from "react";

const ACTIONS = {
  ADD_TODO: "ADD_TODO",
  REMOVE_TODO: "REMOVE_TODO",
  TOGGLE_TODO: "TOGGLE_TODO",
};

const initialState = {
  todos: [],
};

function todoReducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            text: action.text,
            completed: false,
          },
        ],
      };
    case ACTIONS.REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.text),
      };
    case ACTIONS.TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.text
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    default:
      return state;
  }
}

const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = (text) => {
    if (text.trim()) {
      dispatch({ type: ACTIONS.ADD_TODO, text: text.trim() });
    }
  };

  const removeTodo = (id) => {
    dispatch({ type: ACTIONS.REMOVE_TODO, text: id });
  };

  const toggleTodo = (id) => {
    dispatch({ type: ACTIONS.TOGGLE_TODO, text: id });
  };

  const value = {
    todos: state.todos,
    addTodo,
    removeTodo,
    toggleTodo,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}

export function useTodoContext() {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodoContext must be used within a TodoProvider");
  }
  return context;
}
