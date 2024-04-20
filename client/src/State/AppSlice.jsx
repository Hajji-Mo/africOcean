import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lang: localStorage.getItem("lang")
    ? JSON.parse(localStorage.getItem("lang"))
    : "en",
  searchQuery: "",
  adressQuery: localStorage.getItem("adress")
    ? JSON.parse(localStorage.getItem("adress"))
    : { country: "", city: "" },
  dashboardContent: "",
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    getSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
    getAdressQuery(state, action) {
      const { country, city } = action.payload;
      state.adressQuery.country = country;
      state.adressQuery.city = city;
      localStorage.setItem("adress", JSON.stringify({ ...action.payload }));
    },
    getDashboardContent(state, action) {
      state.dashboardContent = action.payload;
    },
  },
});

export const { getSearchQuery, getAdressQuery, getDashboardContent } =
  appSlice.actions;
export const selectLang = (state) => state.app.lang;
export const selectSearchQuery = (state) => state.app.searchQuery;
export const selectAdressQuery = (state) => state.app.adressQuery;
export const selectDashboardContent = (state) => state.app.dashboardContent;

export default appSlice.reducer;
