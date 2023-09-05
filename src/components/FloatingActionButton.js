import React from "react";
import BasicFloatingActionButtons from "../maincomponents/floatingactionbuttons/BasicFloatingActionButtons";


const FloatingActionButton = () => {
  return (
    <div>
      <div className="row px-5 justify-content-center">
        <div className="col-12 mt-3">
          <h1 className="m-3">Basic Floating Action Buttons</h1>
          <BasicFloatingActionButtons />
        </div>
      </div>
    </div>
  );
};

export default FloatingActionButton;
