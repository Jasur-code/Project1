import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import TextSnippetIcon from '@mui/icons-material/TextSnippet';

export default function PostJob() {
  return (
    <Box sx={{ backgroundColor: "#1A1824", padding:"60px 20px !important", mt:13 }}>
      <Container>
        <Grid container justifyContent={"space-between"} alignItems={"center"}>
          <Grid item lg={5}>
            <Typography sx={{ fontSize:"12px"}} color={"orange"} variant="p" component={"p"}>
              FOR RECRUITERS
            </Typography>
            <Typography sx={{color:"white", mt:3}} variant="h3" component={"h3"}>
              Do You Have A  Position To Post Job?
            </Typography>
            <Typography sx={{ color: "gray", mt:3 }} variant="p" component={"p"}>
              Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi.
              Morbi mattis ullamcorper velit
            </Typography>
            <Button sx={{mt:4}} variant="contained" color="warning" startIcon={<TextSnippetIcon />}>
              Post A Job
            </Button>
          </Grid>
          <Grid item lg={4}>
            <img
              width="100%"
              src="https://zone-assets-api.vercel.app/assets/illustrations/illustration_recruitment.svg"
              alt=""
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
