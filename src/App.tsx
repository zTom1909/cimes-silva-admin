
import { Admin, Resource } from 'react-admin';
import UserIcon from "@mui/icons-material/Group";

import UserList from "./components/user/userList";
import UserShow from "./components/user/userShow";
import UserEdit from "./components/user/userEdit";

import { dataProvider } from './dataProvider';
import { authProvider } from './authProvider';

export const App = () => (
    <Admin
        dataProvider={dataProvider}
		authProvider={authProvider}
	>
        <Resource name="user" list={UserList} show={UserShow} edit={UserEdit} icon={UserIcon}/>
    </Admin>
);

    