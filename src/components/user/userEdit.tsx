import { Edit, SimpleForm, TextInput } from "react-admin";

const UserEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="name" InputProps={{ disabled: true }} />
        <TextInput source="location" />
        <TextInput source="phone" />
        <TextInput source="message" multiline rows={5} />
        <TextInput source="createdAt" InputProps={{ disabled: true }} />
      </SimpleForm>
    </Edit>
  );
};

export default UserEdit;
