import React from "react";
import Variants from "../maincomponents/skeletons/Variants";
import Animations from "../maincomponents/skeletons/Animations";
import Facebook from "../maincomponents/skeletons/WaveAnimations";

const Skeleton = () => {
  return (
    <div>
      <div className="row px-5 justify-content-center">
        <div className="col-md-4 mt-3">
          <h1 className="m-3"> Skeleton Variants</h1>
          <Variants />
        </div>
        <div className="col-md-4 mt-3">
          <h1 className="m-3"> Skeleton Animations</h1>
          <Animations />
        </div>
        <div className="col-md-4 mt-3">
          <h1 className="m-3"> Wave Animation Example</h1>
          <Facebook />
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
