import {
  Box,
  Container,
  List,
  ListItem,
  ListItemButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { MdLanguage } from "react-icons/md";
import { colors } from "../../../MaterialTheme";
import { ButtomNavList, setting } from "../../clientUtils/lists";
import Selectlanguage from "./languege";
import { Link, useNavigate } from "react-router-dom";
import { selectCartItems } from "../../State/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { getAdressQuery, selectLang } from "../../State/AppSlice";
import { selectCurrentUser } from "../../State/AuthSlice";

function Boxes({ text, Icon, navigate, link, index, cartLenght, length }) {
  const [active, setactive] = useState(0);

  return (
    <Link to={`${link}`} style={{ textDecoration: "none" }}>
      <Stack
        sx={{
          cursor: "pointer",
          alignItems: "center",
          minWidth: "3rem",

          color: active === index ? colors.main : colors.black,
        }}
      >
        <Box component={"div"} sx={{ fontSize: "1.3rem" }}>
          {cartLenght ? (
            <Box
              sx={{
                fontSize: "9px",
                background: colors.main,
                borderRadius: "70%",
                color: "#fff",
                marginLeft: "4px",
                textAlign: "center",
              }}
            >
              {length}
            </Box>
          ) : (
            ""
          )}
          <Box>{Icon}</Box>
        </Box>
        <Typography sx={{ pl: ".3rem", fontSize: "1rem" }}>{text}</Typography>:
      </Stack>
    </Link>
  );
}

const ButtonNav = () => {
  const [showSitting, setShowSitting] = useState(false);
  const cartItems = useSelector(selectCartItems);
  const lang = useSelector(selectLang);
  const user = useSelector(selectCurrentUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const length = cartItems.length;
  const langtext = {
    en: "En",
    fr: "Fr",
  };
  const handleProfile = () => {
    if ((user && user.role === "manager") || (user && user.role === "admin")) {
      navigate("/Dashboard");
    } else {
      navigate("/SignIn");
    }
  };

  const handleLocation = () => {
    localStorage.removeItem("adress");
    const adress = {
      country: "",
      city: "",
    };
    dispatch(getAdressQuery(adress));
  };
  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
        height: "4rem",
        display: "block",
        "@media screen and (min-width: 768px)": {
          display: "none",
        },
      }}
    >
      <Container sx={{ position: "relative" }}>
        <List sx={{ display: "flex", justifyContent: "space-between" }}>
          {ButtomNavList &&
            ButtomNavList.map((list, index) => (
              <Boxes
                key={index}
                text={list[lang]}
                link={list.link}
                Icon={list.icon}
                index={index}
                cartLenght={list.cartLenght}
                length={length}
              />
            ))}
          <Stack>
            <Box
              component={"div"}
              sx={{ fontSize: "1.3rem", cursor: "pointer" }}
              onClick={() => setShowSitting((showSitting) => !showSitting)}
            >
              <Box sx={{ pl: "1rem" }}>{setting.settings.icon}</Box>
              <Typography sx={{ fontSize: "1rem", pr: "1rem" }}>
                {setting.settings[lang]}
              </Typography>
            </Box>
            {showSitting && (
              <Paper
                sx={{
                  position: "absolute",
                  top: -100,
                  right: 2,
                  height: "6rem",
                  width: "5.8rem",
                  padding: "0.7rem",
                  bgcolor: colors.main,
                }}
              >
                <Stack width={".2rem"}>
                  <Stack direction={"row"}>
                    <Stack
                      direction={"row"}
                      sx={{
                        pr: ".4rem",
                        fontSize: "1.3rem",
                        alignItems: "center",
                        color: "white",
                      }}
                    >
                      <MdLanguage />:
                    </Stack>
                    <Selectlanguage langtext={langtext} mobile />
                  </Stack>
                  <Stack
                    direction={"row"}
                    component={"div"}
                    sx={{
                      fontSize: "1.3rem",
                      cursor: "pointer",
                      color: "white",
                      alignItems: "center",
                    }}
                    onClick={handleProfile}
                  >
                    <Box>{setting.acount.icon}</Box>
                    <Typography
                      sx={{ fontSize: "1rem", pl: "0.3rem", lineHeight: 1 }}
                    >
                      {setting.acount[lang]}
                    </Typography>
                  </Stack>
                  <Stack
                    direction={"row"}
                    component={"div"}
                    sx={{
                      fontSize: "1.3rem",
                      cursor: "pointer",
                      color: "white",
                      paddingTop: ".3rem",
                      alignItems: "center",
                    }}
                    onClick={handleLocation}
                  >
                    <Box>{setting.acount.icon}</Box>
                    <Typography
                      sx={{ fontSize: "1rem", pl: "0.3rem", lineHeight: 1 }}
                    >
                      location
                    </Typography>
                  </Stack>
                </Stack>
              </Paper>
            )}
          </Stack>
        </List>
      </Container>
    </Paper>
  );
};

export default ButtonNav;
