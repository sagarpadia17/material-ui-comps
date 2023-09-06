import React from "react";
import BasicPopover from "../maincomponents/popovers/BasicPopover";
import MouseOverPopover from "../maincomponents/popovers/MouseOverPopover";

const Popover = () => {
  return (
    <div>
      <div className="row px-5 justify-content-center">
        <div className="col-md-6 mt-3">
          <h1 className="m-3">Basic Popover</h1>
          <BasicPopover />
        </div>
        <div className="col-md-6 mt-3">
          <h1 className="m-3">Mouse Over Popover</h1>
          <MouseOverPopover />
        </div>
      </div>
    </div>
  );
};

export default Popover;
