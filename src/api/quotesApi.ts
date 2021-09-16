import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:3001/" });

interface Register {
  username: string;
  password: string;
  name: string;
  surname: string;
}

interface Login {
  username: string;
  password: string;
}

interface Quote {
  quote: string;
}

interface Password {
  password: string;
}

export const signup = (user: Register) =>
  api.post("/signup", user).then((res) => res.data);

export const login = (user: Login) =>
  api.post("/login", user).then((res) => res.data);

export const getMe = () => api.get("/me").then((res) => res.data);

export const getMyQuote = () => api.get("/myquote").then((res) => res.data);

export const updateMyQuote = (quote: Quote) =>
  api.post("/myquote", quote).then((res) => res.data);

export const updatePassword = (password: Password) =>
  api.put("/me/update-password", password).then((res) => res.data);

export const getUser = (id: number) =>
  api.get(`/user/${id}/`).then((res) => res.data);

export const upvoteUser = (id: number) =>
  api.put(`/user/${id}/upvote`).then((res) => res.data);

export const downvoteUser = (id: number) =>
  api.put(`/user/${id}/downvote`).then((res) => res.data);

export const getList = () => api.get(`/list`).then((res) => res.data);
