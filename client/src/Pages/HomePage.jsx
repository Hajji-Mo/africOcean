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
  let allCategory, categories;
  if (allData) {
    allCategory = allData.doc.map((product) =>
      product[lang]?.category?.toLowerCase().trim()
    );
    categories = allCategory.filter(
      (value, index) => allCategory.indexOf(value) === index
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
        <Box sx={{ position: "relative" }}>
          {!country && !city && (
            <Paper
              component={"form"}
              sx={{
                width: "20rem",
                position: "fixed",
                top: 200,
                left: 25,
                zIndex: 1000,
                paddingLeft: "2rem",
                paddingRight: "2rem",
                paddingTop: "1rem",
                color: "#fff",
                backgroundColor: colors.Brown,
                "@media screen and (min-width:768px)": {
                  left: 300,
                  top: 150,
                },
              }}
              onSubmit={handleAdress}
            >
              <Typography sx={{ letterSpacing: 0, paddingBottom: "0.5rem" }}>
                {keywords.adressLocation[lang]}
              </Typography>
              <Stack direction={"row"}>
                <Input
                  name="country"
                  varient="outlined"
                  fullWidth
                  placeholder="Country"
                  value={countryValue}
                  sx={{
                    backgroundColor: "#fff",
                    height: "2.5rem",
                    borderRadius: ".3rem",
                    paddingLeft: ".5rem",
                  }}
                  onChange={(e) => setCountryValue(e.target.value)}
                />
                <Input
                  name="city"
                  varient="outlined"
                  fullWidth
                  placeholder="City"
                  value={cityValue}
                  sx={{
                    backgroundColor: "#fff",
                    height: "2.5rem",
                    borderRadius: ".3rem",
                    paddingLeft: ".5rem",
                    marginLeft: "1rem",
                  }}
                  onChange={(e) => setCityValue(e.target.value)}
                />
              </Stack>

              <Stack direction={"row"} justifyContent={"flex-end"} my={1}>
                <Button variant="contained" type="submit">
                  Submit
                </Button>
              </Stack>
            </Paper>
          )}

          <Carousel animation="slide" indicators={false} duration={300}>
            {BannerCarousels.map((banner, i) => (
              <Banner key={i} banner={banner} />
            ))}
          </Carousel>
        </Box>
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
