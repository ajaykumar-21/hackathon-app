import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import navLogo from "../assets/logo.svg";

function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#FFFFFF", boxShadow: "none" }}
      >
        <Toolbar variant="dense">
          <img
            src={navLogo}
            alt="Logo"
            style={{ marginLeft: "50px", height: "34px" }}
          />{" "}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
