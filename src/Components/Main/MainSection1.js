import { CloudUpload } from '@mui/icons-material'
import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'

export default function MainSection1() {
  return (
    <Box>
        <Box textAlign={"center"}>
            <Typography variant='p' sx={{color:"gray", fontSize:"12px", fontWeight:"bold"}}>
               FOR CANDIDATES
            </Typography>
            <Typography variant='h3' sx={{fontWeight:"bold", fontSize:"2.8rem", color:"#212B36"}}>
               Explore Thousands of Jobs
            </Typography>
            <Typography variant='p' component={"p"} sx={{color:"gray", mt:3}}>
                Donec mi odio, faucibus at, scelerisque quis, convallis in, <br /> nisi. Morbi mattis ullamcorper velit.
            </Typography>
        </Box>

        <Grid container spacing={2} marginTop="50px" justifyContent={"center"}>
            <Grid item lg={4} textAlign={"center"} >
                <img width={100} src="https://png.pngtree.com/png-vector/20191002/ourlarge/pngtree-edit-document-icon-isolated-on-abstract-background-png-image_1777991.jpg" alt="" />
                <Typography variant='p' component={"p"} sx={{color:"gray", mt:2}}>
                    Step1
                </Typography>
                <Typography variant='p' component={"p"} sx={{ fontWeight:"bold", fontSize:"18px", mt:2}}>
                   Create an account
                </Typography>
                <Typography variant='p' component={"p"} sx={{ color:"gray", mt:1}}>
                Nunc nonummy metus. Donec elit libero.
                </Typography>
            </Grid>
            <Grid item lg={4} textAlign={"center"} >
                <img width={100} src="https://png.pngtree.com/png-vector/20191002/ourlarge/pngtree-edit-document-icon-isolated-on-abstract-background-png-image_1777991.jpg" alt="" />
                <Typography variant='p' component={"p"} sx={{color:"gray", mt:2}}>
                    Step2
                </Typography>
                <Typography variant='p' component={"p"} sx={{ fontWeight:"bold", fontSize:"18px", mt:2}}>
                   Complete your profile
                </Typography>
                <Typography variant='p' component={"p"} sx={{ color:"gray", mt:1}}>
                Nunc nonummy metus. Donec elit libero.
                </Typography>
            </Grid>
            <Grid item lg={4} textAlign={"center"} >
                <img color='error' width={100} src="https://cdn-icons-png.flaticon.com/512/942/942800.png" alt="" />
                <Typography variant='p' component={"p"} sx={{color:"gray", mt:2}}>
                    Step3
                </Typography>
                <Typography variant='p' component={"p"} sx={{ fontWeight:"bold", fontSize:"18px", mt:2}}>
                  Search your job
                </Typography>
                <Typography variant='p' component={"p"} sx={{ color:"gray", mt:1}}>
                Nunc nonummy metus. Donec elit libero.
                </Typography>
            </Grid>
        </Grid>
        <Box textAlign={"center"} marginTop="70px">
        <Button  variant='contained' color='warning' startIcon={<CloudUpload/>}>
          Upload your CV
        </Button>
        </Box>
        
    </Box>
  )
}
