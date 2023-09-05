import React from "react";
import BasicBadge from "../maincomponents/badges/BasicBadge";
import CustomizedBadges from "../maincomponents/badges/CustomizedBadge";
import BadgeVisibility from "../maincomponents/badges/BadgeVisibility";

const Badge = () => {
  return (
    <div>
      <div className="row px-5 justify-content-center">
        <div className="col-md-4 mt-3">
          <h1 className="m-3">Basic Badge</h1>
          <BasicBadge />

        </div>
        <div className="col-md-4 mt-3">
          <h1 className="m-3">Customized Badge</h1>
          <CustomizedBadges />

        </div>
        <div className="col-md-4 mt-3">
          <h1 className="m-3"> Badge Visibility</h1>
          <BadgeVisibility />
        </div>
      </div>
    </div>
  );
};

export default Badge;
