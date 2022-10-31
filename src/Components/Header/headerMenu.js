import { Language, Search } from "@mui/icons-material";
import {
  Tab,
  Tabs,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Button,
  useTheme,
  useMediaQuery,
  Container,
} from "@mui/material";
import React, { useState } from "react";
import DrawerComp from "../../Select/Drawer/Drawer";

export default function HeaderMenu() {
  // Pages
  const PAGES = ["Home", "Components", "Pages", "Documentation"];
  //  Tabs Value Code
  const [value, setValue] = useState();

  //   Responsive Menu
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <React.Fragment>
       <Container>
       <Toolbar sx={{color:"white"}}>
          <Typography variant="h5" component={"span"}>
            Zone
          </Typography>
          {isMatch ? (
            <>
            
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                textColor="light"
                value={value}
                indicatorColor="secondary"
                onChange={(e, value) => setValue(value)}
              >
                {PAGES.map((page, i) => (
                  <Tab key={i} sx={{ padding: "0px" }} label={page} />
                ))}
              </Tabs>

              <Box sx={{ marginLeft: "auto" }}>
                <IconButton sx={{ ml: 3, color: "white" }}>
                  <Search />
                </IconButton>
                <IconButton sx={{ mr: 2, color: "white" }}>
                  <Language />
                </IconButton>
                <Button
                  variant="outlined"
                  sx={{ border: "1px solid white", color: "white" }}
                >
                  Join Us
                </Button>
                <Button sx={{ ml: 2 }} variant="contained" color="warning">
                  Login
                </Button>
              </Box>
            </>
          )}
        </Toolbar>
       </Container>
    </React.Fragment>
  );
}
