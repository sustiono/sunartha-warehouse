import React from "react";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

const columns = [
  {
    field: "WarehouseID",
    headerName: "ID",
    width: 150,
  },
  {
    field: "Branch",
    headerName: "Branch",
    flex: 1,
  },
  {
    field: "Active",
    headerName: "Active",
    flex: 1,
    valueGetter: (params) => {
      let activeValue = String(params.row.Active);
      return activeValue[0].toUpperCase() + activeValue.slice(1).toLowerCase();
    },
  },
  {
    field: "Description",
    headerName: "Desc.",
    flex: 1,
  },
  {
    field: "ReplenishmentClass",
    headerName: "Replenishment Class",
    flex: 1,
  },
  {
    field: "LastSync",
    headerName: "Last Sync",
    flex: 1,
    valueGetter: ({ row: { LastSync } }) => {
      const dates = new Date(LastSync)
        .toISOString()
        .substring(0, 10)
        .split("-");
      return `${dates[2]}-${dates[1]}-${dates[0]}`;
    },
  },
  {
    field: "LastModifiedDateTime",
    headerName: "Last Modified",
    flex: 1,
    valueGetter: ({ row: { LastSync } }) => {
      const dates = new Date(LastSync)
        .toISOString()
        .substring(0, 10)
        .split("-");
      return `${dates[2]}-${dates[1]}-${dates[0]}`;
    },
  },
];

const WarehouseDetail = ({ warehouseDetail }) => {
  const rpp = 1;
  return (
    <Box style={{ height: 108 }}>
      <DataGrid
        rows={[warehouseDetail]}
        pageSize={rpp}
        columns={columns}
        disableSelectionOnClick
        hideFooter
        getRowId={(row) => row.WarehouseID}
      />
    </Box>
  );
};

export default WarehouseDetail;
