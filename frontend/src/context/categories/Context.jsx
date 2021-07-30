import { createContext, useReducer } from "react";
import Reducer from "./Reducer";

const INITIAL_STATE = { categories: null, isFetching: false, error: false };

export const CategoriesContext = createContext(INITIAL_STATE);

export const CategoriesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

  return (
    <CategoriesContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </CategoriesContext.Provider>
  );
};
