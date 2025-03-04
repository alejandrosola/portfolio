"use client";

import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import CodeIcon from "@mui/icons-material/Code";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import { useRouter } from "next/navigation";
import Text from "./Text";
import {
  AppBar,
  IconButton,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "./Button";
import { useTranslations } from "next-intl";

export default function NavBar({ drawerWidth }: { drawerWidth: number }) {
  const [isMounted, setIsMounted] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const router = useRouter();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const t = useTranslations("sections");

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const items = [
    {
      name: t("experience"),
      icon: <WorkIcon />,
      handleClick: () => scrollTo("experience"),
    },
    {
      name: t("education"),
      icon: <SchoolIcon />,
      handleClick: () => scrollTo("education"),
    },
    {
      name: t("technologies"),
      icon: <CodeIcon />,
      handleClick: () => scrollTo("technologies"),
    },
    {
      name: t("contact"),
      icon: <AccountBoxIcon />,
      handleClick: () => scrollTo("contact"),
    },
    {
      name: "LinkedIn",
      icon: <LinkedInIcon />,
      handleClick: () =>
        openLink("https://www.linkedin.com/in/alejandro-sol%C3%A1-70ba20277/"),
    },
    {
      name: "Github",
      icon: <GitHubIcon />,
      handleClick: () => openLink("https://github.com/alejandrosola"),
    },
  ];

  function openLink(link: string): any {
    window.open(link, "_blank");
  }

  function redirectTo(path: string): any {
    router.push(path);
    setDrawerOpen(false);
  }

  function scrollTo(section: string): any {
    if (section == "") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    const pageSection = document.getElementById(section);
    if (pageSection) pageSection.scrollIntoView({ behavior: "smooth" });
    setDrawerOpen(false);
  }

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const desktopNavBar = (
    <Box>
      <CssBaseline />
      <Drawer
        open={drawerOpen}
        variant={isMobile ? "temporary" : "permanent"}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: "block", sm: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        <Box
          sx={{
            overflow: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          className="main_navbar light-text"
        >
          <div>
            <img
              style={{ marginTop: isMobile ? "35%" : "15%" }}
              onClick={() => scrollTo("")}
              className="profile-img"
              src="/profile.png"
              alt="Profile picture"
            />
          </div>
          <List>
            {items.map((item, _index) => (
              <ListItem key={item.name} disablePadding>
                <ListItemButton onClick={item.handleClick}>
                  <ListItemIcon className="light-text">
                    {item.icon}
                  </ListItemIcon>
                  <Text variant="body1" color="secondary">
                    {" "}
                    {item.name}{" "}
                  </Text>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );

  const mobileNavBar = (
    <>
      <AppBar
        className="mobile_navbar light-text"
        position="relative"
        sx={{ zIndex: theme.zIndex.drawer + 1 }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <Text variant="h6" color="secondary">
              <Button onClick={() => redirectTo("/")} variant="text">
                Alejandro Solá
              </Button>
            </Text>
          </Box>
        </Toolbar>
      </AppBar>
      {desktopNavBar}
    </>
  );

  return <Box>{isMobile ? mobileNavBar : desktopNavBar}</Box>;
}
