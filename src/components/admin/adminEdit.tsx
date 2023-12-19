import { BooleanInput, Edit, SelectInput, SimpleForm, TextInput } from "react-admin";
import AdminTitle from "./adminTitle";

const typeChoices = [
  { id: "admin", name: "Administrador" },
  { id: "superAdmin", name: "Super Administrador" },
];

const AdminEdit = () => {
  return (
    <Edit title={<AdminTitle />}>
      <SimpleForm>
        <TextInput
          source="username"
          label="Nombre de Usuario"
          InputProps={{ disabled: true }}
        />
        <SelectInput
          source="type"
          label="Tipo de cuenta"
          choices={typeChoices}
        />
        <BooleanInput source="isDisabled" label="Deshabilitada" />
      </SimpleForm>
    </Edit>
  );
};

export default AdminEdit;
