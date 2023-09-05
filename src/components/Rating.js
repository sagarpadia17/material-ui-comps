import React from "react";
import BasicRating from "../maincomponents/rating/BasicRating";
import HalfRating from "../maincomponents/rating/HalfRating";
import HoverRating from "../maincomponents/rating/HoverRating";
import CustomizedRating from "../maincomponents/rating/CustomizedRating";
import RadioGroupRating from "../maincomponents/rating/RadioGroupRating";

const Rating = () => {
  return (
    <div>
      <div className="row px-5">
        <div className=" col-12 mt-5 text-center">
          <h1 className="m-3">Basic Rating</h1>
          <BasicRating />
        </div>
        <div className=" col-md-6 mt-5 text-center">
          <h1 className="m-3">Half Rating</h1>
          <HalfRating />
        </div>
        <div className=" col-md-6 mt-5 text-center">
          <h1 className="m-3">Hover Rating</h1>
          <HoverRating />
        </div>
        <div className=" col-md-6 mt-5 text-center">
          <h1 className="m-3">Customized Rating</h1>
          <CustomizedRating />
        </div>
        <div className=" col-md-6 mt-5 text-center">
          <h1 className="m-3">Radio Group Rating</h1>
          <RadioGroupRating />
        </div>
      </div>
    </div>
  );
};

export default Rating;
