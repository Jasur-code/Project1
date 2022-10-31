import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import CountrySelect from "../../Select/Autocomplete/country";
import JobsAutoComplete from "../../Select/Autocomplete/jobs";
import { FaAirbnb, FaDropbox, FaFacebook, FaGoogle } from "react-icons/fa";

export default function HeaderMain() {
  return (
    <Container>
      <Grid sx={{gap:"60px", mt:5}} justifyContent="center" alignItems="center" container spacing={2}>
        <Grid item lg={5}>
          {/* Grid1 Text */}
          <Typography sx={{ color: "white" }} variant="h2" component={"h3"}>
            Get The <span style={{ color: "#FA541C" }}>Career</span> You Deserve
          </Typography>
          <Typography variant="p" component={"p"} sx={{ color: "gray", mt: 4 }}>
            Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet
            sapien, quis venenatis ante odio sit amet eros.
          </Typography>

          {/*CountrySelect and JobsSelect */}

          <Box sx={{ display: "flex", mt: 4, flexWrap: "wrap" }}>
            <JobsAutoComplete />
            <CountrySelect />
          </Box>

          {/* Logo */}
          <Box sx={{ display: "flex", gap: "10px", mt: 5, flexWrap: "wrap" }}>
            <Box style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <FaAirbnb style={{ fontSize: "30px", color: "gray" }} />
              <Typography sx={{ fontSize: "20px", color: "gray" }} variant="p">
                airbnb
              </Typography>
            </Box>
            <Box style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <FaDropbox style={{ fontSize: "30px", color: "gray" }} />
              <Typography sx={{ fontSize: "20px", color: "gray" }} variant="p">
                Dropbox
              </Typography>
            </Box>
            <Box style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <FaFacebook style={{ fontSize: "30px", color: "gray" }} />
              <Typography sx={{ fontSize: "20px", color: "gray" }} variant="p">
                Faceebook
              </Typography>
            </Box>
            <Box style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <FaGoogle style={{ fontSize: "30px", color: "gray" }} />
              <Typography sx={{ fontSize: "20px", color: "gray" }} variant="p">
                Google
              </Typography>
            </Box>
          </Box>

          {/* Results */}
          <Box sx={{ display: "flex", gap: "20px", mt: 9, flexWrap: "wrap" }}>
            <Box sx={{ borderRight: "1px dashed gray", pr: 3 }}>
              <Typography variant="h5" sx={{ color: "white" }}>
                2m+
              </Typography>
              <Typography variant="p" sx={{ color: "gray" }}>
                Jobs
              </Typography>
            </Box>
            <Box sx={{ borderRight: "1px dashed gray", pr: 3 }}>
              <Typography variant="h5" sx={{ color: "white" }}>
                500k+
              </Typography>
              <Typography variant="p" sx={{ color: "gray" }}>
                Successful Hiring
              </Typography>
            </Box>

            <Box sx={{ borderRight: "1px dashed gray", pr: 2 }}>
              <Typography variant="h5" sx={{ color: "white" }}>
                250k+
              </Typography>
              <Typography variant="p" sx={{ color: "gray" }}>
                Partners
              </Typography>
            </Box>
            <Box sx={{ borderRight: "1px dashed gray", pr: 3 }}>
              <Typography variant="h5" sx={{ color: "white" }}>
                156k+
              </Typography>
              <Typography variant="p" sx={{ color: "gray" }}>
                Employee
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid justifyContent={"center"} item lg={6}>
          <img
            style={{ borderRadius: "10px", width: "100%", }}
            src="https://thumbs.dreamstime.com/b/%D1%82%D0%B5%D0%BC%D0%B0-%D0%B4%D0%B5%D0%BB%D0%B0-%D0%B8-%D1%84%D0%B8%D0%BD%D0%B0%D0%BD%D1%81%D0%BE%D0%B2-%D0%BA%D0%BE%D0%BD%D1%86%D0%B5%D0%BF%D1%86%D0%B8%D1%8F-%D0%BE%D0%BD%D0%BB%D0%B0%D0%B9%D0%BD-%D0%B1%D0%B0%D0%BD%D0%BA%D0%B8%D0%BD%D0%B3%D0%BE%D0%B2-%D1%82%D0%B5%D1%85%D0%BD%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D0%B8-%D1%81%D0%B4%D0%B5%D0%BB%D0%BA%D0%B8-136679762.jpg"
            alt=""
          />
        </Grid>
      </Grid>
    </Container>
  );
}
