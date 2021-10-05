import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  title: {
    color: "#000",
    padding: "0 20px",
    fontSize: 20,
  },
  paragraph: {
    color: "#000",
    padding: "0 30px",
    fontSize: 17,
  },
  button: {
    marginTop: 20,
    background: "#bc00fe",
    borderRadius: "25px",

    "& span": {
      fontSize: 14,
    },
    "& a": {
      color: "#fff",
      textDecoration: "none",
    },
  },
  buttonLink: {
    marginTop: 20,
    background: "#bc00fe",
    borderRadius: "25px",

    "& span": {
      fontSize: 14,
    },
    "& a": {
      color: "#fff",
      textDecoration: "none",
    },
  },
}));
