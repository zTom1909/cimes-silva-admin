import { Filter, TextInput } from 'react-admin';

const UserFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Nombre" source="name" />
        <TextInput label="Ubicacion" source="location" />
        <TextInput label="Telefono" source="phone" />
    </Filter>
);

export default UserFilter;
