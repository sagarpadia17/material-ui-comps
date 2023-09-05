import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

export default function SwitchLabels() {
  return (
    <FormGroup>
      <div className="row">
        <div className="col-md-4">
          <FormControlLabel control={<Switch defaultChecked />} label="Label" />
        </div>
        <div className="col-md-4">
          <FormControlLabel required control={<Switch />} label="Required" />
        </div>
        <div className="col-md-4">
          <FormControlLabel disabled control={<Switch />} label="Disabled" />
        </div>
      </div>
    </FormGroup>
  );
}
