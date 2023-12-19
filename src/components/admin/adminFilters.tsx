import { SelectInput, DateInput, Filter, TextInput, BooleanInput } from "react-admin";

const typeChoices = [
  { id: "admin", name: "Administrador" },
  { id: "superAdmin", name: "Super Administrador" },
];

const AdminFilter = (props: any) => (
  <Filter {...props}>
    <TextInput label="Nombre" source="username" />
    <SelectInput source="type" label="Tipo de cuenta" choices={typeChoices} />
    <DateInput label="Fecha" source="createdAt" />
    <BooleanInput label="Deshabilitada" source="isDisabled" />
  </Filter>
);

export default AdminFilter;
