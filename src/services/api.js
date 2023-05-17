import axios from "axios";

export const api = axios.create({
  baseURL: "https://dslist-production-d4e23.up.railway.app/api",
});
