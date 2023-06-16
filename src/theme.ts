import * as React from "react";
import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
import { purple } from "./colors";

export const flourishLight = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
  },
});

export const flourishDark = createTheme({
  palette: {
    primary: {
      main: purple[900],
    },
  },
});
