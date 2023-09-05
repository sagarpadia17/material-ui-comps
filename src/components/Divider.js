import React from "react";
import ListDividers from "../maincomponents/dividers/ListDividers";
import InsetDividers from "../maincomponents/dividers/InsetDividers";
import SubheaderDividers from "../maincomponents/dividers/SubheadersDividers";
import MiddleDividers from "../maincomponents/dividers/MiddleDivider";
import TextDivider from "../maincomponents/dividers/TextDividers";
import VerticalTextDivider from "../maincomponents/dividers/VerticalTextDividers";

const Divider = () => {
  return (
    <div>
      <div className="row px-5 justify-content-center">
        <div className="col-md-6 mt-3">
          <h1 className="m-3">List Dividers</h1>
          <ListDividers />
        </div>
        <div className="col-md-6 mt-3">
          <h1 className="m-3">Inset Dividers</h1>
          <InsetDividers />
        </div>
        <div className="col-md-6 mt-3">
          <h1 className="m-3">Subheader Dividers</h1>
          <SubheaderDividers />
        </div>
        <div className="col-md-6 mt-3">
          <h1 className="m-3">Middle Dividers</h1>
          <MiddleDividers />
        </div>
        <div className="col-md-6 mt-3">
          <h1 className="m-3">Text Dividers</h1>
          <TextDivider />
        </div>
        <div className="col-md-6 mt-3">
          <h1 className="m-3">Vertical Text Dividers</h1>
          <VerticalTextDivider />
        </div>
      </div>
    </div>
  );
};

export default Divider;
