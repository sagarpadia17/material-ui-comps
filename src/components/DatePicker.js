import React from "react";
import BasicDatePicker from "../maincomponents/datepickers/BasicDatePicker";
import ResponsiveDatePickers from "../maincomponents/datepickers/ResponsiveDatePicker";
import StaticDatePickerLandscape from "../maincomponents/datepickers/StaticDatePickerLandscape";
import HelperText from "../maincomponents/datepickers/HelperText";
import DatePickerViews from "../maincomponents/datepickers/DatePickerViews";

const DatePicker = () => {
  return (
    <div>
      <div className="row px-5 justify-content-center">
        <div className="col-md-6 mt-3">
          <h1 className="m-3">Basic DatePicker</h1>
          <BasicDatePicker />
        </div>
        <div className="col-md-6 mt-3">
          <h1 className="m-3">Helper Text DatePicker</h1>
          <HelperText />
        </div>
        <div className="col-md-6 mt-3">
          <h1 className="m-3">Landscape DatePicker</h1>
          <StaticDatePickerLandscape />
        </div>
        <div className="col-md-6 mt-3">
          <h1 className="m-3"> DatePicker Views</h1>
          <DatePickerViews />
        </div>
        <div className="col-md-6 mt-3">
          <h1 className="m-3">Responsive DatePicker</h1>
          <ResponsiveDatePickers />
        </div>
      </div>
    </div>
  );
};

export default DatePicker;
