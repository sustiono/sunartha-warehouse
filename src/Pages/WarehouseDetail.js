import { useParams } from "react-router-dom";

function WarehouseDetail() {
  const { warehouseId } = useParams();

  return <div>WarehouseId: {warehouseId}</div>;
}

export default WarehouseDetail;
