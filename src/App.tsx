
import { Admin, Resource, ShowGuesser } from 'react-admin';
import UserList from "./components/user/userList";
import UserEdit from "./components/user/userEdit";
import { dataProvider } from './dataProvider';
import { authProvider } from './authProvider';

export const App = () => (
    <Admin
        dataProvider={dataProvider}
		authProvider={authProvider}
	>
        <Resource name="user" list={UserList} show={ShowGuesser} edit={UserEdit} />
    </Admin>
);

    