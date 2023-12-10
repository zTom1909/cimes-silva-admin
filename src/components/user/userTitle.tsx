import { useMediaQuery, Theme } from "@mui/material";
import { useRecordContext } from "react-admin";

const UserTitle = () => {
  const record = useRecordContext();
  const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));
  return (
    <span style={{ fontSize: isSmall ? "16px" : "22px" }}>
      Usuario:{" "}
      {record ? `${record.name} ${isSmall ? "" : "[#" + record.id + "]"}` : ""}
    </span>
  );
};

export default UserTitle;
