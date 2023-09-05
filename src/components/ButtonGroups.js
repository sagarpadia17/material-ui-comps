import React from "react";
import BasicButtonGroup from "../maincomponents/buttongroups/BasicButtonGroups";
import GroupOrientation from "../maincomponents/buttongroups/VerticalGroups";
import SplitButton from "../maincomponents/buttongroups/SplitButton";

const ButtonGroups = () => {
  return (
    <div>
      <div className="row px-5 justify-content-center">
        <div className="col-12 mt-3">
          <h1 className="m-3">Basic Button Groups</h1>
          <BasicButtonGroup />
        </div>
        <div className="col-12 mt-3">
          <h1 className="m-3">Vertical Button Groups</h1>
          <GroupOrientation />
        </div>
        <div className="col-12 mt-3">
          <h1 className="m-3">Split Buttons</h1>
          <SplitButton />
        </div>
      </div>
    </div>
  );
};

export default ButtonGroups;
