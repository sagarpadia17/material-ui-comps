import React from "react";
import ContinuousSlider from "../maincomponents/sliders/ContinuousSlider";
import DiscreteSlider from "../maincomponents/sliders/DiscreteSlider";
import RangeSlider from "../maincomponents/sliders/RangeSlider";
import MinimumDistanceSlider from "../maincomponents/sliders/MinimumDistanceSlider";
import InputSlider from "../maincomponents/sliders/InputSlider";
import VerticalSlider from "../maincomponents/sliders/VerticalSlider";

const Slider = () => {
  return (
    <div>
      <div className="row px-5 justify-content-center">
        <div className="col-md-6 mt-3">
          <h1 className="m-3">Continuous Slider</h1>
          <ContinuousSlider />
        </div>
        <div className="col-md-6 mt-3">
          <h1 className="m-3">Discrete Slider</h1>
          <DiscreteSlider />
        </div>
        <div className="col-md-6 mt-3">
          <h1 className="m-3">Range Slider</h1>
          <RangeSlider />
        </div>
        <div className="col-md-6 mt-3">
          <h1 className="m-3">Minimum Distance Slider</h1>
          <MinimumDistanceSlider />
        </div>
        <div className="col-md-6 mt-3">
          <h1 className="m-3"> Input Slider</h1>
          <InputSlider />
        </div>
        <div className="col-md-6 mt-3">
          <h1 className="m-3"> Vertical Slider</h1>
          <VerticalSlider />
        </div>
      </div>
    </div>
  );
};

export default Slider;
