import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";

const DataTable = ({ columns, rows, onSelected }) => {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        onRowSelected={onSelected}
      />
    </div>
  );
};
export default DataTable;
