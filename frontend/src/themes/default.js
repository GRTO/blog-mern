const fontTypes = {
  title: "Varela Round, sans-serif",
  main: "Varela Round, sans-serif",
};

const breakpoints = {
  sm: "screen and (max-width: 640px)",
  md: "screen and (max-width: 768px)",
  lg: "screen and (max-width: 1024px)",
  xl: "screen and (max-width: 1280px)",
};

const themeLight = {
  // Temp fonts
  fonts: fontTypes,
  // Colors for layout
  colors: {
    primary: "#505BA4",
    secondary: "#63A6C1",
    tertiary: "#8edecd",
    default: "#A7A8B1",
    background1: "#FFF",
    accent1: "#A2725B",
    button1: "#008080",
    button2: "#8edecd",
    background2: "#F2F2F2",
    text: "rgba(41, 41, 41, 1)",
    subtext: "#A7A8B1",
    black: "#101017",
    error: "#C35A90",
    error1: "#c35a909e",
    white: "#FFF",
  },
  // Breakpoints for responsive design
  breakpoints,
};

export default themeLight;
