import { Box, Grid, Typography, Paper } from "@mui/material";
import Doctor from "../../assets/Doctor.svg";
import Labs from "../../assets/Drugstore.svg";
import Hospitals from "../../assets/Hospital.svg";
import MedicalStore from "../../assets/Capsule.svg";
import Ambulance from "../../assets/Ambulance.svg";
import SearchInput from "../SearchInput/SearchInput";
import SearchButton from "../SearchButton/SearchButton";

const categories = [
  { label: "Doctors", icon: <Box component="img" src={Doctor}/> },
  { label: "Labs", icon: <Box component="img" src={Labs}/> },
  { label: "Hospitals", icon:  <Box component="img" src={Hospitals}/> },
  { label: "Medical Store", icon: <Box component="img" src={MedicalStore}/> },
  { label: "Ambulance", icon: <Box component="img" src={Ambulance}/> },
];

export default function CategorySection() {
  return (
    <Box textAlign="center" 
    
    sx={{
    width: { xs: "90%", sm: "70%", md: "60%" }, // responsive width
    margin: "-350px auto", 
    display: "flex",
    flexDirection: "column",
    gap: 3,
    padding: 4,
    textAlign: "center",
    borderRadius: 2, 
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", 
    backgroundColor: "#ffffff", 
  }}
        >

        <Box
        sx={{
            display: "flex",
            justifyContent:"center",
            gap: 10
        }}
        >
        <SearchInput placeholder="State"/>
        <SearchInput placeholder="City"/>
        <SearchButton onClick={() => (console.log("SearchClicked"))}/>
        </Box>

       <Box> 
      <Typography variant="h6" gutterBottom>
        You may be looking for
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {categories.map((cat) => (
          <Grid item key={cat.label}>
            <Paper
              elevation={ 3 }
              sx={{
                width: 120,
                height: 120,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 2,
                cursor: "pointer",
                 border: "2px solid transparent",
               
                "&:hover": {
                  border: "2px solid #2196f3",
                  bgcolor: "rgba(33,150,243,0.08)",
                },
              }}
            >
              {cat.icon}
              <Typography variant="body2" sx={{ mt: 1 }}>
                {cat.label}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
      </Box>
    </Box>
  );
}
