import React from "react";
import BasicTimeline from "../maincomponents/timelines/BasicTimeline";
import AlternateTimeline from "../maincomponents/timelines/AlternativeTimeline";
import LeftPositionedTimeline from "../maincomponents/timelines/LeftAlignedTimeline";
import OutlinedTimeline from "../maincomponents/timelines/OutlinedTimeline";
import OppositeContentTimeline from "../maincomponents/timelines/OppositeContentTimeline";
import CustomizedTimeline from "../maincomponents/timelines/CustomizedTimeline";

const Timeline = () => {
  return (
    <div>
      <div className="row px-5 justify-content-center">
        <div className="col-md-4 mt-3">
          <h1 className="m-3">Basic Timeline</h1>
          <BasicTimeline />
        </div>
        <div className="col-md-4 mt-3">
          <h1 className="m-3">Left Positioned Timeline</h1>
          <LeftPositionedTimeline />
        </div>
        <div className="col-md-4 mt-3">
          <h1 className="m-3">Alternate Timeline</h1>
          <AlternateTimeline />
        </div>
        <div className="col-md-4 mt-3">
          <h1 className="m-3">Outlined Timeline</h1>
          <OutlinedTimeline />
        </div>
        <div className="col-md-4 mt-3">
          <h1 className="m-3">Opposite Contained Timeline</h1>
          <OppositeContentTimeline />
        </div>
        <div className="col-md-4 mt-3">
          <h1 className="m-3">Customized Timeline</h1>
          <CustomizedTimeline />
        </div>
      </div>
    </div>
  );
};

export default Timeline;
