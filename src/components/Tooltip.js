import React from "react";
import BasicTooltip from "../maincomponents/tooltips/BasicToolTip";
import PositionedTooltips from "../maincomponents/tooltips/PositionedToolTip";
import FollowCursorTooltips from "../maincomponents/tooltips/FollowCursorTooltips";

const Tooltip = () => {
  return (
    <div>
      <div className="row px-5 justify-content-center">
        <div className="col-md-6 mt-3">
          <h1 className="m-3">Basic Tooltip</h1>
          <BasicTooltip />
        </div>
        <div className="col-md-6 mt-3">
          <h1 className="m-3">Follow Cursor Tooltip</h1>
          <FollowCursorTooltips />
        </div>
        <div className="col-12 mt-3">
          <h1 className="m-3">Positioned Tooltip</h1>
          <PositionedTooltips />
        </div>
      </div>
    </div>
  );
};

export default Tooltip;
