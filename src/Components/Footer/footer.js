import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import { FaGooglePlay } from "react-icons/fa";
import { Apple } from "@mui/icons-material";
import { width } from "@mui/system";

export default function Footer() {
  const ButtonStyle = {
    backgroundColor: "black",
    color: "white",
    padding: "10px 15px",
    "&:hover": {
      backgroundColor: "black",
    },
  };
  return (
    <Container sx={{ pt: 9, pb:4 }}>
      <Grid container justifyContent={"center"} gap="90px">
        <Grid  item lg={5}>
          <a
            style={{
              textDecoration: "none",
              color: "black",
              fontSize: "22px",
              fontWeight: "bold",
            }}
            href="hhh"
          >
            Zone
          </a>
          <Typography
            sx={{ color: "grey", fontSize: "14px", mt: 2 }}
            variant="p"
            component={"p"}
          >
            The starting point for your next project based on easy <br />{" "}
            -to-customize Material-UI © helps you build apps faster <br /> and
            better.
          </Typography>
          <Typography
            sx={{ fontSize: "18px", mt: 4 }}
            variant="p"
            component={"p"}
          >
            Social
          </Typography>
          <Box sx={{ display: "flex", p: 0, m: 0 }}>
            <IconButton sx={{ p: 0 }}>
              <Facebook sx={{ color: "#FA541C" }} />
            </IconButton>
            <IconButton>
              <Instagram sx={{ color: "#FA541C" }} />
            </IconButton>
            <IconButton>
              <LinkedIn sx={{ color: "#FA541C" }} />
            </IconButton>
            <IconButton>
              <Twitter sx={{ color: "#FA541C" }} />
            </IconButton>
          </Box>
          <Box sx={{ mt: 3 }}>
            <Typography
              sx={{ fontSize: "18px", mt: 0 }}
              variant="p"
              component={"p"}
            >
              Documentation
            </Typography>
            <Typography
              sx={{ fontSize: "14px", color: "grey", mt: 1 }}
              variant="p"
              component={"p"}
            >
              Documentation
            </Typography>
            <Typography
              sx={{ fontSize: "14px", color: "grey", mt: 1 }}
              variant="p"
              component={"p"}
            >
              Changelog
            </Typography>
            <Typography
              sx={{ fontSize: "14px", color: "grey", mt: 1 }}
              variant="p"
              component={"p"}
            >
              Contributing
            </Typography>
          </Box>
          <Typography
            sx={{ fontSize: "18px", mt: 3 }}
            variant="p"
            component={"p"}
          >
            Let's stay in touch
          </Typography>
          <Typography
            sx={{ color: "grey", fontSize: "14px" }}
            variant="p"
            component={"p"}
          >
            Subscribe to our newsletter to receive latest articles to your <br />{" "}
            inbox weekly.
          </Typography>

          <Box
            sx={{
              mt: 2,
              width: "100%",
              lineHeight: "1.4375 em",
              display: "inline-flex",
              alignItems: "center",
              position: "relative",
              backgroundColor: "rgba(145, 158, 171, 0.08)",
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

          <Typography
            sx={{ fontSize: "18px", mt: 3 }}
            variant="p"
            component={"p"}
          >
            Apps
          </Typography>
          <Box sx={{ display: "flex", gap: "15px", mt: 2, flexWrap: "wrap" }}>
            <Button sx={ButtonStyle} variant="contained" startIcon={<Apple />}>
              Apple Store
            </Button>
            <Button
              sx={ButtonStyle}
              variant="contained"
              startIcon={<FaGooglePlay />}
            >
              Google Play
            </Button>
          </Box>
        </Grid>
        <Grid item lg={6}>
          <Box sx={{display:"flex", gap:"15px", flexWrap:"wrap",}}>
          <Box sx={{display:"flex", flexWrap:"wrap", width:"60%", gap:"20px"}}>
          <Box sx={{width:"150px", }}>
              <Typography
                sx={{ fontWeight: "bold", fontSize: "18px" }}
                variant="p"
                component={"p"}
              >
                Marketing
              </Typography>
              <Typography
                sx={{ fontSize: "14px", color: "grey", mt: 1 }}
                variant="p"
                component={"p"}
              >
                Landing
              </Typography>
              <Typography
                sx={{ fontSize: "14px", color: "grey", mt: 1 }}
                variant="p"
                component={"p"}
              >
                Services
              </Typography>
              <Typography
                sx={{ fontSize: "14px", color: "grey", mt: 1 }}
                variant="p"
                component={"p"}
              >
                Case Studies
              </Typography>
              <Typography
                sx={{ fontSize: "14px", color: "grey", mt: 1 }}
                variant="p"
                component={"p"}
              >
                Case Study
              </Typography>
              <Typography
                sx={{ fontSize: "14px", color: "grey", mt: 1 }}
                variant="p"
                component={"p"}
              >
                Blog Posts
              </Typography>
              <Typography
                sx={{ fontSize: "14px", color: "grey", mt: 1 }}
                variant="p"
                component={"p"}
              >
                Blog Post
              </Typography>
              <Typography
                sx={{ fontSize: "14px", color: "grey", mt: 1 }}
                variant="p"
                component={"p"}
              >
                About
              </Typography>
              <Typography
                sx={{ fontSize: "14px", color: "grey", mt: 1 }}
                variant="p"
                component={"p"}
              >
                Contact
              </Typography>
            </Box>
            <Box sx={{width:"150px",  }}>
              <Typography
                sx={{ fontWeight: "bold", fontSize: "18px" }}
                variant="p"
                component={"p"}
              >
                Career
              </Typography>
              <Typography
                sx={{ fontSize: "14px", color: "grey", mt: 1 }}
                variant="p"
                component={"p"}
              >
                Landing
              </Typography>
              <Typography
                sx={{ fontSize: "14px", color: "grey", mt: 1 }}
                variant="p"
                component={"p"}
              >
                Jobs
              </Typography>
              <Typography
                sx={{ fontSize: "14px", color: "grey", mt: 1 }}
                variant="p"
                component={"p"}
              >
                Job
              </Typography>
              <Typography
                sx={{ fontSize: "14px", color: "grey", mt: 1 }}
                variant="p"
                component={"p"}
              >
                Blog Posts
              </Typography>
              <Typography
                sx={{ fontSize: "14px", color: "grey", mt: 1 }}
                variant="p"
                component={"p"}
              >
                Blog Post
              </Typography>
              <Typography
                sx={{ fontSize: "14px", color: "grey", mt: 1 }}
                variant="p"
                component={"p"}
              >
                About
              </Typography>
              <Typography
                sx={{ fontSize: "14px", color: "grey", mt: 1 }}
                variant="p"
                component={"p"}
              >
                Contact
              </Typography>
            </Box>
         

            <Box sx={{width:"150px",  }}>
              <Typography
                sx={{ fontWeight: "bold", fontSize: "18px" }}
                variant="p"
                component={"p"}
              >
                Travel
              </Typography>
              <Typography
                sx={{ fontSize: "14px", color: "grey", mt: 1 }}
                variant="p"
                component={"p"}
              >
                Landing
              </Typography>
              <Typography
                sx={{ fontSize: "14px", color: "grey", mt: 1 }}
                variant="p"
                component={"p"}
              >
                Tours
              </Typography>
              <Typography
                sx={{ fontSize: "14px", color: "grey", mt: 1 }}
                variant="p"
                component={"p"}
              >
                Tour
              </Typography>
              <Typography
                sx={{ fontSize: "14px", color: "grey", mt: 1 }}
                variant="p"
                component={"p"}
              >
                Checkout
              </Typography>
              <Typography
                sx={{ fontSize: "14px", color: "grey", mt: 1 }}
                variant="p"
                component={"p"}
              >
                Checkout complete
              </Typography>
              <Typography
                sx={{ fontSize: "14px", color: "grey", mt: 1 }}
                variant="p"
                component={"p"}
              >
                Blog 
              </Typography>
              <Typography
                sx={{ fontSize: "14px", color: "grey", mt: 1 }}
                variant="p"
                component={"p"}
              >
                Blog Post
              </Typography>
              <Typography
                sx={{ fontSize: "14px", color: "grey", mt: 1 }}
                variant="p"
                component={"p"}
              >
                About
              </Typography>
              <Typography
                sx={{ fontSize: "14px", color: "grey", mt: 1 }}
                variant="p"
                component={"p"}
              >
                Contact
              </Typography>
            </Box>
            <Box sx={{width:"150px",  }}>
              <Typography
                sx={{ fontWeight: "bold", fontSize: "18px" }}
                variant="p"
                component={"p"}
              >
                E-Earning
              </Typography>
              <Typography
                sx={{ fontSize: "14px", color: "grey", mt: 1 }}
                variant="p"
                component={"p"}
              >
                Landing
              </Typography>
              <Typography
                sx={{ fontSize: "14px", color: "grey", mt: 1 }}
                variant="p"
                component={"p"}
              >
                Courses
              </Typography>
              <Typography
                sx={{ fontSize: "14px", color: "grey", mt: 1 }}
                variant="p"
                component={"p"}
              >
                Course
              </Typography>
             
              
              <Typography
                sx={{ fontSize: "14px", color: "grey", mt: 1 }}
                variant="p"
                component={"p"}
              >
                Blog 
              </Typography>
              <Typography
                sx={{ fontSize: "14px", color: "grey", mt: 1 }}
                variant="p"
                component={"p"}
              >
                Blog Post
              </Typography>
              <Typography
                sx={{ fontSize: "14px", color: "grey", mt: 1 }}
                variant="p"
                component={"p"}
              >
                About
              </Typography>
              <Typography
                sx={{ fontSize: "14px", color: "grey", mt: 1 }}
                variant="p"
                component={"p"}
              >
                Contact
              </Typography>
            </Box>
          </Box>
          <Box>
          <Box sx={{width:"180px", }}>
              <Typography
                sx={{ fontWeight: "bold", fontSize: "18px" }}
                variant="p"
                component={"p"}
              >
                Common
              </Typography>
              <Typography
                sx={{ fontSize: "14px", color: "grey", mt: 1 }}
                variant="p"
                component={"p"}
              >
                Login
              </Typography>
              <Typography
                sx={{ fontSize: "14px", color: "grey", mt: 1 }}
                variant="p"
                component={"p"}
              >
                Login Cover
              </Typography>
              <Typography
                sx={{ fontSize: "14px", color: "grey", mt: 1 }}
                variant="p"
                component={"p"}
              >
                Register
              </Typography>
              <Typography
                sx={{ fontSize: "14px", color: "grey", mt: 1 }}
                variant="p"
                component={"p"}
              >
                Register Cover
              </Typography>
              <Typography
                sx={{ fontSize: "14px", color: "grey", mt: 1 }}
                variant="p"
                component={"p"}
              >
                Reset Password
              </Typography>
              <Typography
                sx={{ fontSize: "14px", color: "grey", mt: 1 }}
                variant="p"
                component={"p"}
              >
                Verify Code
              </Typography>
              <Typography
                sx={{ fontSize: "14px", color: "grey", mt: 1 }}
                variant="p"
                component={"p"}
              >
                404 error
              </Typography>
              <Typography
                sx={{ fontSize: "14px", color: "grey", mt: 1 }}
                variant="p"
                component={"p"}
              >
                500 error
              </Typography>
              <Typography
                sx={{ fontSize: "14px", color: "grey", mt: 1 }}
                variant="p"
                component={"p"}
              >
                Maintenance
              </Typography>
              <Typography
                sx={{ fontSize: "14px", color: "grey", mt: 1 }}
                variant="p"
                component={"p"}
              >
                ComingSoon
              </Typography>
              <Typography
                sx={{ fontSize: "14px", color: "grey", mt: 1 }}
                variant="p"
                component={"p"}
              >
                Pricing 01
              </Typography>
              <Typography
                sx={{ fontSize: "14px", color: "grey", mt: 1 }}
                variant="p"
                component={"p"}
              >
                Pricing 02
              </Typography>
              <Typography
                sx={{ fontSize: "14px", color: "grey", mt: 1 }}
                variant="p"
                component={"p"}
              >
                Checkout
              </Typography>
              <Typography
                sx={{ fontSize: "14px", color: "grey", mt: 1 }}
                variant="p"
                component={"p"}
              >
                Support
              </Typography>
            </Box>
          </Box>
         
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
