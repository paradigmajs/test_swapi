import Axios from "axios";
import { API_URL } from "./constants";

export const api = Axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const Get = async (key, fn = () => {}, fail = () => {}) => {
  try {
    const route = typeof key === "string" ? key : key.join("");
    const { data, status } = await api.get(route);
    if (status < 300) {
      fn(data);
      return data;
    }
  } catch (err) {
    fail(err);
    return null;
  }
};
