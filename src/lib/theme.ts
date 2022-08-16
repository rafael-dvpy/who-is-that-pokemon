import { createTheme } from "@mui/material/styles";
import { blueGrey, red } from "@mui/material/colors";
import { dark } from "@mui/material/styles/createPalette";

// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
