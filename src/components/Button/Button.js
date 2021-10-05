import React from "react";
import { Button } from "@material-ui/core";
import "./main.css";
export default function ButtonAs() {
  return (
    <div>
      <Button className="pulse-button">
        Играть
        <span class="pulse-button__rings"></span>
        <span class="pulse-button__rings"></span>
        <span class="pulse-button__rings"></span>
      </Button>
    </div>
  );
}
