import React from "react";
import SlideInAlert from "../maincomponents/alertboxes/SlideInAlert";
import OpenAlert from "../maincomponents/alertboxes/OpenAlert";
import SimpleDialogDemo from "../maincomponents/alertboxes/SimpleDialog";
import ResponsiveAlert from "../maincomponents/alertboxes/ResponsiveAlert";
import DraggableAlert from "../maincomponents/alertboxes/DraggableAlert";
import FormAlert from "../maincomponents/alertboxes/FormAlert";

const AlertBox = () => {
  return (
    <div>
      <div className="row px-5">
        <div className="col-lg-4 col-md-6 mt-3">
          <SimpleDialogDemo/>
        </div>
        <div className="col-lg-4 col-md-6 mt-3">
          <OpenAlert/>
        </div>
        <div className="col-lg-4 col-md-6 mt-3">
          <SlideInAlert />
        </div>
        <div className="col-lg-4 col-md-6 mt-3">
          <ResponsiveAlert />
        </div>
        <div className="col-lg-4 col-md-6 mt-3">
          <DraggableAlert />
        </div>
        <div className="col-lg-4 col-md-6 mt-3">
          <FormAlert />
        </div>
      </div>
    </div>
  );
};

export default AlertBox;
