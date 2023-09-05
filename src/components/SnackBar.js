import React from "react";
import SimpleSnackbar from "../maincomponents/snackbars/SimpleSnackBar";
import PositionedSnackbar from "../maincomponents/snackbars/PositionedSnackBar";
import TransitionsSnackbar from "../maincomponents/snackbars/TransitionsSnackbar";
import DirectionSnackbar from "../maincomponents/snackbars/DirectionSnackBar";

const SnackBar = () => {
  return (
    <div>
      <div className="row px-5 justify-content-center">
        <div className="col-12 mt-3">
        <h1 className="m-3">Simple SnackBar</h1>
          <SimpleSnackbar />
        </div>
        <div className="col-12 mt-3">
        <h1 className="m-3">Positioned SnackBars</h1>
          <PositionedSnackbar />
        </div>
        <div className="col-12 mt-3">
        <h1 className="m-3">Transitioned SnackBars</h1>
          <TransitionsSnackbar />
        </div>
        <div className="col-12 mt-3">
        <h1 className="m-3">Direction SnackBars</h1>
          <DirectionSnackbar />
        </div>
      </div>
    </div>
  );
};

export default SnackBar;
