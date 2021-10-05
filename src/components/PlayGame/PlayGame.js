import React from "react";
import Hoc from "../Hoc";
import HocCard from "../HocCard";
import Content from "./Content";
import { useStyles } from "./style";

export default function PlayGame() {
  const classes = useStyles();

  return (
    <Hoc>
      <HocCard>
        <Content classes={classes} />
      </HocCard>
    </Hoc>
  );
}
