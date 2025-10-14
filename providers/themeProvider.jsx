import React, { useEffect, useState } from "react";
import ThemeContext from "../contexts/themeContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
      const loadTheme = async () => {
          try { 
              const storedTheme = await AsyncStorage.getItem('theme');
              if(storedTheme) {
                  setTheme(storedTheme);
              }
          }
          catch(e) {
              console.log(e);
          }
      }
      loadTheme();
  }, []);
    
    useEffect(() => { 
        const saveTheme = async () => {
            try {
                await AsyncStorage.setItem('theme', theme);
            }
            catch(e) {
                console.log(e);
            }
        }
        saveTheme();
    }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
