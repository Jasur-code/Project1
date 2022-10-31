import { Language, Menu, Search } from "@mui/icons-material";
import {
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

export default function DrawerComp() {
  // Pages
  const PAGES = ["Home", "Components", "Pages", "Documentation"];
  //   Open Drawer
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <React.Fragment>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List sx={{ width: "240px", p: 2 }}>
          <Typography
            sx={{ ml: 2, fontWeight: "bold" }}
            variant="h5"
            component={"span"}
          >
            Zone
          </Typography>
          {PAGES.map((page, i) => (
            <ListItemButton key={i} onClick={() => setOpenDrawer(false)}>
              <ListItemIcon>
                <ListItemText key={i}>{page}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
          <Button
            fullWidth
            variant="outlined"
            sx={{ border: "1px solid gray", color: "blue" }}
          >
            Join Us
          </Button>
          <Button sx={{ mt: 2 }} fullWidth variant="contained" color="warning">
            Login
          </Button>
        </List>
      </Drawer>
      <Box sx={{ marginLeft: "auto" }}>
        <IconButton sx={{ ml: 3, color: "white" }}>
          <Search />
        </IconButton>
        <IconButton sx={{ mr: 2, color: "white" }}>
          <Language />
        </IconButton>
        <IconButton
          sx={{ color: "white" }}
          onClick={() => setOpenDrawer(!openDrawer)}
        >
          <Menu />
        </IconButton>
      </Box>
    </React.Fragment>
  );
}
