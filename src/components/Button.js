import React from "react";
import BasicButtons from "../maincomponents/buttons/BasicButtons";
import TextButtons from "../maincomponents/buttons/TextButtons";
import ContainedButtons from "../maincomponents/buttons/ContainedButtons";
import OutlinedButtons from "../maincomponents/buttons/OutlinedButtons";
import ButtonWithAndAsIcon from "../maincomponents/buttons/ButtonWithAndAsIcon";
import LoadingButtons from "../maincomponents/buttons/LoadingButtons";

const Button = () => {
  return (
    <div>
      <div className="row px-5 justify-content-center">
        <div className="col-12 mt-3">
          <h1 className="m-3">Basic Buttons</h1>
          <BasicButtons />
        </div>
        <div className="col-12 mt-3">
          <h1 className="m-3">Text Buttons</h1>
          <TextButtons />
        </div>
        <div className="col-12 mt-3">
          <h1 className="m-3">Contained Buttons</h1>
          <ContainedButtons />
        </div>
        <div className="col-12 mt-3">
          <h1 className="m-3">Outlined Buttons</h1>
          <OutlinedButtons />
        </div>
        <div className="col-12 mt-3">
          <h1 className="m-3">Button with Icon and as Icon</h1>
          <ButtonWithAndAsIcon />
        </div>
        <div className="col-12 mt-3">
          <h1 className="m-3">Loading Buttons</h1>
          <LoadingButtons />
        </div>
      </div>
    </div>
  );
};

export default Button;
