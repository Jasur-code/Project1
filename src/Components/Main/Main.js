import { Box, Container } from "@mui/material";
import React from "react";
import MainSection1 from "./MainSection1";
import Companies from "./Companies";
import Categories from "./Categories";
import Connection from "./Connection";
import PostJob from "./postJob";
import Customer from "./Customer";
import Jobs from "./Jobs";

export default function MainSec() {
  return (
    <Box>
      <Container sx={{ mt: 10 }}>
        <MainSection1 />
      </Container>
      <Box sx={{ backgroundColor: "#F7F8F9", pt: 4, mt: 3 }}>
        <Container>
        <Jobs/>
          <Companies />
          <Categories />
        </Container>
        <Connection />
        <PostJob />
        <Customer/>
      </Box>
    </Box>
  );
}
