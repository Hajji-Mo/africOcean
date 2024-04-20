"use client";
import React, { useEffect, useState } from "react";
import {
  Box,
  Paper,
  Container,
  Typography,
  Stack,
  Avatar,
  Input,
  Button,
  ListItemButton,
  List,
} from "@mui/material";
// import { BsGlobe2 } from "react-icons/bs";

import { FaSearch } from "react-icons/fa";
import { NavbarList, keywords } from "../../clientUtils/lists";
import Selectlanguage from "./languege";
import { Link } from "react-router-dom";
import { colors } from "../../../MaterialTheme";
import { getSearchQuery, selectLang } from "../../State/AppSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../State/cartSlice";

function Boxes({ text, Icon, count, navigate, link, colorwhite }) {
  return (
    <Link to={`${link}`} style={{ textDecoration: "none" }}>
      <ListItemButton
        sx={{
          display: "flex",
          cursor: "pointer",
          alignItems: "center",
          minWidth: "3rem",
          color: colorwhite ? colors.white : colors.main,
        }}
      >
        <Box component={"div"} sx={{ fontSize: "1.3rem" }}>
          <Box>{Icon}</Box>
        </Box>
        <Typography sx={{ pl: ".3rem", fontSize: "1rem" }}>{text}</Typography>
      </ListItemButton>
    </Link>
  );
}
function Navbar() {
  const [search, setSearchval] = useState("");
  const [navStick, setNavStick] = useState(false);
  const dispatch = useDispatch();
  const lang = useSelector(selectLang);
  const cartItems = useSelector(selectCartItems);
  const length = cartItems.length;

  useEffect(() => {
    window.addEventListener("scroll", navbarScroll);
    return () => {
      window.removeEventListener("scroll", navbarScroll);
    };
  });
  const navbarScroll = () => {
    if (window.scrollY > 100) {
      setNavStick(true);
    } else {
      setNavStick(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getSearchQuery(search));
  };
  const langtext = {
    en: "English",
    fr: "france",
  };
  return (
    <Box>
      <Stack
        sx={{
          bgcolor: colors.main,
          width: "100%",
          height: 35,
          display: "block",
          color: colors.white,
          "@media screen and (max-width:768px)": {
            display: "none",
          },
        }}
      >
        <Container>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            sx={{
              alignItems: "center",
              height: 35,
            }}
          >
            <Typography>we are open 247</Typography>
            <List sx={{ display: "flex", pl: "1.5rem", textAlign: "center" }}>
              <Selectlanguage langtext={langtext} />
              <Boxes
                text={NavbarList.signIn[lang]}
                Icon={NavbarList.signIn.icon}
                link={NavbarList.signIn.link}
                colorwhite
              />

              <Boxes
                text={NavbarList.SignUp[lang]}
                link={NavbarList.SignUp.link}
                colorwhite
              />
            </List>
          </Stack>
        </Container>
      </Stack>
      <Paper
        sx={{
          paddingTop: 2,
          paddingBottom: 2,
        }}
        elevation={1}
        className={navStick ? "nav-wrap nav-sticky" : "nav-wrap"}
      >
        <Container>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            sx={{
              width: "100%",
              height: 50,
              alignItems: "center",
            }}
          >
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <Box className="logo">
                <Box
                  sx={{
                    color: colors.black,
                    display: "flex",
                    height: "2rem",
                    padding: "0.8rem",
                    alignItems: "center",
                    fontSize: {
                      xs: ".7rem",
                    },
                    "&:hover": {
                      bgcolor: colors.Grey100,
                    },
                  }}
                >
                  <Box
                    variant="h4"
                    component={"h1"}
                    fontStyle={"italic"}
                    color={colors.main}
                  >
                    Afric
                  </Box>
                  <Box variant="h4" component={"h1"}>
                    Ocean
                  </Box>
                </Box>
              </Box>
            </Link>
            <Box
              component={"form"}
              sx={{
                width: "40%",
                height: "2.7rem",
                display: " flex",
                justifyContent: "space-between",
                padding: "0",
                paddingLeft: "2rem",
                paddingRight: "0.2rem",
                border: "solid 2px rgba(0 ,0 ,0 , 0.8)",
                borderRadius: "1.5rem",
                textAlign: "center",
                alignItems: "center",
                pl: 3,
                ml: "4rem",
                "@media screen and (max-width: 768px)": {
                  display: "none",
                },
              }}
              onSubmit={handleSubmit}
            >
              <Input
                type="text"
                placeholder={keywords.placehold[lang]}
                sx={{ width: "85%" }}
                value={search}
                disableUnderline={true}
                onChange={(e) => setSearchval(e.target.value.toLowerCase())}
              />
              <Button
                type="submit"
                variant="contained"
                disableElevation
                sx={{
                  borderRadius: 12,
                  textTransform: "capitalize",
                  width: "7rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box sx={{ pr: ".3rem", mt: "0.1rem" }}>
                  <FaSearch />
                </Box>
                <Typography variant="subtitle2" pl={"2px"}>
                  search
                </Typography>
              </Button>
            </Box>
            <Box
              component={"form"}
              sx={{
                display: "none",
                "@media screen and (max-width: 768px)": {
                  display: "flex",
                  justifyContent: "space-between",
                  minWidth: "10rem",
                  width: "60%",
                  background: colors.Grey100,
                  height: "2rem",
                  borderRadius: "1.5rem",
                  textAlign: "center",
                  alignItems: "center",
                  pl: 2,
                },
              }}
              onSubmit={handleSubmit}
            >
              <Box color={colors.main} mt={"3px"}>
                <FaSearch />
              </Box>
              <Input
                type="text"
                placeholder={keywords.placehold[lang]}
                disableUnderline={true}
                sx={{
                  minWidth: "100%",
                  ml: 1,
                  fontSize: ".75rem",
                }}
                value={search}
                onChange={(e) => setSearchval(e.target.value.toLowerCase())}
              />
            </Box>
            <List
              sx={{
                "@media screen and (max-width: 768px)": {
                  display: "none",
                },
                display: "flex",
                pl: "1.5rem",
                textAlign: "center",
                alignItems: "center",
              }}
            >
              <Stack>
                <Box>
                  <Box
                    sx={{
                      position: "relative",
                    }}
                  >
                    <Typography
                      variant="caption"
                      lineHeight={1}
                      sx={{
                        fontSize: "10px",
                        bgcolor: colors.main,
                        p: "3px",
                        color: colors.white,
                        borderRadius: "50%",
                        position: "absolute",
                        top: "-5px",
                        left: "1.3rem",
                      }}
                    >
                      {length}
                    </Typography>
                  </Box>

                  <Boxes
                    text={NavbarList.cart[lang]}
                    Icon={NavbarList.cart.icon}
                    link={NavbarList.cart.link}
                  />
                </Box>
              </Stack>

              <Boxes
                text={NavbarList.Contact[lang]}
                Icon={NavbarList.Contact.icon}
                link={NavbarList.Contact.link}
              />
              <Link
                to={
                  "https://wa.me/260773416630?text=i'm intrested to be Part of AfricOcean Market"
                }
                style={{ textDecoration: "none" }}
              >
                <Boxes text={"Become A Supplier"}></Boxes>
              </Link>
            </List>
          </Stack>
        </Container>
      </Paper>
    </Box>
  );
}

export default Navbar;
