import { createContext, useReducer } from "react";

export const AppContext = createContext();
const appReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_VALUE":
      return { ...state, value: state.value + action.payload };

    case "DELETE":
      return { ...state, value: String(state.value).slice(0, -1) };

    case "RESET":
      return { ...state, value: "0" };

    case "EVAL":
      try {
        const result = eval(state.value);
        return { ...state, value: result };
      } catch (error) {
        console.log();
        return { ...state, value: 0, error: error.name + "  " + error.message };
      }

    default:
      return state;
  }
};
export const AppContextProvider = ({ children }) => {
  const initialState = { value: 0, error: "" };
  const [state, dispatch] = useReducer(appReducer, initialState);
  const update_value = (value) => {
    dispatch({ type: "UPDATE_VALUE", payload: value });
  };
  const delete_value = (value) => {
    dispatch({ type: "DELETE" });
  };
  const reset_value = (value) => {
    dispatch({ type: "RESET" });
  };
  const eveluate = (value) => {
    dispatch({ type: "EVAL" });
  };
  return (
    <AppContext.Provider
      value={{ ...state, update_value, delete_value, reset_value, eveluate }}
    >
      {children}
    </AppContext.Provider>
  );
};
