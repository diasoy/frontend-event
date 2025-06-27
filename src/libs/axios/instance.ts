import environment from "@/config/environment";
import { SessionExtended } from "@/types/Auth";
import axios from "axios";
import { getSession } from "next-auth/react";
import { onErrorHander } from "./reponseHandler";

const headers = {
  "Content-Type": "application/json",
};

const instance = axios.create({
  baseURL: environment.API_URL,
  headers,
  timeout: 60 * 1000,
});

instance.interceptors.request.use(
  async (request) => {
    const session: SessionExtended | null = await getSession();
    if (session && session.accessToken) {
      request.headers.Authorization = `Bearer ${session.accessToken}`;
    }
    return request;
  },
  (error) => Promise.reject(error),
);

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Only handle token expiration, don't handle other errors automatically
    const { response } = error;
    if (response?.status === 401 && response?.data?.data?.name === "TokenExpiredError") {
      onErrorHander(error);
    }
    return Promise.reject(error);
  },
);

export default instance;
