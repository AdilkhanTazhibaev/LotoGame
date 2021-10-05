import { makeStyles } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    textDecoration: "none",
  },
}));

export default function WelcomeGame() {
  const classes = useStyles();

  return (
    <div>
      <Link className={classes.root} to={"gameRoom"}>
        <Button />
      </Link>
    </div>
  );
}
