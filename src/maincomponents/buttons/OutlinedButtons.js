import * as React from "react";
import Button from "@mui/material/Button";

export default function OutlinedButtons() {
  return (
    <div className="row">
      <div className="col-md-3">
        <Button variant="outlined" className="w-100" >Primary</Button>
      </div>
      <div className="col-md-3">
        <Button variant="outlined" disabled className="w-100" >
          Disabled
        </Button>
      </div>
      <div className="col-md-3">
        <Button variant="outlined"  className="w-100" href="#outlined-buttons">
          Link
        </Button>
      </div>
      <div className="col-md-3">
        <Button variant="outlined"  className="w-100" color="error">
          Outline with Color
        </Button>
      </div>
    </div>
  );
}
