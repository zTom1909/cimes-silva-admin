import { useMediaQuery, Theme } from "@mui/material";
import { List, SimpleList, Datagrid, TextField, DateField, BooleanField } from "react-admin";

import AdminFilter from "./adminFilters";

const UserList = (props: any) => {
  const isSmall = useMediaQuery < Theme > ((theme) => theme.breakpoints.down("sm"));
  return (
    <List {...props} filters={<AdminFilter />} title="Administradores">
      {isSmall ? (
        <SimpleList
          primaryText={(user) => user.username}
          secondaryText={(user) => user.type}
          linkType={() => "show"}
        />
      ) : (
        <Datagrid rowClick="show">
          <TextField source="username" label="Nombre de Usuario" />
          <TextField source="type" label="Tipo de cuenta" />
          <DateField source="createdAt" label="Fecha de creación" sx={{ color: 'text.disabled' }} />
          <BooleanField source="isDisabled" label="Deshabilitada" sx={{ color: 'text.disabled' }} />
        </Datagrid>
      )}
    </List>
  );
};

export default UserList;
