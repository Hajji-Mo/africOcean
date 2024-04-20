import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { CgChevronRight } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { theme } from "../../MaterialTheme";
import { getDashboardContent } from "../State/AppSlice";
const SideBarItems = ({ navItem, setIsSidebarOpen }) => {
  const [active, setActive] = useState("");
  const dispatch = useDispatch();
  const { text, icon } = navItem;
  const lcText = text.toLowerCase().trim();
  const handleClick = () => {
    dispatch(getDashboardContent(lcText));
    setIsSidebarOpen(false);
  };

  return (
    <>
      {!icon && (
        <Typography key={text} sx={{}}>
          {text}
        </Typography>
      )}

      <ListItem key={text} disablePadding>
        <ListItemButton
          onClick={handleClick}
          sx={{
            backgroundColor:
              active === lcText ? theme.palette.secondary[300] : "transparent",
            color:
              active === lcText
                ? theme.palette.primary[600]
                : theme.palette.secondary[100],
          }}
        >
          <ListItemIcon
            sx={{
              ml: "2rem",
              fontSize: "1.5rem",
              color:
                active === lcText
                  ? theme.palette.primary[600]
                  : theme.palette.secondary[200],
            }}
          >
            {icon}
          </ListItemIcon>
          <ListItemText primary={text} />
          {active === lcText && <CgChevronRight sx={{ ml: "auto" }} />}
        </ListItemButton>
      </ListItem>
    </>
  );
};

export default SideBarItems;
