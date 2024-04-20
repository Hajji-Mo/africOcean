import React, { useState } from "react";
import {
  Alert,
  Box,
  Button,
  Card,
  CardMedia,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import { colors } from "@mui/material";

import { buttons, keywords } from "../../clientUtils/lists";
import { Link } from "react-router-dom";
const S3_BUCKET_NAME = import.meta.env.VITE_S3_BUCKET_NAME;
const AWS_REGION = import.meta.env.VITE_AWS_REGION;
function PrdocutContent({
  subcategory,
  name,
  description,
  price,
  country,
  city,
  summary,
  coverImage,
  images,
  id,
}) {
  const lang = "en";
  const [coverImg, setCoverImg] = useState(coverImage);
  const [alert, setAlert] = useState({
    visible: false,
    color: "",
    message: "",
  });

  function handleCart() {
    addToCart(id);
    setAlert({
      ...alert,
      visible: true,
      color: "success",
      message: "The product is successfully added into your Cart",
    });
    setTimeout(() => {
      setAlert({ ...alert, visible: false });
    }, 3000);
  }

  return (
    <Container>
      <Box mt={3}>
        <Typography
          variant="h5"
          component={"h5"}
          sx={{ textTransform: "capitalize" }}
        >
          {subcategory && subcategory} | {name && name}{" "}
        </Typography>
      </Box>
      {alert.visible && (
        <Alert
          variant="filled"
          severity={alert.color}
          sx={{ position: "absolute" }}
        >
          {alert.message}
        </Alert>
      )}
      <Stack
        sx={{
          mt: 3,
          display: "block",
          "@media screen and (min-width: 768px)": {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          },
        }}
      >
        <Box>
          <Card
            sx={{
              width: "100%",
              "@media screen and (min-width: 768px)": {
                height: "70vh",
              },
            }}
          >
            <CardMedia
              component="img"
              image={`https://${S3_BUCKET_NAME}.s3.${AWS_REGION}.amazonaws.com/${coverImg}`}
              alt="green iguana"
              sx={{
                width: "100%",
                height: "100%",
                transition: "width .4s",
                "&:hover": {
                  width: "103%",
                },
              }}
            />
          </Card>
          <Stack
            direction={"row"}
            sx={{
              overflowX: "auto",
            }}
          >
            {images.map((image, index) => (
              <ImgCard image={image} key={index} setCoverImg={setCoverImg} />
            ))}
          </Stack>
        </Box>
        <Paper
          sx={{
            px: 3,
            pt: 5,
            border: ".5px solid rgba(0, 0, 0, 0.1)",
            "@media screen and (max-width: 768px)": {
              mt: 3,
            },
          }}
          elevation={0}
        >
          <Stack>
            <Typography variant="h5" fontWeight={"bold"}>
              ${price}
            </Typography>
          </Stack>
          {summary &&
            summary
              .split(/\s+(?=\w+:)/)
              .map((address, index) => (
                <Typography key={index}>
                  {address
                    .split(/(?=:)/)
                    .map((x, i) => (i === 0 ? <b key={i}>{x}</b> : x))}{" "}
                </Typography>
              ))}
          <Box>
            <Typography variant="h5">{keywords.location[lang]}:</Typography>
            <Stack direction={"row"}>
              {country && (
                <Typography variant="h6">
                  {keywords.country[lang]}:{" "}
                  <Typography component={"span"}>{country}</Typography>
                </Typography>
              )}
              {city && (
                <Typography variant="h6" sx={{ pl: "1.3rem" }}>
                  {keywords.city[lang]}:{" "}
                  <Typography component={"span"}>{city}</Typography>
                </Typography>
              )}
            </Stack>
          </Box>
          <Stack direction={"row"}>
            <Button
              variant="contained"
              className="buttonGroups btnConained"
              onClick={handleCart}
            >
              {buttons.addtocart[lang]}
            </Button>

            <Link
              to={`https://wa.me/260773416630?text=i'm intrested to buy ${name} https://${S3_BUCKET_NAME}.s3.${AWS_REGION}.amazonaws.com/${coverImg}`}
              style={{ textDecoration: "none" }}
            >
              <Button variant="outlined" className="buttonGroups btnOutlined">
                {buttons.order[lang]}
              </Button>
            </Link>
            <Link
              to={`https://wa.me/260773416630?text=i'm intrested to by${name} https://${S3_BUCKET_NAME}.s3.${AWS_REGION}.amazonaws.com/${coverImg}`}
              style={{ textDecoration: "none" }}
            >
              <Button variant="contained" className="buttonGroups btnConained">
                {buttons.chat[lang]}
              </Button>
            </Link>
          </Stack>
        </Paper>
      </Stack>
      <Paper sx={{ mt: 3, py: 2, pl: 1 }} elevation={0}>
        <Typography sx={{ pb: 2 }} variant="h4">
          {keywords.atributes[lang]}
        </Typography>
        {description &&
          description
            .split(/\s+(?=\w+:)/)
            .map((address, index) => (
              <Typography key={index}>
                {address
                  .split(/(?=:)/)
                  .map((x, i) => (i === 0 ? <b key={i}>{x}</b> : x))}{" "}
              </Typography>
            ))}
      </Paper>
    </Container>
  );
}
function ImgCard({ image, setCoverImg }) {
  return (
    <Stack
      mt={"1rem"}
      sx={{
        "&:not(:first-Child)": {
          marginLeft: ".5rem",
        },
      }}
    >
      <Card
        sx={{
          width: "5rem",
          height: "5rem",
          transition: "width .4s",
          "&:hover": {
            border: "1px solid #000",
          },
        }}
        onClick={() => setCoverImg(image)}
      >
        <CardMedia
          component="img"
          image={`https://${S3_BUCKET_NAME}.s3.${AWS_REGION}.amazonaws.com/${image}`}
          alt="green iguana"
          sx={{
            width: "100%",
            height: "100%",
            transition: "width .4s",
            "&:hover": {
              width: "95 %",
            },
          }}
        />
      </Card>
    </Stack>
  );
}
export default PrdocutContent;
