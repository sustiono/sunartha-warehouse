import { useParams } from "react-router-dom";

function Detail() {
  const { warehouseId } = useParams();

  return <div>Detail {warehouseId}</div>;
}

export default Detail;
