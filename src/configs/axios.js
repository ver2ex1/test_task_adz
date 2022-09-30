import axios from "axios";

const { REACT_APP_BASE_URL, REACT_APP_PORT, REACT_APP_PROXY } = process.env;

const BASE_URL = `${REACT_APP_BASE_URL}${
  REACT_APP_PORT ? `:${REACT_APP_PORT}` : ""
}${REACT_APP_PROXY}`;
const instance = axios.create({
  baseURL: `${BASE_URL}`,
  headers: {
    Token: `*token*`,
  },
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers.Token = `${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default instance;
