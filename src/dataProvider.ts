import { fetchUtils } from "react-admin";
import simpleRestProvider from "ra-data-json-server";

interface optionsObject {
  user?: any;
}

const fetchJson = (url: string, options: optionsObject = {}) => {
  options.user = {
    authenticated: true,
    token: localStorage.getItem("token"),
  };
  return fetchUtils.fetchJson(url, options);
};

export const dataProvider = simpleRestProvider(
  import.meta.env.VITE_JSON_SERVER_URL,
  fetchJson
);
