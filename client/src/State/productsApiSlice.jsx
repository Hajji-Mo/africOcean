import { api } from "./api";

export const productApiSlice = api.injectEndpoints({
  endpoints: (build) => ({
    getAllProducts: build.query({
      query: (lang) => `api/v1/products?lang=${lang}`,
      providesTags: ["products"],
    }),
    getPendingProducts: build.query({
      query: (lang) => `api/v1/products/pendingProducts?lang=${lang}`,
      providesTags: ["products"],
    }),
    getTopProducts: build.query({
      query: ({ lang, country, city }) =>
        `api/v1/products/topProducts?lang=${lang}&country=${country}&city=${city}`,
      providesTags: ["products"],
    }),
    getNewProducts: build.query({
      query: ({ lang, country, city }) =>
        `api/v1/products/newProducts?lang=${lang}&country=${country}&city=${city}`,
      providesTags: ["products"],
    }),
    getProducts: build.query({
      query: ({ lang, query, country, city }) =>
        `api/v1/products/search?search=${query}&lang=${lang}&country=${country}&city=${city}`,
      providesTags: ["products"],
    }),
    getOneProduct: build.query({
      query: ({ id, lang }) => `api/v1/products/${id}?lang=${lang}`,
      providesTags: ["products"],
    }),
    uploadImages: build.mutation({
      query: (formFiles) => ({
        url: "api/v1/products/uploadImages",
        method: "POST",
        body: formFiles,
        formData: true,
      }),
    }),
    updateProdcut: build.mutation({
      query: ({ id, ...activeStatus }) => ({
        url: `api/v1/products/${id}`,
        method: "PATCH",
        body: activeStatus,
      }),
    }),
    createProduct: build.mutation({
      query: (data) => ({
        url: "api/v1/products",
        method: "POST",
        body: data,
        formData: true,
      }),
    }),
  }),
});
// updateOne;
export const {
  useGetNewProductsQuery,
  useGetTopProductsQuery,
  useGetPendingProductsQuery,
  useGetAllProductsQuery,
  useGetProductsQuery,
  useGetOneProductQuery,
  useCreateProductMutation,
  useUploadImagesMutation,
  useUpdateProdcutMutation,
} = productApiSlice;
