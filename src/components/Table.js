import React from "react";
import BasicTable from "../maincomponents/tables/BasicTable";
import DataTable from "../maincomponents/tables/DataTable";
import DenseTable from "../maincomponents/tables/DenseTable,";
import EnhancedTable from "../maincomponents/tables/EnhancedTable";
import CustomPaginationActionsTable from "../maincomponents/tables/CustomPaginationActionsTable";
import ColumnGroupingTable from "../maincomponents/tables/ColumnGroupingTable";
import CollapsibleTable from "../maincomponents/tables/CollapsibleTable";
import SpanningTable from "../maincomponents/tables/SpanningTable";
import ReactVirtualizedTable from "../maincomponents/tables/ReactVirtualizedTable";
import AccessibleTable from "../maincomponents/tables/AccessibleTable";

const Table = () => {
  return (
    <div>
      <div className="row px-5 justify-content-center">
        <div className="col-md-6 mt-3">
          <h1 className="m-3">Basic Table</h1>
          <BasicTable />
        </div>
        <div className="col-md-6 mt-3">
          <h1 className="m-3">Data Table</h1>
          <DataTable />
        </div>
        <div className="col-md-6 mt-3">
          <h1 className="m-3">Dense Table</h1>
          <DenseTable />
        </div>
        <div className="col-md-6 mt-3">
          <h1 className="m-3">Enhanced Table</h1>
          <EnhancedTable />
        </div>
        <div className="col-md-6 mt-3">
          <h1 className="m-3">Custom Pagination Actions Table</h1>
          <CustomPaginationActionsTable />
        </div>
        <div className="col-md-6 mt-3">
          <h1 className="m-3">Column Grouping Table</h1>
          <ColumnGroupingTable />
        </div>
        <div className="col-md-6 mt-3">
          <h1 className="m-3">Collapsible Table</h1>
          <CollapsibleTable />
        </div>
        <div className="col-md-6 mt-3">
          <h1 className="m-3">Spanning Table</h1>
          <SpanningTable />
        </div>
        <div className="col-md-6 mt-3">
          <h1 className="m-3">Virtualized Table</h1>
          <ReactVirtualizedTable />
        </div>
        <div className="col-md-6 mt-3">
          <h1 className="m-3">Accessible Table</h1>
          <AccessibleTable />
        </div>
      </div>
    </div>
  );
};

export default Table;
