import { BooleanInput, Edit, SimpleForm, TextInput } from "react-admin";

const UserEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="name" InputProps={{ disabled: true }} />
        <TextInput source="location" />
        <TextInput source="phone" />
        <TextInput source="message" multiline rows={5} />
        <BooleanInput source="customer" />
      </SimpleForm>
    </Edit>
  );
};

export default UserEdit;
