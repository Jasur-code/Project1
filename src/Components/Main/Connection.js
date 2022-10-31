import {
  Button,
  Card,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import db from "../../FireBase/Config";
import SwiperCore, { Virtual, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

SwiperCore.use([Virtual, Navigation, Pagination]);

export default function Connection() {
  const imgHover = {
    width:"100%",
    "&:hover":{
      width:"50%"
    }
  }
  const [connection, setConnection] = useState([]);
  useEffect(() => {
    db.collection("connection").onSnapshot((snapshot) =>
      setConnection(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  return (
    <Container sx={{mt:20}}>
      <Grid
        container
        justifyContent={"center"}
        alignItems={"center"}
        gap={"60px"}
      >
        <Grid item lg={4} md={12} xs={12} sm={12}>
          <Typography variant="h3">
            Global Connections
          </Typography>
          <Typography
            sx={{ mt: 4, fontSize: "18px", color: "gray" }}
            variant="p"
            component={"p"}
          >
            Vestibulum fringilla pede sit amet augue.Nam adipicing. Nulla neque
            dolor, sagittis eget,iaculis quis.
          </Typography>
          <Button sx={{ mt: 6 }} variant="contained" color="warning">
            View All Jobs
          </Button>
        </Grid>
        <Grid item lg={7} md={12} xs={12} sm={12}>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
              type: "custom",
            }}
            breakpoints={{
              520: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            navigation={true}
            virtual
          >
            {connection.map((v, i) => (
              <SwiperSlide key={i} virtualIndex={i}>
                <Card sx={{pb:2, borderRadius:"10px", boxShadow:"5px 10px 20px 5px #CCCDC6"}}>
                  <CardMedia>
                    <img style={imgHover}   src={v.image} alt="" />
                  </CardMedia>
                  <Typography
                    sx={{ mt: 3, color: "grey", textAlign: "center" }}
                    variant="p"
                    component={"p"}
                  >
                    {v.text}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                    variant="p"
                    component={"p"}
                  >
                    {v.title}
                  </Typography>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid>
      </Grid>
    </Container>
  );
}
