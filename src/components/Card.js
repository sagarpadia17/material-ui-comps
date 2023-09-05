import React from "react";
import BasicCard from "../maincomponents/cards/BasicCards";
import OutlinedCard from "../maincomponents/cards/Outlined";
import RecipeReviewCard from "../maincomponents/cards/RecipeReviewCard";
import MediaCard from "../maincomponents/cards/MediaCard";
import MediaControlCard from "../maincomponents/cards/MediaControlCard";

const Card = () => {
  return (
    <div>
      <div className="row px-5 justify-content-center">
        <div className="col-md-4 mt-3">
          <h1 className="m-3">Basic Card</h1>
          <BasicCard />
        </div>
        <div className="col-md-4 mt-3">
          <h1 className="m-3">Outlined Card</h1>
          <OutlinedCard />
        </div>
        <div className="col-md-4 mt-3">
          <h1 className="m-3">Recipe Review Card</h1>
          <RecipeReviewCard />
        </div>
        <div className="col-md-4 mt-3">
          <h1 className="m-3">Media Card</h1>
          <MediaCard />
        </div>
        <div className="col-md-4 mt-3">
          <h1 className="m-3">Media Control Card</h1>
          <MediaControlCard />
        </div>
      </div>
    </div>
  );
};

export default Card;
