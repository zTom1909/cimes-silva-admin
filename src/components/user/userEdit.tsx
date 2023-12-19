import { BooleanInput, Edit, SimpleForm, TextInput, NumberInput } from "react-admin";
import UserTitle from "./userTitle";

const UserEdit = () => {
  return (
    <Edit title={<UserTitle />} >
      <SimpleForm>
        <TextInput source="name" label="Nombre" InputProps={{ disabled: true }} />
        <TextInput source="location" label="Ubicación" />
        <NumberInput source="phone" label="Teléfono" />
        <TextInput source="message" label="Mensaje" multiline />
        <BooleanInput source="customer" label="Es cliente" />
      </SimpleForm>
    </Edit>
  );
};

export default UserEdit;
