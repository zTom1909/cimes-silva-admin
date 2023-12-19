import { AuthProvider } from "react-admin";
import axios from "axios";

const apiUrl = import.meta.env.VITE_JSON_SERVER_URL;

export const authProvider: AuthProvider = {
  login: async ({ username, password }) => {
    try {
      const { data } = await axios.post(`${apiUrl}/admin/login`, {
        username,
        password,
      });
      const { success, message, admin } = data;

      if (!success) throw new Error(message);

      localStorage.setItem("user", JSON.stringify(admin));
      return Promise.resolve();
    } catch (error: any) {
      return Promise.reject(
        error.response?.data || { success: false, message: "Unknown error" }
      );
    }
  },
  logout: () => {
    localStorage.removeItem("user");
    return Promise.resolve();
  },
  checkError: (error) => {  
    const status = error.status;
    if (status >= 400) {
      localStorage.removeItem("user");
      return Promise.reject();
    }
    return Promise.resolve();
  },
  checkAuth: () =>
    localStorage.getItem("user") ? Promise.resolve() : Promise.reject(),
  getPermissions: () => {
    const adminData = localStorage.getItem("user");
    if (adminData) {
      const admin = JSON.parse(adminData);
      return Promise.resolve(admin.type);
    } else return Promise.reject();
  },
  getIdentity: () => {
    const persistedUser = localStorage.getItem("user");
    const user = persistedUser ? JSON.parse(persistedUser) : null;

    return Promise.resolve(user);
  },
};

export default authProvider;
