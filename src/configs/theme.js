import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#F4E041",
      light: "#ffff",
      dark: "#E5E5E5",
    },
  },
  typography: {
    fontFamily: ["Nunito", "Helvetica", "Arial", "sans-serif"].join(","),
    button: {
      fontSize: "16px",
    },
    h1: {
      fontSize: 40,
    },
    body1: {
      fontSize: 16,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 80,
          textTransform: "none",
          padding: "10px 20px",
          width: 100,
          height: 34,
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
            background: "#F4E041",
          },
        },
      },
    },
  },
});

export default theme;
