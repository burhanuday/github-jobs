import { createGlobalStyle } from "styled-components";

const colors = {
  violet: "#5964e0",
  lightViolet: "#939bf4",
  veryDarkBlue: "#19202D",
  midnight: "#121721",
  white: "#fff",
  lightGrey: "#f4f6f8",
  grey: "#9daec2",
  darkGrey: "#6e8098",
};

export const lightTheme = {
  primary: colors.violet,
  primaryLight: colors.lightViolet,
  body: colors.lightGrey,
  text: colors.darkGrey,
  heading: colors.veryDarkBlue,
  white: colors.white,
  card: colors.white,
  button: colors.violet,
  searchBackground: colors.white,
};

export const darkTheme = {
  primary: colors.violet,
  primaryLight: colors.lightViolet,
  body: colors.midnight,
  text: colors.darkGrey,
  heading: colors.white,
  white: colors.white,
  card: colors.veryDarkBlue,
  button: colors.veryDarkBlue,
  searchBackground: colors.veryDarkBlue,
};

export const GlobalStyles = createGlobalStyle<{ theme: typeof lightTheme }>`

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: 'Kumbh Sans', sans-serif;
    transition: all 0.2s ease-in;
  }
`;
