import axios, { AxiosResponse } from "axios";
import { UserRegisterDTO, TokenPayload } from "@delgram/core";

axios.defaults.baseURL = "http://localhost:5000/api";

const responseBody = (response: AxiosResponse) => response.data;

const sleep = (ms: number) => (response: AxiosResponse) =>
  new Promise<AxiosResponse>((resolve) =>
    setTimeout(() => resolve(response), ms)
  );

const requests = {
  post: (url: string, body: {}) =>
    axios.post(url, body).then(sleep(1000)).then(responseBody),
};

const UserService = {
  register: (user: UserRegisterDTO): Promise<TokenPayload> =>
    requests.post("/register", user),
};

export default {
  UserService,
};
