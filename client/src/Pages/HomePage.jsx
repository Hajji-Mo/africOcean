import React, { useState } from "react";
import Navbar from "../Features/HomeFeatures/Navbar";
import Carousel from "react-material-ui-carousel";
import { BannerCarousels } from "../clientUtils/Carousel";
import Banner from "../Features/HomeFeatures/Banner";
import {
  Box,
  Button,
  Container,
  Grid,
  Input,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import ProductCard from "../Features/HomeFeatures/ProductCard";
import { colors } from "../../MaterialTheme";
import {
  useGetAllProductsQuery,
  useGetNewProductsQuery,
  useGetProductsQuery,
  useGetTopProductsQuery,
} from "../State/productsApiSlice";
import Category from "../Features/category/Category";
import ButtonNav from "../Features/HomeFeatures/ButtonNav";
import CategoryButtons from "../Features/category/CategoryButtons";
import {
  getAdressQuery,
  selectAdressQuery,
  selectLang,
  selectSearchQuery,
} from "../State/AppSlice";
import { useDispatch, useSelector } from "react-redux";
import { keywords } from "../clientUtils/lists";
import SpinnerFullPage from "../clientUtils/SpinnerFullPage";
import LocationSearch from "../Features/HomeFeatures/LocationSearch";

function HomePage() {
  const lang = useSelector(selectLang);
  const query = useSelector(selectSearchQuery);
  const adress = useSelector(selectAdressQuery);
  const [countryValue, setCountryValue] = useState("");
  const [cityValue, setCityValue] = useState("");
  const { country, city } = adress;
  const dispatch = useDispatch();
  const { data } = useGetProductsQuery({ lang, query, country, city });
  const { data: topProducts } = useGetTopProductsQuery({ lang, country, city });
  const { data: newProducts } = useGetNewProductsQuery({ lang, country, city });
  const { data: allData } = useGetAllProductsQuery(lang);
  let allCategory, categories, allCountries, countries;
  if (allData) {
    allCategory = allData.doc.map((product) =>
      product[lang]?.category?.toLowerCase().trim()
    );
    categories = allCategory.filter(
      (value, index) => allCategory.indexOf(value) === index
    );

    allCountries = allData.doc.map((product) =>
      product.country?.toLowerCase().trim()
    );
    countries = allCountries.filter(
      (value, index) => allCountries.indexOf(value) === index
    );
  }
  const handleAdress = (e) => {
    e.preventDefault();

    const address = {
      country: countryValue,
      city: cityValue,
    };
    dispatch(getAdressQuery(address));
    setCountryValue("");
    setCityValue("");
  };
  return (
    <>
      <Navbar />
      <Container>
        <Stack
          direction={"row"}
          sx={{
            display: "none",
            "@media screen and (min-width: 768px)": {
              display: "flex",
            },
          }}
        >
          {allData &&
            categories.map((category, index) => (
              <Category
                category={category}
                key={index}
                products={allData.doc}
                lang={lang}
              />
            ))}
        </Stack>
        {allData && (
          <Box sx={{ position: "relative" }}>
            {!country && !city && (
              <LocationSearch
                handleAdress={handleAdress}
                lang={lang}
                countryValue={countryValue}
                setCountryValue={setCountryValue}
                cityValue={cityValue}
                setCityValue={setCityValue}
                products={allData.doc}
                countries={countries}
              />
            )}

            <Carousel animation="slide" indicators={false} duration={300}>
              {BannerCarousels.map((banner, i) => (
                <Banner key={i} banner={banner} />
              ))}
            </Carousel>
          </Box>
        )}
        <CategoryButtons />
      </Container>
      <Box sx={{ bgcolor: colors.Grey100, py: 3, mb: 4 }}>
        <Container>
          {query === "" && (
            <Stack>
              <Typography
                variant="h6"
                sx={{
                  paddingBottom: ".4rem",
                  fontWeight: "bold",
                }}
              >
                {keywords.topProducts[lang]}
              </Typography>
              <Grid container spacing={1}>
                {!topProducts && <SpinnerFullPage />}
                {topProducts &&
                  topProducts.doc.map((product) => (
                    <ProductCard
                      product={product}
                      key={product._id}
                      lang={lang}
                    />
                  ))}
              </Grid>
            </Stack>
          )}
          <Stack>
            <Typography
              variant="h6"
              sx={{
                paddingTop: "1rem",
                paddingBottom: ".4rem",
                fontWeight: "bold",
              }}
            >
              {keywords.forU[lang]}
            </Typography>

            <Grid container spacing={1}>
              {!data && <SpinnerFullPage />}
              {data &&
                data.doc.map((product) => (
                  <ProductCard
                    product={product}
                    key={product._id}
                    lang={lang}
                  />
                ))}
            </Grid>
          </Stack>
        </Container>
      </Box>
      <ButtonNav />
    </>
  );
}

export default HomePage;
