import {
  BooleanField,
  Show,
  SimpleShowLayout,
  TextField,
  UrlField,
} from "react-admin";
import ProductTitle from "./productTitle";

const ProductEdit = () => {
  return (
    <Show title={<ProductTitle />}>
      <SimpleShowLayout>
        <TextField source="name" label="Nombre" />
        <UrlField source="image" label="Imagen" />
        <BooleanField source="isDisabled" label="Deshabilitado" />
      </SimpleShowLayout>
    </Show>
  );
};

export default ProductEdit;
