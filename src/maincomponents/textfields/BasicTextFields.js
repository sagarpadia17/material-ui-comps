import * as React from "react";
import TextField from "@mui/material/TextField";

export default function BasicTextFields() {
  return (
    <div className="row">
      <div className="col-md-4">
        <TextField id="outlined-basic" className="w-100" label="Outlined" variant="outlined" />
      </div>
      <div className="col-md-4">
        <TextField id="filled-basic" className="w-100" label="Filled" variant="filled" />
      </div>
      <div className="col-md-4">
        <TextField id="standard-basic" className="w-100" label="Standard" variant="standard" />
      </div>
    </div>
  );
}
