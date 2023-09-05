import React from "react";
import BasicToggleButtons from "../maincomponents/togglebuttons/BasicToggleButtons";
import MultipleToggleButtons from "../maincomponents/togglebuttons/MultipleToggleButtons";
import ToggleButtonNotEmpty from "../maincomponents/togglebuttons/ToggleButtonNotEmpty";
import CustomizedDividers from "../maincomponents/togglebuttons/CustomizedDividers";
import StandaloneToggleButton from "../maincomponents/togglebuttons/StandloneToggleButton";
import VerticalToggleButtons from "../maincomponents/togglebuttons/VerticalToggleButton";

const ToggleButton = () => {
  return (
    <div>
      <div className="row px-5 justify-content-center">
        <div className="col-md-6 mt-3">
          <h1 className="m-3">Basic Toggle Buttons</h1>
          <BasicToggleButtons />
        </div>
        <div className="col-md-6 mt-3">
          <h1 className="m-3">Multiple Toggle Buttons</h1>
          <MultipleToggleButtons />
        </div>
        <div className="col-md-6 mt-3">
          <h1 className="m-3">Toggle Button Not Empty</h1>
          <ToggleButtonNotEmpty />
        </div>
        <div className="col-md-6 mt-3">
          <h1 className="m-3">Customized Dividers</h1>
          <CustomizedDividers />
        </div>
        <div className="col-md-6 mt-3">
          <h1 className="m-3">Standlone Toggle Buttons</h1>
          <StandaloneToggleButton />
        </div>
        <div className="col-md-6 mt-3">
          <h1 className="m-3">Vertical Toggle Buttons</h1>
          <VerticalToggleButtons />
        </div>
      </div>
    </div>
  );
};

export default ToggleButton;
