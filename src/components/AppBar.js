import React from "react";
import BasicAppBar from "../maincomponents/appbars/BasicAppBar";
import MenuAppBar from "../maincomponents/appbars/MenuAppBar";
import ResponsiveAppBar from "../maincomponents/appbars/ResponsiveAppBar";
import ProminentAppBar from "../maincomponents/appbars/ProminentAppBar";
import PrimarySearchAppBar from "../maincomponents/appbars/PrimarySearchAppBar";
import BottomAppBar from "../maincomponents/appbars/BottomAppBar";
import HideOnScrollAppBar from "../maincomponents/appbars/HideonScrollAppBar";

const AppBar = () => {
  return (
    <div>
      <div className="row px-5">
        <div className=" col-12 mt-5 text-center">
          <h1 className="m-3">Prominent App Bar</h1>
          <ProminentAppBar />
        </div>
        <div className=" col-12 mt-5">
          <h1 className="m-3">Basic App Bar</h1>
          <BasicAppBar />
        </div>
        <div className=" col-12 mt-5">
          <h1 className="m-3">Menu App Bar</h1>
          <MenuAppBar />
        </div>
        <div className=" col-12 mt-5">
          <h1 className="m-3">Responsive App Bar</h1>
          <ResponsiveAppBar />
        </div>
        <div className=" col-12 mt-5">
          <h1 className="m-3">Primary App Bar</h1>
          <PrimarySearchAppBar />
        </div>
        <div className=" col-12 mt-5">
          <h1 className="m-3">Bottom App Bar</h1>
          <BottomAppBar />
        </div>
        <div className=" col-12 mt-5">
          <HideOnScrollAppBar/>
        </div>
      </div>
    </div>
  );
};

export default AppBar;
