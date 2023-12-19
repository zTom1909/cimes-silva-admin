import { Create, SimpleForm, TextInput } from "react-admin";

const ProductCreate = (props: any) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="name" label="Nombre" />
        <TextInput source="image" label="Imagen" />
      </SimpleForm>
    </Create>
  );
};

export default ProductCreate;
