import { useContext, useMemo } from "react";
import { ThemeContext } from "../context/ThemeContext";
export const useTheme = () => {
  const theme = useContext(ThemeContext);

  // Memoize the theme object to optimize performance
  return useMemo(() => {
    if (!theme) return null;
    return theme;
  }, [theme]);
};
