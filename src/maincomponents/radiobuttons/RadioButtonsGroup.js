import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function RadioButtonsGroup() {
  return (
    <RadioGroup
      aria-labelledby="demo-radio-buttons-group-label"
      defaultValue="female"
      name="radio-buttons-group"
    >
      <div className="row">
        <div className="col-md-4">
          <FormControlLabel value="female" control={<Radio />} label="Female" />
        </div>
        <div className="col-md-4">
          <FormControlLabel value="male" control={<Radio />} label="Male" />
        </div>
        <div className="col-md-4">
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </div>
      </div>
    </RadioGroup>
  );
}
