import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import db from "../../FireBase/Config";

export default function Blog() {
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    db.collection("blog").onSnapshot((snapshot) =>
      setBlog(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  return (
    <Container sx={{ mt: 14 }}>
      <Box>
        <Typography
          variant="p"
          sx={{ fontSize: "14px", fontWeight: "bold", color: "grey" }}
        >
          Blog
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 4,
            flexWrap:"wrap",
            gap:"30px"
          }}
        >
          <Box>
            <Typography
              sx={{ fontWeight: "bold" }}
              variant="h4"
              component={"h3"}
            >
              Read Our Lates News
            </Typography>
            <Typography
              sx={{ color: "grey", mt: 3 }}
              variant="p"
              component={"p"}
            >
              Aenean vulputate eleifend tellus. Mauris turpis nunc, <br />{" "}
              blandit et, volutpat molestie, porta ut, ligula.
            </Typography>
          </Box>
          <Button variant="outlined" color="warning">
            View All
          </Button>
        </Box>
      </Box>

      <Grid container sx={{ justifyContent: "center", gap: "30px", mt:8 }}>
        <Grid
          item
          lg={6}
          sx={{
            background:
              " linear-gradient(to right, rgba(0,0,0,.8), rgba(0,0,0,.6)), url( https://www.buro247.ru/images/2022/04/1649317934443823.jpg)",
            backgroundPosition: "center",
            borderRadius: "6px",
          }}
        >
          <Box sx={{ marginTop: "95%", marginLeft: "5%", pb: 3 }}>
            <Typography
              sx={{ color: "grey", fontSize: "14px" }}
              variant="p"
              component={"p"}
            >
              16 Mar 2020 8 minutes read
            </Typography>
            <Typography
              sx={{ color: "white", fontWeight: "bold", mt: 2 }}
              variant="h4"
              component={"a"}
            >
              The A - Z Of
            </Typography>
            <Typography
              sx={{ color: "grey", mt: 2 }}
              variant="p"
              component={"p"}
            >
              Pellentesque posuere. Phasellus a est. Suspendisse pulvinar,{" "}
              <br /> augue ac venenatis condimentum, sem libero volutpat <br />{" "}
              nibh, nec pellentesque velit pede quis nunc.
            </Typography>
          </Box>
        </Grid>

        <Grid item lg={5.6} md={8} sm={10} xs={8}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
              width: "100%",
            }}
          >
            {blog.map((v, i) => (
              <Card key={i} sx={{ borderRadius: "6px", width: "250px" }}>
                <CardMedia>
                  <img
                    style={{ borderRadius: "6px" }}
                    width={"100%"}
                    src={v.image}
                    alt=""
                  />
                </CardMedia>

                <CardContent>
                  <Typography
                    sx={{ color: "grey", fontSize: "14px", mt: 1 }}
                    variant="p"
                    component={"p"}
                  >
                    {v.text}
                  </Typography>
                  <Typography
                    sx={{ fontWeight: "bold", mt: 1, fontSize: "17px" }}
                    variant="p"
                    component={"p"}
                  >
                    {v.title}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
