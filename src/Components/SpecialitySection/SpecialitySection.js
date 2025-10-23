import React from "react";
import { Box, Grid, Typography, Paper, Button } from "@mui/material";
import Dentistry from "../../assets/Drugstore.svg";
import PrimaryCare from "../../assets/Stethoscope.svg";
import Cardiology from "../../assets/Heart Rate.svg";
import MriResonance from "../../assets/Heart Rate Monitor.svg";
import BloodTest from "../../assets/Blood Sample.svg";
import Psychologist from "../../assets/Immune.svg";
import Xray from "../../assets/X-Ray.svg";

const specialityCategory = [
  {
    id: 1,
    icon: <Box component="img" src={Dentistry} />,
    label: "Dentistry",
  },
  {
    id: 2,
    icon: <Box component="img" src={PrimaryCare} />,
    label: "Primary Care",
  },
  {
    id: 3,
    icon: <Box component="img" src={Cardiology} />,
    label: "Cardiology",
  },
  {
    id: 4,
    icon: <Box component="img" src={MriResonance} />,
    label: "MRI Resonance",
  },
  {
    id: 5,
    icon: <Box component="img" src={BloodTest} />,
    label: "Blood Test",
  },
  {
    id: 6,
    icon: <Box component="img" src={Psychologist} />,
    label: "Psychologist",
  },
  {
    id: 7,
    icon: <Box component='img' src={Dentistry}/>,
    label: "Laboratory",
  },
  {
    id: 8,
    icon: <Box component="img" src={Xray} />,
    label: "X-Ray",
  },
];

export default function SpecialitySection() {
  return (
    <Box textAlign="center" py={4} px={2} sx={{background : '#d8e3f6ff'}}>
      <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
        Find by Specialisation
      </Typography>

      
      <Grid
        container
        spacing={3}
        justifyContent="center"
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{
          maxWidth: 750,
          mx: "auto",
          
        }}
      >
        {specialityCategory.map((category) => (
          <Grid
            key={category.id}
            size={{ xs: 2, sm: 4, md: 3 }} 
            display="flex"
            justifyContent="center"
          >
            <Paper
              elevation={3}
              sx={{
                width: 160,
                height: 160,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 2,
                cursor: "pointer",
                border: "2px solid transparent",
                transition: "all 0.3s ease",
                "&:hover": {
                  border: "2px solid #2196f3",
                  bgcolor: "rgba(33,150,243,0.08)",
                },
                "& img": {
                  width: 60,
                  height: 60,
                  objectFit: "contain",
                  mb: 1,
                },
              }}
            >
              {category.icon}
              <Typography variant="body1">{category.label}</Typography>
            </Paper>
          </Grid>
        ))}

        <Button>View All</Button>
      </Grid>
    </Box>
  );
}