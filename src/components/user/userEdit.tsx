import { BooleanInput, Edit, SimpleForm, TextInput, NumberInput } from "react-admin";
import UserTitle from "./userTitle";

const UserEdit = () => {
  return (
    <Edit title={<UserTitle />} >
      <SimpleForm>
        <TextInput source="name" InputProps={{ disabled: true }} />
        <TextInput source="location" />
        <NumberInput source="phone" />
        <TextInput source="message" multiline />
        <BooleanInput source="customer" />
      </SimpleForm>
    </Edit>
  );
};

export default UserEdit;
