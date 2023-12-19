import { Filter, TextInput, BooleanInput } from "react-admin";

const ProductFilter = (props: any) => (
  <Filter {...props}>
    <TextInput label="Nombre" source="name" />
    <BooleanInput label="Deshabilitado" source="isDisabled" />
  </Filter>
);

export default ProductFilter;
