import React, { useState, useContext } from "react";
import { useFetch } from "./useFetch";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("money");
  const { loading, fail, data: movies } = useFetch(`&s=${query}`);

  return (
    <AppContext.Provider value={{ loading, fail, query, setQuery, movies }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
