import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

export default function BasicButtonGroup() {
  return (
    <div className="row">
      <div className="col-md-4">

      <ButtonGroup variant="contained" className="w-100" aria-label="outlined primary button group">
        <Button className="w-100">One</Button>
        <Button className="w-100">Two</Button>
        <Button className="w-100">Three</Button>
      </ButtonGroup>
      </div>
      <div className="col-md-4">

      <ButtonGroup variant="outlined" className="w-100" aria-label="outlined button group">
        <Button className="w-100">One</Button>
        <Button className="w-100">Two</Button>
        <Button className="w-100">Three</Button>
      </ButtonGroup>
      </div>
      <div className="col-md-4">

      <ButtonGroup variant="text" className="w-100" aria-label="text button group">
        <Button className="w-100">One</Button>
        <Button className="w-100">Two</Button>
        <Button className="w-100">Three</Button>
      </ButtonGroup>
      </div>
    </div>
  );
}
