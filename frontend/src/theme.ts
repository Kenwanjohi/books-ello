import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles/createPalette" {
  interface Palette {
    steeleBlue: { main: string };
    orangeRed: { main: string };
    turquoiseLight: { main: string };
  }

  interface PaletteOptions {
    steeleBlue?: { main: string };
    orangeRed?: { main: string };
    turquoiseLight?: { main: string };
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#5ACCCC",
    },
    steeleBlue: {
      main: "#335C6E",
    },
    orangeRed: {
      main: "#F76434",
    },
    turquoiseLight: {
      main: "#CFFAFA"
    }
  },
  typography: {
    fontFamily: "Mulish, sans-serif",
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: "8px",
          textTransform: "none",
          "&:focus": {
            outline: "none",
          },
        },
      },
    },
  },
});

export default theme;
