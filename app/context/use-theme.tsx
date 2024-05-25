import React, { useContext } from "react";
import { ThemeContext } from "./theme-context";

const UseTheme = () => {
  const context = useContext(ThemeContext);
  if (context === null) {
    throw new Error("useTheme must be used within an ThemeContextProvider");
  }
  return context;
};

export default UseTheme;
