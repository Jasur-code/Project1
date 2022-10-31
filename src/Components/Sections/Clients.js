import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import db from "../../FireBase/Config";
import SwiperCore, { Virtual, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

SwiperCore.use([Virtual, Navigation, Pagination]);

export default function Clients() {
  const [client, setClient] = useState([]);

  useEffect(() => {
    db.collection("clients").onSnapshot((snapshot) =>
      setClient(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);



  return (
    <Container sx={{mt:12}}>
      <Box textAlign={"center"}>
        <Typography variant="h3" component={"h3"}>
          Our Clients
        </Typography>
        <Typography sx={{ color: "grey", mt: 3 }} variant="p" component={"p"}>
          Curabitur a felis in nunc fringilla tristique. Fusce egestas elit{" "}
          <br /> eget lorem. Etiam vitae tortor.
        </Typography>
      </Box>
      <Grid container justifyContent={"center"} mt={8}>
        <Grid item lg={12} md={12} sm={12} xs={10}>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
              type: "custom",
            }}
            breakpoints={{
                290:{
                    slidesPerView: 2,
                },
                400:{
                slidesPerView: 4,
                spaceBetween: 20,
                },
              520: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 6,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 8,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 8,
                spaceBetween: 30,
              },
            }}
            virtual
          >
            {client.map((v, i) => (
              <SwiperSlide key={i} virtualIndex={i}>
                <Box sx={{border:"1px solid gray", borderRadius:"6px" , padding:"0px 14px 0px 14px !important"}}>
                    <img style={{marginTop:"10px"}} width={"100%"} src={v.image} alt="" />
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid>
      </Grid>
    </Container>
  );
}
