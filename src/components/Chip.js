import React from "react";
import BasicChips from "../maincomponents/chips/BasicChip";
import ClickableAndDeletableChips from "../maincomponents/chips/ClickableAndDeletableChip";
import AvatarChips from "../maincomponents/chips/AvatarChip";
import IconChips from "../maincomponents/chips/IconChip";
import MultilineChips from "../maincomponents/chips/MultilineScript";
import ChipsArray from "../maincomponents/chips/ChipsArray";

const Chip = () => {
  return (
    <div>
      <div className="row px-5 justify-content-center">
        <div className="col-md-4 mt-3">
          <h1 className="m-3">Basic Chip</h1>
          <BasicChips />
        </div>
        <div className="col-md-4 mt-3">
          <h1 className="m-3">Click-Delete   Chip</h1>
          <ClickableAndDeletableChips />
        </div>
        <div className="col-md-4 mt-3">
          <h1 className="m-3">Avatar Chip</h1>
          <AvatarChips />
        </div>
        <div className="col-md-4 mt-3">
          <h1 className="m-3">Icon Chip</h1>
          <IconChips />
        </div>
        <div className="col-md-4 mt-3">
          <h1 className="m-3">Multiline Chip</h1>
          <MultilineChips />
        </div>
        <div className="col-md-4 mt-3">
          <h1 className="m-3"> Chips Array</h1>
          <ChipsArray />
        </div>
      </div>
    </div>
  );
};

export default Chip;
