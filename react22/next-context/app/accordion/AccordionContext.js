"use client";
import { createContext, useContext, useState } from "react";

const AccordionContext = createContext();

export function AccordionProvider({ children }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const onOpen = (index) => setActiveIndex(index);

  return (
    <AccordionContext.Provider value={{ activeIndex, onOpen }}>
      {children}
    </AccordionContext.Provider>
  );
}

export function useAccordionContext() {
  return useContext(AccordionContext);
}
