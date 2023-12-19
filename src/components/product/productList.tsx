import { useMediaQuery, Theme } from "@mui/material";
import {
  List,
  SimpleList,
  Datagrid,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

import ProductFilter from "./productFilters";
import LimitedTextField from "../other/limitedTextField/limitedTextField";

const ProductList = (props: any) => {
  const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));
  return (
    <List {...props} filters={<ProductFilter />} title="Productos">
      {isSmall ? (
        <SimpleList
          primaryText={(user) => user.name}
          linkType={() => "show"}
        />
      ) : (
        <Datagrid rowClick="show">
          <TextField source="name" label="Nombre" />
          <LimitedTextField source="image" label="Imagen" width="600" />
          <DateField
            source="createdAt"
            label="Fecha de creación"
            sx={{ color: "text.disabled" }}
          />
          <BooleanField
            source="isDisabled"
            label="Deshabilitado"
            sx={{ color: "text.disabled" }}
          />
        </Datagrid>
      )}
    </List>
  );
};

export default ProductList;
