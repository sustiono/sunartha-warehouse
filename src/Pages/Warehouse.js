import { useEffect, useState } from "react";
import { Typography } from "@mui/material";

import WarehouseList from "../components/warehouse/WarehouseList";

function Warehouse() {
  const [warehouseData, setWarehouseData] = useState([]);

  useEffect(() => {
    fetchWarehouseData();

    return () => null;
  }, []);

  const fetchWarehouseData = async () => {
    const res = await fetch("https://api.belajartableau.com/api/WarehouseReps");
    const warehouseDataJson = await res.json();
    setWarehouseData(warehouseDataJson);
  };

  return (
    <>
      <Typography
        variant="h5"
        gutterBottom
        sx={{ pb: 2, pt: 2, fontWeight: 700 }}
      >
        Warehouse
      </Typography>
      <WarehouseList warehouseData={warehouseData} />
    </>
  );
}

export default Warehouse;
