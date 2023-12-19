import { Show, SimpleShowLayout, TextField } from "react-admin";
import UserTitle from "./userTitle";
import BooleanStarField from "../other/booleanStarField/booleanStarField";

const UserShow = () => {
  return (
    <Show title={<UserTitle />} >
      <SimpleShowLayout>
        <TextField source="name" label="Nombre" />
        <TextField source="location" label="Ubicación" />
        <TextField source="phone" label="Teléfono" />
        <TextField source="message" label="Mensaje" />
        <BooleanStarField source="customer" label="Es cliente" />
      </SimpleShowLayout>
    </Show>
  );
};

export default UserShow;
