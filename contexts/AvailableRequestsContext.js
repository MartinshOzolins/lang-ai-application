"use client";
import { createContext, useContext, useState } from "react";

const AvailableRequestsContext = createContext();

export default function AvailableRequestsContextProvider({ children }) {
  const [availableRequests, setAvailableRequests] = useState(null);

  return (
    <AvailableRequestsContext.Provider
      value={{ availableRequests, setAvailableRequests }}
    >
      {children}
    </AvailableRequestsContext.Provider>
  );
}

export const useAvailableRequestsContext = () => {
  return useContext(AvailableRequestsContext);
};
