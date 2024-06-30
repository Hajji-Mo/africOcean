import React from "react";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";

import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { colors, theme } from "../../MaterialTheme";
import { AiOutlineUpload } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import { CgChevronRight, CgProfile } from "react-icons/cg";
import { AiOutlineHome } from "react-icons/ai";
import { MdProductionQuantityLimits } from "react-icons/md";
import { IoPeopleOutline } from "react-icons/io5";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import Selectlanguage from "./HomeFeatures/languege";

import SideBarItems from "./SideBarItems";

const navItems = [
  {
    text: "Dashboard",
    icon: <AiOutlineHome />,
  },
  {
    text: "Profile",
    icon: <CgProfile />,
  },
  {
    text: " Upload Product",
    icon: <AiOutlineUpload />,
  },

  {
    text: "Customers",
    icon: <IoPeopleOutline />,
  },
  {
    text: "Products",
    icon: <MdProductionQuantityLimits />,
  },

  {
    text: "Management",
    icon: <MdOutlineAdminPanelSettings />,
  },
];

const Sidebar = ({ setIsSidebarOpen }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const langtext = {
    en: "English",
    fr: "france",
  };

  return (
    <>
      <Box>
        <Box
          p="2rem 0 2rem 3rem"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <Box className="logo" onClick={() => navigate("/Home")}>
            <Box
              sx={{
                display: "flex",
                fontSize: {
                  xs: ".7rem",
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

          <IconButton onClick={() => setIsSidebarOpen(false)}>
            <IoIosArrowForward />
          </IconButton>
        </Box>
        <Box width={"80%"}>
          <List>
            {navItems.map((navItem) => (
              <SideBarItems
                navItem={navItem}
                key={navItem.text}
                setIsSidebarOpen={setIsSidebarOpen}
              />
            ))}

            <ListItem sx={{ marginLeft: "2rem" }}>
              <Typography>Select language:</Typography>
              <Box sx={{ marginLeft: ".5rem" }}>
                <Selectlanguage langtext={langtext} mobile />
              </Box>
            </ListItem>
          </List>
        </Box>
      </Box>
    </>
  );
};

export default Sidebar;
