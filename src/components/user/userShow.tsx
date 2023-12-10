import { Show, SimpleShowLayout, TextField } from "react-admin";
import UserTitle from "./userTitle";
import BooleanStarField from "../other/booleanStarField/booleanStarField";

const UserEdit = () => {
  return (
    <Show title={<UserTitle />} >
      <SimpleShowLayout>
        <TextField source="name" />
        <TextField source="location" />
        <TextField source="phone" />
        <TextField source="message" />
        <BooleanStarField source="customer" />
      </SimpleShowLayout>
    </Show>
  );
};

export default UserEdit;
