// AssigneesContext.js
import React, { createContext, useContext, useState } from "react";

const AssigneesContext = createContext();

export const AssigneesProvider = ({ children }) => {
  const [assignees, setAssignees] = useState([]); // Ensure proper initialization

  return (
    <AssigneesContext.Provider value={{ assignees, setAssignees }}>
      {children}
    </AssigneesContext.Provider>
  );
};

export const useAssignees = () => useContext(AssigneesContext);
