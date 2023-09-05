import React from "react";
import BasicSwitches from "../maincomponents/switches/BasicSwitches";
import SwitchLabels from "../maincomponents/switches/SwitchLabels";
import CustomizedSwitches from "../maincomponents/switches/CustomizedSwitch";

const Switch = () => {
  return (
    <div>
      <div className="row px-5 justify-content-center">
        <div className="col-md-6 mt-3">
          <h1 className="m-3">Basic Switches</h1>
          <BasicSwitches />
        </div>
        <div className="col-md-6 mt-3">
          <h1 className="m-3">Switch Labels</h1>
          <SwitchLabels />
        </div>
        <div className="col-12 mt-3 ">
          <h1 className="m-3">Customized Switch</h1>
          <CustomizedSwitches />
        </div>
      </div>
    </div>
  );
};

export default Switch;
