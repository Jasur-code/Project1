import { Card, CardContent, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import db from "../../FireBase/Config";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Virtual, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import StarIcon from '@mui/icons-material/Star';
import { Box } from "@mui/system";

SwiperCore.use([Virtual, Navigation, Pagination]);

export default function Customer() {
  const [customer, setCustomer] = useState([]);
  useEffect(() => {
    db.collection("customer").onSnapshot((snapshot) =>
      setCustomer(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  return (
    <Container sx={{padding:"80px 20px !important" }}>
    <Typography variant="h3" component={"h3"} textAlign={"center"}>
        What Our Customer Say
    </Typography>
      <Grid mt={6} container justifyContent={"center"}>
        <Grid item lg={6} md={6} sm={8} xs={12}>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
              type: "fraction",
            }}
          
            virtual
          >
            {customer.map((v, i) => (
              <SwiperSlide key={i} virtualIndex={i}>
                <Card sx={{ textAlign:"center", background:"none", border:"none" }}>
                  <CardContent>
                   <Box sx={{display:"flex", gap:"4px", justifyContent:"center", color:"orange"}}>
                      <StarIcon/>
                      <StarIcon/>
                      <StarIcon/>
                      <StarIcon/>
                      <StarIcon/>
                   </Box>
                    <Typography sx={{fontSize:"18px", mt:2}} variant="p" component={"p"}>
                      {v.text}
                    </Typography>
                    <Typography sx={{fontWeight:"bold", mt:2,}} variant="p" component={"p"}>
                      {v.title}
                    </Typography>
                    <Typography sx={{fontSize:"14px", color:"grey", pb:2}} variant="p" component={"p"}>
                      {v.job}
                    </Typography>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid>
      </Grid>
    </Container>
  );
}
