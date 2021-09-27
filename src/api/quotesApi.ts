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

export interface QuoteRes {
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

interface VoteCheckRes {
  userId: number;
  vote: number;
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

export const postMyQuote = (quote: Quote, token: string): Promise<MyQuoteRes> =>
  api
    .post("/myquote", quote, {
      headers: { Authorization: `Bearer ${token}` },
    })
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

export const getUser = (id: number) =>
  api.get(`/user/${id}/`).then((res) => res.data);

export const upvoteUser = (id: number, token: string): Promise<QuoteRes> =>
  api
    .put(
      `/user/${id}/upvote`,
      {},
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
    .then((res) => res.data);

export const downvoteUser = (id: number, token: string): Promise<QuoteRes> =>
  api
    .put(
      `/user/${id}/downvote`,
      {},
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
    .then((res) => res.data);

export const deleteVote = (id: number, token: string): Promise<QuoteRes> =>
  api
    .delete(`/user/${id}/vote`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => res.data);

export const voteCheck = (id: number, token: string): Promise<VoteCheckRes> =>
  api
    .get(`/user/${id}/vote`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => res.data);

export const getList = (): Promise<QuoteRes[]> =>
  api.get(`/list`).then((res) => res.data);
