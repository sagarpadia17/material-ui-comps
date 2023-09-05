import React from "react";
import BasicTextFields from "../maincomponents/textfields/BasicTextFields";
import InputWithIcon from "../maincomponents/textfields/InputWithIcons";
import Inputs from "../maincomponents/textfields/Inputs";
import CustomizedInputBase from "../maincomponents/textfields/CustomizedInputBase";

const TextField = () => {
  return (
    <div>
      <div className="row px-5">
        <div className=" col-12 mt-5 text-center">
          <h1 className="m-3">Basic Text Fields</h1>
          <BasicTextFields />
        </div>
        <div className=" col-12 mt-5 text-center">
          <h1 className="m-3">Input with Icons</h1>
          <InputWithIcon />
        </div>
        <div className=" col-12 mt-5 text-center">
          <h1 className="m-3">Inputs</h1>
          <Inputs />
        </div>
        <div className=" col-12 mt-5 text-center">
          <h1 className="m-3">Customized Input Base</h1>
          <CustomizedInputBase />
        </div>
      </div>
    </div>
  );
};

export default TextField;
