import React from "react";
import BasicTimePicker from "../maincomponents/timepickers/BasicTimePicker";
import TimePickerViewRenderers from "../maincomponents/timepickers/TimePickerViewRenderer";
import StaticTimePickerLandscape from "../maincomponents/timepickers/StaticTimePickerLandscape";
import TimePickerViews from "../maincomponents/timepickers/TimePickerViews";
import ResponsiveTimePickers from "../maincomponents/timepickers/ResponsiveTimePickers";

const TimePicker = () => {
  return (
    <div>
      <div className="row px-5 justify-content-center">
        <div className="col-md-6 mt-3">
          <h1 className="m-3">Basic TimePicker</h1>
          <BasicTimePicker />
        </div>
        <div className="col-md-6 mt-3">
          <h1 className="m-3"> TimePicker View Renderer</h1>
          <TimePickerViewRenderers />
        </div>
        <div className="col-md-6 mt-3">
          <h1 className="m-3"> TimePicker View Renderer</h1>
          <StaticTimePickerLandscape />
        </div>
        <div className="col-md-6 mt-3">
          <h1 className="m-3"> TimePicker Views</h1>
          <TimePickerViews />
        </div>
        <div className="col-md-6 mt-3">
          <h1 className="m-3">Responsive TimePicker </h1>
          <ResponsiveTimePickers />
        </div>
      </div>
    </div>
  );
};

export default TimePicker;
