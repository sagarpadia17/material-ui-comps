import React from "react";
import BasicList from "../maincomponents/lists/BasicLists";
import NestedList from "../maincomponents/lists/NestedLists";
import FolderList from "../maincomponents/lists/FolderLists";
import InteractiveList from "../maincomponents/lists/InteractiveLists";
import AlignItemsList from "../maincomponents/lists/AlignItemsLists";
import CheckboxList from "../maincomponents/lists/CheckboxList";
import SwitchListSecondary from "../maincomponents/lists/SwitchLists";
import PinnedSubheaderList from "../maincomponents/lists/PinnedSubheaderLists";
import VirtualizedList from "../maincomponents/lists/VirtualizedLists";
import CustomizedList from "../maincomponents/lists/CustomizedLists";

const List = () => {
  return (
    <div>
      <div className="row px-5 justify-content-center">
        <div className="col-md-4 mt-3">
          <h1 className="m-3">Basic Lists</h1>
          <BasicList />
        </div>
        <div className="col-md-4 mt-3">
          <h1 className="m-3">Nested Lists</h1>
          <NestedList />
        </div>
        <div className="col-md-4 mt-3">
          <h1 className="m-3">Folder Lists</h1>
          <FolderList />
        </div>
        <div className="col-md-12 mt-3">
          <h1 className="m-3">Interactive Lists</h1>
          <InteractiveList />
        </div>
        <div className="col-md-4 mt-3">
          <h1 className="m-3">Align Items Lists</h1>
          <AlignItemsList />
        </div>
        <div className="col-md-4 mt-3">
          <h1 className="m-3">Checkbox Lists</h1>
          <CheckboxList />
        </div>
        <div className="col-md-4 mt-3">
          <h1 className="m-3">Switch Lists</h1>
          <SwitchListSecondary />
        </div>
        <div className="col-md-4 mt-3">
          <h1 className="m-3">Pinned Subheader Lists</h1>
          <PinnedSubheaderList />
        </div>
        <div className="col-md-4 mt-3">
          <h1 className="m-3">Virtualized Lists</h1>
          <VirtualizedList />
        </div>
        <div className="col-md-4 mt-3">
          <h1 className="m-3">Customized Lists</h1>
          <CustomizedList />
        </div>
      </div>
    </div>
  );
};

export default List;
