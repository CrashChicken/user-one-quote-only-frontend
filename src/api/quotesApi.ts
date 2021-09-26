import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:3001/" });

interface Register {
  username: string;
  password: string;
<<<<<<< Updated upstream
  name: string;
  surname: string;
=======
  firstName: string;
  lastName: string;
>>>>>>> Stashed changes
}

interface Login {
  username: string;
  password: string;
}

interface Quote {
  quote: string;
}

<<<<<<< Updated upstream
interface Password {
  password: string;
}

interface ReturnLogin {
  access_token: string;
}

export const signup = (user: Register) =>
  api.post("/signup", user).then((res) => res.data);

export const login = (user: Login): Promise<ReturnLogin> =>
  api.post("/login", user).then((res) => res.data);

export const getMe = (token: string) =>
  api
    .get("/me", { headers: { Authorization: `Basic ${token}` } })
    .then((res) => res.data);

export const getMyQuote = (token: string) =>
  api
    .get("/myquote", { headers: { Authorization: `Basic ${token}` } })
    .then((res) => res.data);

export const updateMyQuote = (quote: Quote, token: string) =>
  api
    .post("/myquote", quote, { headers: { Authorization: `Basic ${token}` } })
    .then((res) => res.data);

export const updatePassword = (password: Password, token: string) =>
  api
    .put("/me/update-password", password, {
      headers: { Authorization: `Basic ${token}` },
=======
interface UpdatePassword {
  password: string;
}

interface QuoteRes {
  id: number;
  quote: string;
}

interface GetMeRes {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
}

interface LoginRes {
  access_token: string;
}

export const register = (user: Register) =>
  api.post("/register", user).then((res) => res.data);

export const login = (user: Login): Promise<LoginRes> =>
  api.post("/login", user).then((res) => res.data);

export const getMe = (token: string): Promise<GetMeRes> =>
  api
    .get("/me", { headers: { Authorization: `Bearer ${token}` } })
    .then((res) => res.data);

export const getMyQuote = (token: string): Promise<QuoteRes> =>
  api
    .get("/myquote", { headers: { Authorization: `Bearer ${token}` } })
    .then((res) => res.data);

export const updateMyQuote = (quote: Quote, token: string): Promise<QuoteRes> =>
  api
    .put("/myquote", quote, { headers: { Authorization: `Bearer ${token}` } })
    .then((res) => res.data);

export const updatePassword = (password: UpdatePassword, token: string) =>
  api
    .put("/me/update-password", password, {
      headers: { Authorization: `Bearer ${token}` },
>>>>>>> Stashed changes
    })
    .then((res) => res.data);

export const getUser = (id: number) =>
  api.get(`/user/${id}/`).then((res) => res.data);

export const upvoteUser = (id: number, token: string) =>
  api
<<<<<<< Updated upstream
    .put(`/user/${id}/upvote`, { headers: { Authorization: `Basic ${token}` } })
=======
    .put(`/user/${id}/upvote`, {
      headers: { Authorization: `Bearer ${token}` },
    })
>>>>>>> Stashed changes
    .then((res) => res.data);

export const downvoteUser = (id: number, token: string) =>
  api
    .put(`/user/${id}/downvote`, {
<<<<<<< Updated upstream
      headers: { Authorization: `Basic ${token}` },
=======
      headers: { Authorization: `Bearer ${token}` },
>>>>>>> Stashed changes
    })
    .then((res) => res.data);

export const getList = () => api.get(`/list`).then((res) => res.data);
