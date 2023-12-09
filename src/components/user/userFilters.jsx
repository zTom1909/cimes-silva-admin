import { Filter, TextInput } from 'react-admin';

const UserFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Name" source="name" />
    </Filter>
);

export default UserFilter;
