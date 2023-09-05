import React from "react";
import ComboBox from "../maincomponents/autocomplete/ComboBox";
import Playground from "../maincomponents/autocomplete/PlayGround";
import Tags from "../maincomponents/autocomplete/MultipleValues";
import FixedTags from "../maincomponents/autocomplete/FixedOptions";
import CheckboxesTags from "../maincomponents/autocomplete/CheckBoxesOption";
import LimitTags from "../maincomponents/autocomplete/LimitOptions";

const AutoComplete = () => {
  return (
    <div>
      <div className="row px-5">
        <div className="col-12 my-3">
        <h1 className="m-3">Combobox</h1>
          <ComboBox />
        </div>
        <div className="col-12 my-3">
        <h1 className="m-3">PlayGround</h1>
          <Playground />
        </div>
        <div className="col-12 my-3">
        <h1 className="m-3">Tags</h1>
          <Tags />
        </div>
        <div className="col-12 my-3">
        <h1 className="m-3">Fixed Tags</h1>
          <FixedTags />
        </div>
        <div className="col-12 my-3">
        <h1 className="m-3">Check Boxes Tags</h1>
          <CheckboxesTags />
        </div>
        <div className="col-12 my-3">
        <h1 className="m-3">Limit Tags</h1>
          <LimitTags />
        </div>
      </div>
    </div>
  );
};

export default AutoComplete;
