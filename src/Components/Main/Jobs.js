import {
  LocationOn,
  PermIdentity,
  Schedule,
  TrendingFlat,
} from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import db from "../../FireBase/Config";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import SurroundSoundIcon from "@mui/icons-material/SurroundSound";
import { Container } from "@mui/system";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    db.collection("jobs").onSnapshot((snapshot) =>
      setJobs(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <Container>
      <Box sx={{ display:"flex", justifyContent: "space-between", flexWrap:"wrap" }}>
        <p style={{color:"grey", fontSize:"14px", fontWeight:"500"}}>
          FEATURED JOBS
        </p>
        <h1>
          Jobs available apply to Editorial Specialist, <br /> Account Manager, Human
          Resources Specialist and more!
        </h1>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "15px",
          flexWrap: "wrap",
          justifyContent: "center",
          mt: 15,
        }}
      >
        {jobs.map((v, i) => (
          <Box
          key={i}
            sx={{
              width: "350px",
              background: "white",
              boxShadow: "5px 10px 20px 5px #C6CACB",
              p: 2,
              borderRadius: "6px",
            }}
          >
            <img
              style={{ borderRadius: "5px" }}
              width={50}
              src={v.image}
              alt=""
            />
            <Typography
              sx={{ fontWeight: "bold", fontSize: "18px", mt: 1 }}
              variant="p"
              component={"p"}
            >
              {v.link}
            </Typography>
            <Typography color={"primary"} variant="p" component={"p"}>
              {v.title}
            </Typography>
            <Box
              sx={{ display: "flex", gap: "6px", alignItems: "center", mt: 2 }}
            >
              <LocationOn sx={{ color: "grey" }} />
              <Typography
                sx={{ fontSize: "14px" }}
                color={"grey"}
                variant="p"
                component={"p"}
              >
                {v.title}
              </Typography>
            </Box>

            <Typography
              sx={{
                fontSize: "12px",
                mt: 2,
                pb: 2,
                borderBottom: "1px dashed grey",
              }}
              color={"grey"}
              variant="p"
              component={"p"}
            >
              {v.date}
            </Typography>

            <Box
              sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}
            >
              <Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
                  <SignalCellularAltIcon sx={{ color: "grey" }} />
                  <Typography
                    sx={{ color: "grey", fontWeight: "500", fontSize: "14px" }}
                    variant="p"
                    component={"p"}
                  >
                    {v.exp}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    mt: 2,
                  }}
                >
                  <SurroundSoundIcon sx={{ color: "grey" }} />
                  <Typography
                    sx={{ color: "grey", fontWeight: "500", fontSize: "14px" }}
                    variant="p"
                    component={"p"}
                  >
                    {v.time}
                  </Typography>
                </Box>
              </Box>
              <Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
                  <Schedule sx={{ color: "grey" }} />
                  <Typography
                    sx={{ color: "grey", fontWeight: "500", fontSize: "14px" }}
                    variant="p"
                    component={"p"}
                  >
                    {v.time}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    mt: 2,
                  }}
                >
                  <PermIdentity sx={{ color: "grey" }} />
                  <Typography
                    sx={{ color: "grey", fontWeight: "500", fontSize: "14px" }}
                    variant="p"
                    component={"p"}
                  >
                    {v.user}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
      <Box marginTop={"40px"} textAlign={"center"}>
        <Button variant="outlined" endIcon={<TrendingFlat />}>
          View All Jobs
        </Button>
      </Box>
    </Container>
  );
}
