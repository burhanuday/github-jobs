import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, lightTheme } from "./theme";

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
      <ThemeProvider theme={lightTheme}>
        <GlobalStyles />
        <Home />
      </ThemeProvider>
    </main>
  );
}

export default App;
