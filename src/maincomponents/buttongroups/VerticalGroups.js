import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

const buttons = [
  <Button key="one">One</Button>,
  <Button key="two">Two</Button>,
  <Button key="three">Three</Button>,
];

export default function GroupOrientation() {
  return (
    <div className="row">
      <div className="col-md-4">
        <ButtonGroup
          orientation="vertical"
          aria-label="vertical outlined button group"
          className="w-50"
        >
          {buttons}
        </ButtonGroup>
      </div>
      <div className="col-md-4">
        <ButtonGroup
          orientation="vertical"
          aria-label="vertical contained button group"
          variant="contained"
          className="w-50"
        >
          {buttons}
        </ButtonGroup>
      </div>
      <div className="col-md-4">
        <ButtonGroup
          orientation="vertical"
          aria-label="vertical contained button group"
          variant="text"
          className="w-50"
        >
          {buttons}
        </ButtonGroup>
      </div>
    </div>
  );
}
