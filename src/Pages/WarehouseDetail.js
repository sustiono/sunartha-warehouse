import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";

import WarehouseListDetail from "../components/warehouse/WarehouseListDetail";

function WarehouseDetail() {
  const { warehouseId } = useParams();

  const [warehouseDetail, setWarehouseDetail] = useState(null);

  useEffect(() => {
    fetchWarehouseDetail();

    return () => null;
  }, []);

  const fetchWarehouseDetail = async () => {
    const res = await fetch(
      `https://api.belajartableau.com/api/WarehouseReps/${warehouseId}`
    );
    const warehouseDetailJson = await res.json();
    setWarehouseDetail(warehouseDetailJson);
  };

  return (
    <>
      <Typography
        variant="h5"
        gutterBottom
        sx={{ pb: 2, pt: 2, fontWeight: 700 }}
      >
        Detail Location Warehouse - {warehouseId}
      </Typography>
      {warehouseDetail && (
        <WarehouseListDetail warehouseDetail={warehouseDetail} />
      )}
    </>
  );
}

export default WarehouseDetail;
