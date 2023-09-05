import React from "react";
import BasicCheckBox from "../maincomponents/checkbox/BasicCheckBox";
import CheckboxLabels from "../maincomponents/checkbox/CheckBoxLabels";
import IconCheckboxes from "../maincomponents/checkbox/IconCheckBox";
import IndeterminateCheckbox from "../maincomponents/checkbox/IndeterminateCheckBox";
import CheckboxesGroup from "../maincomponents/checkbox/CheckBoxesGroups";

const CheckBox = () => {
  return (
    <div>
      <div className="row px-5 justify-content-center">
        <div className="col-md-6 mt-3">
          <h1 className="m-3">Basic CheckBox</h1>
          <BasicCheckBox />
        </div>
        <div className="col-md-6 mt-3">
          <h1 className="m-3">Icon CheckBoxes</h1>
          <IconCheckboxes />
        </div>
        <div className="col-12 mt-3">
          <h1 className="m-3">CheckBox with Labels</h1>
          <CheckboxLabels />
        </div>
        <div className="col-md-6 mt-3">
          <h1 className="m-3">Indeterminate CheckBoxes</h1>
          <IndeterminateCheckbox />
        </div>
        <div className="col-md-6 mt-3">
          <h1 className="m-3">CheckBoxes Group</h1>
          <CheckboxesGroup />
        </div>
      </div>
    </div>
  );
};

export default CheckBox;
