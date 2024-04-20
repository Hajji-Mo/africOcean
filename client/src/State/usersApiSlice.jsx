import { api } from "./api";

export const productApiSlice = api.injectEndpoints({
  endpoints: (build) => ({
    getAllUsers: build.query({
      query: () => "api/v1/users",
      providesTags: ["users"],
    }),
    getOneUser: build.query({
      query: ({ id }) => `api/v1/products/${id}`,
      providesTags: ["users"],
    }),
  }),
});

export const { useGetAllUsersQuery } = productApiSlice;
