import React from "react";
import BasicModal from "../maincomponents/modals/BasicModal";
import NestedModal from "../maincomponents/modals/NestedModal";
import KeepMountedModal from "../maincomponents/modals/KeepMountedModal";

const Modal = () => {
  return (
    <div>
      <div className="row px-5">
        <div className="col-lg-4 col-md-6 mt-3">
          <BasicModal />
        </div>
        <div className="col-lg-4 col-md-6 mt-3">
          <NestedModal />
        </div>
        <div className="col-lg-4 col-md-6 mt-3">
          <KeepMountedModal />
        </div>
      </div>
    </div>
  );
};

export default Modal;
