import * as React from "react";
import LoadingButton from "@mui/lab/LoadingButton/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";


export default function LoadingButtons() {
  return (
    <div className="row">
      <div className="col-md-4">
        <LoadingButton loading variant="outlined" className="w-100">
          Submit
        </LoadingButton>
      </div>
      <div className="col-md-4">
        <LoadingButton
          loading
          loadingIndicator="Loading…"
          variant="outlined"
          className="w-100"
        >
          Fetch data
        </LoadingButton>
      </div>
      <div className="col-md-4">
        <LoadingButton
          loading
          loadingPosition="start"
          startIcon={<SaveIcon />}
          variant="outlined"
          className="w-100"
        >
          Save
        </LoadingButton>
      </div>
    </div>
  );
}
