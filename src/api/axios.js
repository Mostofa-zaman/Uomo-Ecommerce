import axios from "axios";

export const instance = axios.create({
  baseURL: "https://dummyjson.com/",
  timeout: 4000,
  // headers: { "X-Custom-Header": "foobar" },
});
