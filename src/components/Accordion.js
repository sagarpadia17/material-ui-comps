import React from "react";
import BasicAccordion from "../maincomponents/accordions/BasicAccordion";
import CustomizedAccordions from "../maincomponents/accordions/CustomizedAccordion";
import ControlledAccordions from "../maincomponents/accordions/ControlledAccordion";

const Accordion = () => {
  return (
    <div>
      <div className="row px-5 justify-content-center">
        <div className="col-md-4 mt-3">
          <h1 className="m-3"> Basic Accordion</h1>
          <BasicAccordion />
        </div>
        <div className="col-md-4 mt-3">
          <h1 className="m-3"> Controlled Accordion</h1>
          <ControlledAccordions />
        </div>
        <div className="col-md-4 mt-3">
          <h1 className="m-3"> Customized Accordion</h1>
          <CustomizedAccordions />
        </div>
      </div>
    </div>
  );
};

export default Accordion;
