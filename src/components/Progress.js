import React from "react";
import CircularIndeterminateColorProgress from "../maincomponents/progress/CircularIndeterminateColorProgress";
import CircularDeterminate from "../maincomponents/progress/CircularDeterminate";
import CircularIntegration from "../maincomponents/progress/CircularIntegration";
import CircularWithValueLabel from "../maincomponents/progress/CircularWithValueLabel";
import LinearColor from "../maincomponents/progress/LinearColor";
import LinearDeterminate from "../maincomponents/progress/LinearDeterminate";
import LinearBuffer from "../maincomponents/progress/LinearBuffer";
import LinearWithValueLabel from "../maincomponents/progress/LinearProgressWithLabel";
import DelayingAppearance from "../maincomponents/progress/DelayingAppereance";

const Progress = () => {
  return (
    <div>
      <div className="row px-5 justify-content-center">
        <div className="col-md-4 mt-3">
          <h1 className="m-3">Circular Color Progress</h1>
          <CircularIndeterminateColorProgress />
        </div>
        <div className="col-md-4 mt-3">
          <h1 className="m-3">Circular Determinate </h1>
          <CircularDeterminate />
        </div>
        <div className="col-md-4 mt-3">
          <h1 className="m-3">Circular Integration </h1>
          <CircularIntegration />
        </div>
        <div className="col-md-4 mt-3">
          <h1 className="m-3">Circular Integration </h1>
          <CircularWithValueLabel />
        </div>
        <div className="col-md-4 mt-3">
          <h1 className="m-3">Linear Color Progress </h1>
          <LinearColor />
        </div>
        <div className="col-md-4 mt-3">
          <h1 className="m-3">Linear Determinate </h1>
          <LinearDeterminate />
        </div>
        <div className="col-md-4 mt-3">
          <h1 className="m-3">Linear Buffer </h1>
          <LinearBuffer />
        </div>
        <div className="col-md-4 mt-3">
          <h1 className="m-3">Linear With Value Label </h1>
          <LinearWithValueLabel />
        </div>
        <div className="col-md-4 mt-3">
          <h1 className="m-3">Delaying Apperance </h1>
          <DelayingAppearance />
        </div>
      </div>
    </div>
  );
};

export default Progress;
