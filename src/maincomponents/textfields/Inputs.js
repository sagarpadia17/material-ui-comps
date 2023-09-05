import * as React from "react";
import Input from "@mui/material/Input";

const ariaLabel = { "aria-label": "description" };

export default function Inputs() {
  return (
    <div className="row">
      <div className="col-md-3">
        <Input defaultValue="Hello world" inputProps={ariaLabel} className="w-100"/>
      </div>
      <div className="col-md-3">
        <Input placeholder="Placeholder" inputProps={ariaLabel} className="w-100"/>
      </div>
      <div className="col-md-3">
        <Input disabled defaultValue="Disabled" inputProps={ariaLabel} className="w-100"/>
      </div>
      <div className="col-md-3">
        <Input defaultValue="Error" error inputProps={ariaLabel} className="w-100"/>
      </div>
    </div>
  );
}
