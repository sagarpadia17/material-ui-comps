import React from "react";
import MultipleDefaultSelect from "../maincomponents/selects/MultipleDefaultSelect";
import CheckmarksSelect from "../maincomponents/selects/CheckmarksSelect";
import ChipSelect from "../maincomponents/selects/ChipSelect";
import PlaceholderSelect from "../maincomponents/selects/PlaceholderSelect";
import BasicSelect from "../maincomponents/selects/BasicSelect";
import DialogSelect from "../maincomponents/selects/DialogSelect";
import GroupedSelect from "../maincomponents/selects/GroupedSelect";
import NativeSelect from "../maincomponents/selects/Native Select";

const Select = () => {
  return (
    <div>
      <div className="row px-5 justify-content-center">
        <div className="col-md-6 mt-3">
          <h1 className="m-3">Basic Select</h1>
          <BasicSelect />
        </div>
        <div className="col-md-6 mt-3">
          <h1 className="m-3">Multiple Default Select</h1>
          <MultipleDefaultSelect />
        </div>
        <div className="col-md-6 mt-3">
          <h1 className="m-3">Checkmarks Select</h1>
          <CheckmarksSelect />
        </div>
        <div className="col-md-6 mt-3">
          <h1 className="m-3">Chip Select</h1>
          <ChipSelect />
        </div>
        <div className="col-md-6 mt-3">
          <h1 className="m-3">Placeholder Select</h1>
          <PlaceholderSelect />
        </div>
        <div className="col-md-6 mt-3">
          <h1 className="m-3">Dialog Select</h1>
          <DialogSelect />
        </div>
        <div className="col-md-6 mt-3">
          <h1 className="m-3">Grouped Select</h1>
          <GroupedSelect />
        </div>
        <div className="col-md-6 mt-3">
          <h1 className="m-3">Native Select</h1>
          <NativeSelect />
        </div>
      </div>
    </div>
  );
};

export default Select;
