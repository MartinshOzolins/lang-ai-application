"use client";
import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export default function GlobalContextProvider({ children }) {
  const [availableRequests, setAvailableRequests] = useState(null);
  const [tasks, setTasks] = useState([]);

  return (
    <GlobalContext.Provider
      value={{ availableRequests, setAvailableRequests, tasks, setTasks }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
