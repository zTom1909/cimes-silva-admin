import { BooleanInput, DateInput, Filter, TextInput } from 'react-admin';

const UserFilter = (props: any) => (
    <Filter {...props}>
        <TextInput label="Nombre" source="name" />
        <TextInput label="Ubicación" source="location" />
        <TextInput label="Teléfono" source="phone" />
        <BooleanInput label="Es cliente" source="customer" />
        <DateInput label="Fecha" source="createdAt" />
    </Filter>
);

export default UserFilter;
