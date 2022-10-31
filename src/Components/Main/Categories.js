import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import LocalConvenienceStoreIcon from '@mui/icons-material/LocalConvenienceStore';
import BrushIcon from '@mui/icons-material/Brush';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
export default function Categories() {
    const CardHover= {
        padding:"60px 20px 60px 20px !important",
        border:"1px solid #CCCDC6",
        borderRadius:"7px",
        transition:"all 0.3s ease",
        "&:hover":{
            backgroundColor: "white",
            color:"orange",
            border:"none",
            boxShadow:"5px 10px 20px 5px #CCCDC6",
            transition:"all 0.4s ease"
        }
    }
  return (
    <Box sx={{mt:18}}> 
        <Typography textAlign={"center"} variant='h3' component={"h3"}> 
            Hot Categories
        </Typography>

        <Grid container justifyContent={"center"} gap={3} mt={8}>
            <Grid  sx={CardHover} textAlign={"center"} item lg={2.5} md={3} sm={4} xs={12}>
                <MonetizationOnOutlinedIcon className='cardIcon' sx={{fontSize:"50px"}}/>
                <Typography sx={{fontWeight:"bold", fontSize:"18px", color:"black", mt:2, display:"block"}} variant='p' component={"p"}>
                   Accounting / Finance
                </Typography>
                <Typography sx={{color:"grey", fontSize:"14px", mt:2}} variant='p' component={"p"}>
                    101 jobs
                </Typography>
            </Grid>
            <Grid  sx={CardHover} textAlign={"center"} item lg={2.5} md={3} sm={4} xs={12}>
                <LocalConvenienceStoreIcon className='cardIcon' sx={{fontSize:"50px"}}/>
                <Typography sx={{fontWeight:"bold", fontSize:"18px", color:"black", mt:2}} variant='p' component={"p"}>
                   Marketing
                </Typography>
                <Typography sx={{color:"grey", fontSize:"14px", mt:2}} variant='p' component={"p"}>
                    102 jobs
                </Typography>
            </Grid>
            <Grid  sx={CardHover} textAlign={"center"} item lg={2.5} md={3} sm={4} xs={12}>
                <BrushIcon className='cardIcon' sx={{fontSize:"50px"}}/>
                <Typography sx={{fontWeight:"bold", fontSize:"18px", color:"black", mt:2}} variant='p' component={"p"}>
                   Design
                </Typography>
                <Typography sx={{color:"grey", fontSize:"14px", mt:2}} variant='p' component={"p"}>
                    103 jobs
                </Typography>
            </Grid>
            <Grid  sx={CardHover} textAlign={"center"} item lg={2.5} md={3} sm={4} xs={12}>
                <IntegrationInstructionsIcon className='cardIcon' sx={{fontSize:"50px"}}/>
                <Typography sx={{fontWeight:"bold", fontSize:"18px", color:"black", mt:2}} variant='p' component={"p"}>
                   Development
                </Typography>
                <Typography sx={{color:"grey", fontSize:"14px", mt:2}} variant='p' component={"p"}>
                    104 jobs
                </Typography>
            </Grid>
            <Grid  sx={CardHover} textAlign={"center"} item lg={2.5} md={3} sm={4} xs={12}>
                <ImportantDevicesIcon className='cardIcon' sx={{fontSize:"50px"}}/>
                <Typography sx={{fontWeight:"bold", fontSize:"18px", color:"black", mt:2, display:"block"}} variant='p' component={"p"}>
                   IT Hardware
                </Typography>
                <Typography sx={{color:"grey", fontSize:"14px", mt:2}} variant='p' component={"p"}>
                    105 jobs
                </Typography>
            </Grid>
            <Grid  sx={CardHover} textAlign={"center"} item lg={2.5} md={3} sm={4} xs={12}>
                <SupportAgentIcon className='cardIcon' sx={{fontSize:"50px"}}/>
                <Typography sx={{fontWeight:"bold", fontSize:"18px", color:"black", mt:2}} variant='p' component={"p"}>
                   Customer Service
                </Typography>
                <Typography sx={{color:"grey", fontSize:"14px", mt:2}} variant='p' component={"p"}>
                    106 jobs
                </Typography>
            </Grid>
            <Grid  sx={CardHover} textAlign={"center"} item lg={2.5} md={3} sm={4} xs={12}>
                <MedicalInformationIcon className='cardIcon' sx={{fontSize:"50px"}}/>
                <Typography sx={{fontWeight:"bold", fontSize:"18px", color:"black", mt:2}} variant='p' component={"p"}>
                   Health and Care
                </Typography>
                <Typography sx={{color:"grey", fontSize:"14px", mt:2}} variant='p' component={"p"}>
                    107 jobs
                </Typography>
            </Grid>
            <Grid  sx={CardHover} textAlign={"center"} item lg={2.5} md={3} sm={4} xs={12}>
                <AccountBalanceIcon className='cardIcon' sx={{fontSize:"50px"}}/>
                <Typography sx={{fontWeight:"bold", fontSize:"18px", color:"black", mt:2}} variant='p' component={"p"}>
                   Banking
                </Typography>
                <Typography sx={{color:"grey", fontSize:"14px", mt:2}} variant='p' component={"p"}>
                    108 jobs
                </Typography>
            </Grid>
        </Grid>
        <Box textAlign={"center"} mt={8}>
           <Button  variant='outlined'>
                View All Categories
           </Button>
        </Box>

    </Box>
  )
}
