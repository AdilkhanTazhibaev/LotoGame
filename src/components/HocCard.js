import { Box, Card, CardContent } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.primary.main,
    textAlign: "center",

    color: "#fff",
  },
}));

export default function HocCard({ children }) {
  const classes = useStyles();
  return (
    <Box sx={{ maxWidth: 400 }}>
      <Card className={classes.root} variant="outlined">
        <CardContent>{children}</CardContent>
      </Card>
    </Box>
  );
}
