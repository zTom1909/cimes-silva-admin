import { Admin, Resource } from "react-admin";
import UserIcon from "@mui/icons-material/Group";
import AdminIcon from "@mui/icons-material/AdminPanelSettings";
import ProductIcon from '@mui/icons-material/Category';

import UserList from "./components/user/userList";
import UserShow from "./components/user/userShow";
import UserEdit from "./components/user/userEdit";

import AdminList from "./components/admin/adminList";
import AdminShow from "./components/admin/adminShow";
import AdminEdit from "./components/admin/adminEdit";
import AdminCreate from "./components/admin/adminCreate";

import ProductList from "./components/product/productList";
import ProductShow from "./components/product/productShow";
import ProductEdit from "./components/product/productEdit";
import ProductCreate from "./components/product/productCreate";

import { dataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";

export const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    <Resource
      name="user"
      list={UserList}
      show={UserShow}
      edit={UserEdit}
      icon={UserIcon}
    />
    <Resource
      name="product"
      list={ProductList}
      show={ProductShow}
      edit={ProductEdit}
      create={ProductCreate}
      icon={ProductIcon}
    />
    <Resource
      name="admin"
      list={AdminList}
      show={AdminShow}
      edit={AdminEdit}
      create={AdminCreate}
      icon={AdminIcon}
    />
  </Admin>
);
