import { createTheme } from "@mui/material/styles";
import { COLORS } from "./colors";
export const theme = createTheme({
  breakpoints: {
    values: {
      lg: 1720,
    },
  },
  typography: {
    h2: {
      color: COLORS.Black,
      fontSize: "36px",
      fontWeight: 400,
      letterSpacing: "1.8px",
    },
    body1: {
      color: COLORS.Black,
      fontSize: "20px",
      fontWeight: 400,
    },
    body2: {
      color: COLORS.Black,
      fontSize: "14px",
      fontWeight: 400,
      opacity: 0.5,
    },
  },
});
