import * as React from "react";
import { Theme } from "../types";
import buildLightTheme from "../utils/build-light-theme";
import buildDarkTheme from "../utils/build-dark-theme";

const lightTheme = buildLightTheme("'Inter', sans-serif");
const darkTheme = buildDarkTheme("'Inter', sans-serif");

export const ThemeContext = React.createContext<Theme>(lightTheme);

const ThemeProvider = () => {
  const [mode, setMode] = React.useState<"light" | "dark">("light");

  const deaultTheme = mode === "light" ? lightTheme : darkTheme;

  const theme = {
    ...deaultTheme,
    mode,
    setMode,
  };

  return <ThemeContext.Provider value={theme} />;
};

export default ThemeProvider;
