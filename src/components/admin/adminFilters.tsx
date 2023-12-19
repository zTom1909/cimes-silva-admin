import { SelectInput, Filter, TextInput, BooleanInput } from "react-admin";

const typeChoices = [
  { id: "admin", name: "Administrador" },
  { id: "superAdmin", name: "Super Administrador" },
];

const AdminFilter = (props: any) => (
  <Filter {...props}>
    <TextInput label="Nombre" source="username" />
    <SelectInput label="Tipo de cuenta" source="type" choices={typeChoices} />
    <BooleanInput label="Deshabilitada" source="isDisabled" />
  </Filter>
);

export default AdminFilter;
