import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SERVER_URL } from "../utils/consfig";

const BASE_URL = SERVER_URL;

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});
export const api = createApi({
  baseQuery,
  tagTypes: ["User", "products"],
  endpoints: (build) => ({}),
});
