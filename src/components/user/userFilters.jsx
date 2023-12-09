import { BooleanInput, Filter, TextInput } from 'react-admin';

const UserFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Nombre" source="name" />
        <TextInput label="Ubicacion" source="location" />
        <TextInput label="Telefono" source="phone" />
        <BooleanInput label="Es cliente?" source="customer" />
    </Filter>
);

export default UserFilter;
