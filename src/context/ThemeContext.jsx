import { createContext, useEffect, useReducer } from "react";
export const ThemeContext = createContext();

const themes = {
  theme1: {
    //   backgrounds
    mainBackground:
      "hsl(221.42857142857142, 26.582278481012654%, 30.980392156862745%)",
    toggleBackground: "#232c43",
    screenBackground: "#182034",
    keypadBackground: "#232c43",
    //   keys
    keyBackground1: "#637097",
    keyShadow1: "#404e72",
    keyBackgroundtoggle: "#d03f2f",
    keyBackground2: "#eae3dc",
    keyShadow2: "#93261a",
    keyShadow3: "#b4a597",
    //   text
    textMain: "#444b5a",
    textSecondary: "#ffffff",
    textTertiary: "#ffffff",
  },
  theme2: {
    //   backgrounds
    mainBackground: "hsl(0, 0%, 90%)",
    toggleBackground: "hsl(0, 5%, 81%)",
    screenBackground: "hsl(0, 0%, 93%)",
    keypadBackground: "hsl(0, 5%, 81%)",
    //   keys
    keyBackground1: "hsl(185, 42%, 37%)",
    keyShadow1: "hsl(185, 58%, 25%) ",
    keyBackgroundtoggle: "hsl(25, 98%, 40%)",
    keyBackground2: "hsl(0, 0%, 90%)",
    keyShadow2: "hsl(25, 99%, 27%)",
    keyShadow3: "hsl(35, 11%, 61%",
    //   text
    textMain: "hsl(60, 10%, 19%)",
    textSecondary: "hsl(60, 10%, 19%)",
    textTertiary: "hsl(60, 10%, 19%)",
  },
  theme3: {
    //   backgrounds
    mainBackground: " hsl(268, 75%, 9%)",
    toggleBackground: "hsl(268, 71%, 12%)",
    screenBackground: "hsl(268, 71%, 12%)",
    keypadBackground: "hsl(268, 71%, 12%)",
    //   keys
    keyBackground1: "hsl(281, 89%, 26%)",
    keyShadow1: "hsl(285, 91%, 52%",
    keyBackgroundtoggle: "hsl(176, 100%, 44%)",
    keyBackground2: "hsl(268, 47%, 21%)",
    keyShadow2: "hsl(177, 92%, 70%)",
    keyShadow3: "hsl(290, 70%, 36%)",
    //   text
    textMain: "hsl(52, 100%, 62%)",
    textSecondary: "hsl(0, 0%, 100%)",
    textTertiary: "hsl(52, 100%, 62%)",
  },
  currentTheme: "theme1",
};

const themeReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_THEME":
      return {
        ...state,
        ...themes[action.payload],
        currentTheme: action.payload,
      };

    default:
      break;
  }
};

export const ThemeContextProvider = ({ children }) => {
  const initialTheme =
    JSON.parse(localStorage.getItem("calculatorThem")) || themes.theme1;
  const [state, dispatch] = useReducer(themeReducer, initialTheme);
  const changeTheme = (themeNumber) => {
    dispatch({ type: "CHANGE_THEME", payload: `theme${themeNumber}` });
  };

  useEffect(() => {
    localStorage.setItem("calculatorThem", JSON.stringify(state));
  }, [state]);

  return (
    <ThemeContext.Provider value={{ ...state, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
