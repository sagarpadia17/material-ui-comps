import * as React from "react";
import Button from "@mui/material/Button";


export default function TextButtons() {
  return (
    <div className="row">
      <div className="col-md-3">
        <Button className="w-100">Primary</Button>
      </div>
      <div className="col-md-3" >
        <Button disabled className="w-100">Disabled</Button>
      </div>
      <div className="col-md-3">
        <Button href="#text-buttons" className="w-100">Link</Button>
      </div>
      <div className="col-md-3">
        <Button href="#text-buttons" className="w-100" color="secondary">Text with Color</Button>
      </div>
    </div>
  );
}
