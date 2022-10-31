import {
  Container,
  Box,
  Typography,
  Card,
  CardMedia,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import db from "../../FireBase/Config";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Virtual, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

SwiperCore.use([Virtual, Navigation, Pagination]);

export default function Companies() {
  const cardHover = {
    backgroundColor: "#F7F8F9",
    height: "180px",
    textAlign: "center",
    padding: "30px 20px",
    "&:hover": {
      backgroundColor: "white",
      boxShadow:"5px 10px 20px 5px #CCCDC6",
    },
  };
  const [company, setCompany] = useState([]);
  useEffect(() => {
    db.collection("companies").onSnapshot((snapshot) =>
      setCompany(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  console.log(company);
  return (
    <Container sx={{mt:30}}>
      <Typography textAlign={"center"} variant="h3" component={"h3"}>
        Top Companies
      </Typography>
      <Box sx={{ mt:10 }}>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            type:"custom"
          
          }}
          breakpoints={{
            520: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
          navigation={true}
          virtual
        >
          {company.map((v, i) => (
            <SwiperSlide key={i} virtualIndex={i}>
              <Card sx={cardHover}>
                  <CardMedia>
                    <img width={60} src={v.image} alt="" />
                  </CardMedia>
                  <Typography
                    sx={{ mt: 3, color: "grey" }}
                    variant="p"
                    component={"p"}
                  >
                    {v.text}
                  </Typography>
                  <Typography
                    sx={{ mt: 3, fontSize: "14px", fontWeight:"bold" }}
                    variant="p"
                    component={"p"}
                  >
                    {v.title}
                  </Typography>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

    </Container>
  );
}
