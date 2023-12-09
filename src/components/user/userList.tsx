import { useMediaQuery, Theme } from "@mui/material";
import { List, SimpleList, Datagrid, TextField, DateField } from "react-admin";
import UserFilter from "./userFilters";
import LimitedTextField from "../other/limitedTextField/limitedTextField";
import BooleanStarField from "../other/booleanStarField/booleanStarField";

const UserList = (props: any) => {
  const isSmall = useMediaQuery < Theme > ((theme) => theme.breakpoints.down("sm"));
  return (
    <List {...props} filters={<UserFilter />}>
      {isSmall ? (
        <SimpleList
          primaryText={(user) => user.name}
          secondaryText={(user) => user.phone}
          tertiaryText={(user) => user.location}
        />
      ) : (
        <Datagrid rowClick="show">
          <BooleanStarField source="customer" />
          <TextField source="name" />
          <TextField source="location" />
          <TextField source="phone" />
          <LimitedTextField source="message" />
          <DateField source="createdAt" />
        </Datagrid>
      )}
    </List>
  );
};

export default UserList;
