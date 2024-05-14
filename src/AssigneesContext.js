import React, { createContext, useState } from 'react';

const AssigneesContext = createContext();

const AssigneesProvider = ({ children }) => {
  const [userData, setUserData] = useState({ name: "", phonenum: "" }); // Initialize with empty name and phonenum

  const setName = (name) => {
    setUserData({ ...userData, name }); // Merge the existing userData with the new name
    console.log("userData after setName:", userData);
  };

  const setPhonenum = (phonenum) => {
    setUserData({ ...userData, phonenum }); // Merge the existing userData with the new phonenum
  };

  return (
    <AssigneesContext.Provider value={{ userData, setName, setPhonenum }}>
      {children}
    </AssigneesContext.Provider>
  );
};

export { AssigneesContext, AssigneesProvider };
