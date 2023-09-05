import * as React from "react";
import Button from "@mui/material/Button";

export default function BasicButtons() {
  return (
    <div className="row">
      <div className="col-md-4">
        <Button variant="contained" className="w-100">Contained</Button>
      </div>
      <div className="col-md-4">
        <Button variant="outlined" className="w-100">Outlined</Button>
      </div>
      <div className="col-md-4">
        <Button variant="text" className="w-100">Text</Button>
      </div>
    </div>
  );
}
