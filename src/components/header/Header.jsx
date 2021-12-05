import React, { Component, useContext, useState } from 'react'
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import AppsRoundedIcon from "@mui/icons-material/AppsRounded";
import { useHistory } from "react-router";
import Logout from '../logout/Logout';
import { searchContext } from '../../context/searchContext';
import css from "./Header.scss";

const drawerWidth = 240;
const state = false;


const Search = styled("div")(({ theme }) => ({
    color: "#5f6368",
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#f1f3f4",
    marginLeft: 20,
    minWidth: "35%",
    [theme.breakpoints.down("sm")]: {
        marginRight: theme.spacing(50),
        marginLeft: theme.spacing(10),
        width: "auto"

    }
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    color: "#5f6368",
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "#5f6368",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 65, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        // [theme.breakpoints.up("md")]: {
        //     width: "20ch"
        // }
    }
}));

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
    }),
    overflowX: "hidden"
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
        width: `calc(${theme.spacing(9)} + 1px)`
    }
});

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
    backgroundColor: "white",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
    }),
    ...(open && {
        marginLeft: drawerWidth,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    })
}));

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme)
    }),
    ...(!open && {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme)
    })
}));

export function Header() {

    const history = useHistory();
    console.log("route to pages called");
    const routeToPages = (index) => {
        if (index == 0) {
            history.push("/dashboard");
        }
        else if (index == 3) {
            history.push("/dashboard/archive");
        }
        else if (index == 4) {
            history.push("/dashboard/trash");
        }
    }

    const [open, setOpen] = React.useState(state);

    const handleDrawerOpen = () => {
        setOpen(!open);
    };

    const [searchword, setSearchWord] = useContext(searchContext);
    return (
        <div>
            <Box sx={{ display: "flex" }}>
                <CssBaseline />
                <AppBar position="fixed" open={open}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                        >
                            <MenuIcon style={{ color: "#5f6368" }} />
                        </IconButton>
                        <LightbulbIcon
                            onClick={() => history.push("/dashboard")}
                            style={{
                                marginLeft: "5px",
                                marginRight: "5px",
                                padding: "5px",
                                backgroundColor: "#F4B400",
                                cursor:"pointer"
                            }}
                        />
                        <Typography
                            onClick={() => history.push("/dashboard")}
                            variant="h6"
                            component="div"
                            style={{ color: "#5f6368", marginRight: "30px", cursor:"pointer" }}
                        >
                            Keep
                        </Typography>
                        <Search style={{ marginLeft: "0px" }} onClick={() => history.push("/dashboard/search")}>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                onChange={(e) => setSearchWord(e.target.value)}
                                inputProps={{ "aria-label": "search" }}
                            />
                        </Search>
                        <IconButton
                            className={css.appsIcon}
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            color="inherit"
                            style={{ marginLeft: "48%" }}
                        >
                            <AppsRoundedIcon style={{ color: "#5f6368" }} />
                        </IconButton>
                        <Logout />
                    </Toolbar>
                </AppBar>
                <Drawer variant="permanent" open={open}>
                    <DrawerHeader></DrawerHeader>
                    <Divider />
                    <List>
                        {["Notes", "Reminders", "Edit labels", "Archive", "Trash"].map(
                            (text, index) => (
                                <ListItem button key={text}>
                                    <ListItemIcon >
                                        {index === 0 ? (
                                            <LightbulbOutlinedIcon onClick={() => routeToPages(index)} />
                                        ) : index === 1 ? (
                                            <NotificationsNoneOutlinedIcon />
                                        ) : index === 2 ? (
                                            <EditOutlinedIcon />
                                        ) : index === 3 ? (
                                            <ArchiveOutlinedIcon onClick={() => routeToPages(index)} />
                                        ) : (
                                            <DeleteOutlineOutlinedIcon onClick={() => routeToPages(index)} />
                                        )}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItem>
                            )
                        )}
                    </List>
                </Drawer>
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <DrawerHeader />
                </Box>
            </Box>
        </div>
    )
}

export default Header
