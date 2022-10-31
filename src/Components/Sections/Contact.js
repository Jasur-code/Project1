import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";

export default function Contact() {
  return (
    <Box
      sx={{
        background:
          " linear-gradient(to right, rgba(0,0,0,.8), rgba(0,0,0,.6)), url(https://static.vecteezy.com/system/resources/thumbnails/002/016/989/original/the-interior-of-a-large-office-free-video.jpg)",
        objectFit: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition:"center"
      }}
    >
      <Container sx={{mt:12}}>
        <Grid container sx={{ pt: 6, pb:6 }} justifyContent={"center"}>
          <Grid item xlg={8}>
            <Typography
              variant="h4"
              sx={{ color: "white", fontWeight: "bold" }}
              component={"h3"}
            >
              Get The Right Job For You
            </Typography>
            <Typography
              variant="p"
              component={"p"}
              sx={{ color: "white", fontWeight: "bold", mt: 3 }}
            >
              Subscribe to get updated on latest and relevant career
              opportunities
            </Typography>
            {/* <Box
              sx={{
                display: "inline-flex",
                width: "100%",
                maxWidth: "560px",
                height: "45px",
                mt: 3,
              }}
            >
              <input
                style={{
                  padding: "0px 20px",
                  borderTopRightRadius: "0px !important",
                  borderBottomRightRadius: "0px !important",
                  width: "100%",
                  display: "block",
                  minWidth: "0",
                  outline: "none",
                  height: "45px",
                }}
                type="text"
                placeholder="Enter your email"
              />
              <Box
                sx={{
                  display: "inline-flex",
                  justifyContent: "center",
                  alignItems: "center",
                  whiteSpace: "nowrap",
                }}
              >
                <Button
                  sx={{
                    display: "inline-flex",
                    minWidth: "64px",
                    borderTopLeftRadius: "0px !important",
                    borderBottomLeftRadius: "0px !important",
                    verticalAlign: "middle",
                    height: "45px",
                  }}
                  variant="contained"
                  color={"warning"}
                >
                  Subscribe
                </Button>
              </Box>
            </Box> */}
            <Box
            sx={{
              mt: 2,
              width: "100%",
              lineHeight: "1.4375 em",
              display: "inline-flex",
              alignItems: "center",
              position: "relative",
              backgroundColor: "white",
              borderRadius: "8px",
            }}
          >
            <input
              type="text"
              style={{
                letterSpacing: "inherit",
                padding: "8px 20px",
                boxSizing: "content-box",
                background: "none",
                lineHeight: "1.4375 em",
                display: "block",
                minWidth: "0",
                width: "100%",
                border: "none",
                outline: "none",
              }}
              placeholder="Email address"
            />
            <Box
              sx={{
                lineHeight: "1.4375 em",
                fontWeight: "400",
              }}
            >
              <Button
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minWidth: "64px",
                }}
                variant="contained"
                color="warning"
              >
                Subscribe
              </Button>
            </Box>
          </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
