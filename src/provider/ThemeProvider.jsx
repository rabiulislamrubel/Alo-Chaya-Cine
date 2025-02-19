import { useState } from "react";
import { ThemeContext } from "../context";

export default function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
