import { BooleanField, Show, SimpleShowLayout, TextField } from "react-admin";
import AdminTitle from "./adminTitle";

const AdminShow = () => {
  return (
    <Show title={<AdminTitle />} >
      <SimpleShowLayout>
        <TextField source="username" label="Nombre de Usuario" />
        <TextField source="type" label="Tipo de cuenta" />
        <BooleanField source="isDisabled" label="Deshabilitada" />
      </SimpleShowLayout>
    </Show>
  );
};

export default AdminShow;
