import { BooleanInput, Edit, SimpleForm, TextInput } from "react-admin";
import ProductTitle from "./productTitle";

const ProductEdit = () => {
  return (
    <Edit title={<ProductTitle />}>
      <SimpleForm>
        <TextInput source="name" label="Nombre" />
        <TextInput source="image" label="Imagen" />
        <BooleanInput source="isDisabled" label="Deshabilitado" />
      </SimpleForm>
    </Edit>
  );
};

export default ProductEdit;
