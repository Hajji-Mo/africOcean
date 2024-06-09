import React, { useEffect, useState } from "react";

// import { useGetOneProductQuery } from "../State/api";
import { useParams } from "react-router-dom";
import Navbar from "../Features/HomeFeatures/Navbar";

import {
  Box,
  Button,
  Card,
  CardMedia,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { colors } from "../../MaterialTheme";
import {
  useGetAllProductsQuery,
  useGetOneProductQuery,
} from "../State/productsApiSlice";

import { selectCurrentUser } from "../State/AuthSlice";
import { useSelector } from "react-redux";
import { connectSocket, socket } from "../State/socetApi";
import PrdocutContent from "../Features/DetailFeatures/PrdocutContent";
import { keywords } from "../clientUtils/lists";
import ProductCard from "../Features/HomeFeatures/ProductCard";
import { selectLang } from "../State/AppSlice";

function ProductDetail() {
  const lang = useSelector(selectLang);
  const user = useSelector(selectCurrentUser);
  const { id } = useParams();
  const pram = { id, lang };
  const { data, isLoading } = useGetOneProductQuery(pram);

  const { data: recomendData } = useGetAllProductsQuery(lang);
  let recomendedproduct;
  if (recomendData && data) {
    recomendedproduct = recomendData.doc.filter(
      (product) => product[lang]?.subcategory === data.doc[lang]?.subcategory
    );
  }
  return (
    <Stack>
      <Navbar />
      {data && (
        <PrdocutContent
          subcategory={data.doc[lang].subcategory}
          name={data.doc.name}
          price={data.doc.price}
          coverImage={data.doc.coverImg}
          description={data.doc[lang].description}
          summary={data.doc[lang].summary}
          images={data.doc.images}
        />
      )}
      <Container>
        <Stack sx={{ marginTop: "2rem" }}>
          {lang && (
            <Typography
              variant="h5"
              fontWeight={"bold"}
              sx={{ paddingBottom: "0.7rem" }}
            >
              {keywords.recomendation[lang]}
            </Typography>
          )}

          <Grid container spacing={1}>
            {recomendedproduct &&
              recomendedproduct.map((product) => (
                <ProductCard product={product} key={product._id} lang={lang} />
              ))}
          </Grid>
        </Stack>
      </Container>
    </Stack>
  );
}

export default ProductDetail;
