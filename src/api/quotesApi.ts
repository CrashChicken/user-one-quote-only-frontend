import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:3001/" });

interface Register {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
}

interface Login {
  username: string;
  password: string;
}

interface Quote {
  quote: string;
}

interface UpdatePassword {
  password: string;
}

interface MyQuoteRes {
  id: number;
  quote: string;
}

interface UserRes {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
}

interface QuoteRes {
  id: number;
  quote: string;
  karma: number;
  user: UserRes;
}

interface GetUserRes {
  quote: QuoteRes;
  votes: [QuoteRes];
}

interface LoginRes {
  access_token: string;
}

export const register = (user: Register) =>
  api.post("/register", user).then((res) => res.data);

export const login = (user: Login): Promise<LoginRes> =>
  api.post("/login", user).then((res) => res.data);

export const getMe = (token: string): Promise<UserRes> =>
  api
    .get("/me", { headers: { Authorization: `Bearer ${token}` } })
    .then((res) => res.data);

export const getMyQuote = (token: string): Promise<MyQuoteRes> =>
  api
    .get("/myquote", { headers: { Authorization: `Bearer ${token}` } })
    .then((res) => res.data);

export const updateMyQuote = (
  quote: Quote,
  token: string
): Promise<MyQuoteRes> =>
  api
    .put("/myquote", quote, { headers: { Authorization: `Bearer ${token}` } })
    .then((res) => res.data);

export const updatePassword = (password: UpdatePassword, token: string) =>
  api
    .put("/me/update-password", password, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => res.data);

export const getUser = (id: number): Promise<GetUserRes> =>
  api.get(`/user/${id}/`).then((res) => res.data);

export const upvoteUser = (id: number, token: string) =>
  api
    .put(`/user/${id}/upvote`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => res.data);

export const downvoteUser = (id: number, token: string) =>
  api
    .put(`/user/${id}/downvote`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => res.data);

export const getList = () => api.get(`/list`).then((res) => res.data);
