import React from "react";
import BasicRadioButtons from "../maincomponents/radiobuttons/BasicRadioButtons";
import RadioButtonsGroup from "../maincomponents/radiobuttons/RadioButtonsGroup";
import ErrorRadios from "../maincomponents/radiobuttons/ErrorRadioButtons";
import CustomizedRadios from "../maincomponents/radiobuttons/CustomizedRadioButtons";

const RadioButton = () => {
  return (
    <div>
      <div className="row px-5 justify-content-center">
        <div className="col-md-6 mt-3">
          <h1 className="m-3">Basic Radio Buttons</h1>
          <BasicRadioButtons />
        </div>  
        <div className="col-md-6 mt-3">
          <h1 className="m-3"> Radio Buttons Groups</h1>
          <RadioButtonsGroup />
        </div>  
        <div className="col-md-6 mt-3">
          <h1 className="m-3"> Error Radio Buttons</h1>
          <ErrorRadios />
        </div>  
        <div className="col-md-6 mt-3">
          <h1 className="m-3"> Customized Radio Buttons</h1>
          <CustomizedRadios />
        </div>  
      </div>
    </div>
  );
};

export default RadioButton;
