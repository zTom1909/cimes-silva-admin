import { useMediaQuery, Theme } from "@mui/material";
import { useRecordContext } from "react-admin";

const AdminTitle = () => {
  const record = useRecordContext();
  const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));
  return (
    <span style={{ fontSize: isSmall ? "16px" : "22px" }}>
      Administrador:{" "}
      {record ? "@" + record.username : ""}
    </span>
  );
};

export default AdminTitle;
