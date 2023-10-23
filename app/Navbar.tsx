import React, { useState } from "react";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import DrawerComp from "./Drawer";
import Link from "next/link";

const Navbar = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <React.Fragment>
      <AppBar sx={{ backgroundColor: "white", color: "black" }}>
        <Toolbar>
          <BeachAccessIcon sx={{ transform: "scale(2)" }} />
          <Typography sx={{ marginLeft: "20px" }} color="inherit">
            Snap
          </Typography>
          {isMatch ? (
            <>
              <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}>
                Shoppee
              </Typography>
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "auto" }}
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <Link href="/users" passHref>
                  <Tab label="Features" />
                </Link>
                <Tab label="Company" />
                <Tab label="Careers" />
                <Link href="/about" passHref>
                  <Tab label="About" />
                </Link>
              </Tabs>
             
              <Button sx={{ marginLeft: "10px" }} variant="contained">
                SignUp
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Navbar;
