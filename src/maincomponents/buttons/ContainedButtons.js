import * as React from "react";
import Button from "@mui/material/Button";


export default function ContainedButtons() {
  return (
    <div className="row">
      <div className="col-md-3">
        <Button variant="contained"className="w-100" >Contained</Button>
      </div>
      <div className="col-md-3">
        <Button variant="contained"  className="w-100" disabled>
          Disabled
        </Button>
      </div>
      <div className="col-md-3">
        <Button variant="contained" className="w-100" href="#contained-buttons">
          Link
        </Button>
      </div>
      <div className="col-md-3">
        <Button variant="contained" className="w-100" href="#contained-buttons" color="success">
          Contained with Color
        </Button>
      </div>
    </div>
  );
}
