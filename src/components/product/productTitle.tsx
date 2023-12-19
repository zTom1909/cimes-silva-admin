import { useMediaQuery, Theme } from "@mui/material";
import { useRecordContext } from "react-admin";

const ProductTitle = () => {
  const record = useRecordContext();
  const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));
  return (
    <span style={{ fontSize: isSmall ? "16px" : "22px" }}>
      {`Producto: ${record ? record.name : "No disponible"}`}
    </span>
  );
};

export default ProductTitle;
