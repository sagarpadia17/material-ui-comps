import * as React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function CheckboxLabels() {
  return (
    <div className="row">
      <div className="col-md-3">
        <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
      </div>
      <div className="col-md-3">
        <FormControlLabel required control={<Checkbox />} label="Required" />
      </div>
      <div className="col-md-3">
        <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
      </div>
      <div className="col-md-3">
        <FormControlLabel control={<Checkbox color="secondary" />} label="Colored" />
      </div>
    </div>
  );
}
