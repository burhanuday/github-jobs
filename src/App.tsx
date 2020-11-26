import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header/Header";
import { darkTheme, GlobalStyles, lightTheme } from "./theme";

import Home from "./views/Home";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <main>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Header />
        <Home />
      </ThemeProvider>
    </main>
  );
}

export default App;
