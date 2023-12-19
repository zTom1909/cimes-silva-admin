import { Create, SimpleForm, TextInput, SelectInput } from "react-admin";

const typeChoices = [
  { id: "admin", name: "Administrador" },
  { id: "superAdmin", name: "Super Administrador" },
];

const AdminCreate = (props: any) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="username" label="Nombre de Usuario" />
        <TextInput source="password" label="Contraseña" />
        <SelectInput
          source="type"
          label="Tipo de cuenta"
          choices={typeChoices}
        />
      </SimpleForm>
    </Create>
  );
};

export default AdminCreate;
