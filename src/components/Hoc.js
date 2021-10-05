import React from "react";
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "90vh",
  },
}));

export default function Hoc({ children }) {
  const classes = useStyles();
  return (
    <div>
      <Grid
        className={classes.root}
        container
        justifyContent="center"
        alignItems="center"
      >
        <div>{children}</div>
      </Grid>
    </div>
  );
}
