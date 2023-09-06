import React from "react";
import StandardImageList from "../maincomponents/imagelists/StandardImageList";
import QuiltedImageList from "../maincomponents/imagelists/QuiltedImageList";
import WovenImageList from "../maincomponents/imagelists/WovenImageList";
import MasonryImageList from "../maincomponents/imagelists/MasonryImageList";
import TitlebarImageList from "../maincomponents/imagelists/TitlebarImageList";
import TitlebarBelowImageList from "../maincomponents/imagelists/TitlebarBelowImageList";
import TitlebarBelowMasonryImageList from "../maincomponents/imagelists/TitlebarBelowMasonryImageList";
import CustomImageList from "../maincomponents/imagelists/CustomImageList";

const ImageList = () => {
  return (
    <div>
      <div className="row px-5 justify-content-center">
        <div className="col-md-6 mt-3">
          <h1 className="m-3">Standard ImageList</h1>
          <StandardImageList />
        </div>
        <div className="col-md-6 mt-3">
          <h1 className="m-3">Quilted ImageList</h1>
          <QuiltedImageList />
        </div>
        <div className="col-md-6 mt-3">
          <h1 className="m-3">Woven ImageList</h1>
          <WovenImageList />
        </div>
        <div className="col-md-6 mt-3">
          <h1 className="m-3">Masonry ImageList</h1>
          <MasonryImageList />
        </div>
        <div className="col-md-6 mt-3">
          <h1 className="m-3">Titlebar ImageList</h1>
          <TitlebarImageList />
        </div>
        <div className="col-md-6 mt-3">
          <h1 className="m-3">Titlebar Below ImageList</h1>
          <TitlebarBelowImageList />
        </div>
        <div className="col-md-6 mt-3">
          <h1 className="m-3">Titlebar Below Masonry ImageList</h1>
          <TitlebarBelowMasonryImageList />
        </div>
        <div className="col-md-6 mt-3">
          <h1 className="m-3">Custom ImageList</h1>
          <CustomImageList />
        </div>
      </div>
    </div>
  );
};

export default ImageList;
