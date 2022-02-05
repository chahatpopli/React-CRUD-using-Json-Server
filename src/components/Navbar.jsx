import React from "react";
import {
    AppBar,
    Toolbar,
    Box,
    makeStyles,
    Typography
} from "@material-ui/core";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles({
    component: {
        backgroundColor: "#FBF8F1",
        height: "auto"
    },
    headerBar: {
        backgroundColor: "#B33030",
        height: 60,
        position: "static"
    },
    tabs: {
        color: "#FFFFFF",
        textDecoration: "none",
        marginRight: 20,
        fontSize: 20
    }
});

const Navbar = () => {
    const classname = useStyles();
    return ( <
        Box className = { classname.component } >

        <
        AppBar position = "static"
        className = { classname.headerBar } >
        <
        Toolbar > <
        NavLink to = "./"
        className = { classname.tabs } > Home < /NavLink> <
        NavLink to = "all"
        className = { classname.tabs } > All Users < /NavLink> <
        NavLink to = "add"
        className = { classname.tabs } > Add User < /NavLink>


        <
        /Toolbar > < /
        AppBar > < /
        Box >
    );
};

export default Navbar;