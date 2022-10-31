import { Search } from "@mui/icons-material";
import { Autocomplete, Box, TextField } from "@mui/material";
import React from "react";

const jobs = [
  "Marketing Coordinator",
  "Medical Assistant",
  "Web Designer",
  "Dog Trainer",
  "President of Sales",
  "Nursing Assistant",
  "Corporate Data Officer",
  "Dynamic Quality Technician",
  "Relational Mobility Technician",
  "Senior Web Engineer",
  "Dynamic Markets Administrator",
  "Chief Research Analyst",
  "Internal Paradigm Synergist",
  "Relational Accountability Liason",
  "Regional Brand Associate",
  "Interactive Creative Supervisor",
];

export default function JobsAutoComplete() {
  return (
    <Autocomplete
      id="custom-input-demo"
      sx={{ width: "200px", backgroundColor: "#F0F0F0", borderRadius: "6px", pl:1 }}
      options={jobs}
      renderInput={(params) => (
        <Box sx={{display:"flex", alignItems:"center"}}>
          <Search sx={{color:"gray"}} />
          <TextField sx={{backgroundColor:"white", borderRadius:"0px"}} variant="filled" {...params} label="Jobs" />
        </Box>
      )}
    ></Autocomplete>
  );
}
