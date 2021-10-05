import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.primary.main,
    textAlign: "center",

    color: "#fff",
  },
  img: {
    width: "100%",
    backgroundImage: "url(./i-420.png)",
    backgroundRepeat: "no-repeat",
    backgroundPositionX: "center",
    height: "100px",
  },
  active: {
    background: "#ffe111",
    margin: "5px 5px",
  },
  paper: {
    display: " flex",
  },
  mainContent: {
    padding: 5,
  },
  button: {
    border: "1px solid",
    margin: "5px 5px",
    "&:hover": {
      background: "#ffe111",
    },
  },
  buttonPlay: {
    marginTop: 20,
    "& button": {
      "&.MuiButton-root.Mui-disabled": {
        cursor: "not-allowed",
        pointerEvents: "all",
      },
      background: "#bc00fe",
      borderRadius: "25px",
      "& a": {
        textDecoration: "none",
      },
    },
  },
}));
