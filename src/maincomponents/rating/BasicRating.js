import * as React from "react";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

export default function BasicRating() {
  const [value, setValue] = React.useState(2);

  return (
    <div className="row">
      <div className="col-md-3">
        <Typography component="legend">Controlled</Typography>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </div>
      <div className="col-md-3">
        <Typography component="legend">Read only</Typography>
        <Rating name="read-only" value={value} readOnly />
      </div>
      <div className="col-md-3">
        <Typography component="legend">Disabled</Typography>
        <Rating name="disabled" value={value} disabled />
      </div>
      <div className="col-md-3">
        <Typography component="legend">No rating given</Typography>
        <Rating name="no-value" value={null} />
      </div>
    </div>
  );
}
