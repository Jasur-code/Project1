import {FaGooglePlay} from "react-icons/fa"
import { Apple } from '@mui/icons-material'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import Career from "../Sections/image/career.png"


export default function Index() {
const ButtonStyle = {
    backgroundColor:"black",
    color:"white",
    padding:"10px 15px",
    "&:hover": {
        backgroundColor:"black"
    }
}
  return (
   <Container sx={{mt:20}}>
     <Grid sx={{backgroundColor:"#FFF2ED",  gap:"40px", borderRadius:"10px", p:3}} container justifyContent={"center"} alignItems={"center"}>
        <Grid item lg={5}>
            <Typography sx={{fontWeight:"bold"}} variant='h4' component={"h4"}>
               Download App
            </Typography>
            <Typography sx={{mt:3, fontWeight:"bold", fontSize:"18px"}} variant='p' component={"p"}>
               Now finding the new job just got even easier <br /> with our new app!
            </Typography>
            <Box sx={{display:"flex", gap:"15px", mt:5, flexWrap:"wrap"}}>
            <Button sx={ButtonStyle} variant='contained' startIcon={<Apple/>}>
                    Apple Store
                </Button>
                <Button sx={ButtonStyle} variant='contained' startIcon={<FaGooglePlay/>}>
                    Google Play
                </Button>
            </Box>
        </Grid>

        <Grid item lg={5} >
       
        <span style={{display:"inline-block"}}>
           <img width={"100%"}  src={Career} alt="" />
        </span>
        </Grid>
    </Grid>
   </Container>
  )
}
