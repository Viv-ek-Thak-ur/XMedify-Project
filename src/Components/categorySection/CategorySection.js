import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Paper,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  CircularProgress,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Doctor from "../../assets/Doctor.svg";
import Labs from "../../assets/Drugstore.svg";
import Hospitals from "../../assets/Hospital.svg";
import MedicalStore from "../../assets/Capsule.svg";
import Ambulance from "../../assets/Ambulance.svg";

const categories = [
  { label: "Doctors", icon: <Box component="img" src={Doctor} /> },
  { label: "Labs", icon: <Box component="img" src={Labs} /> },
  { label: "Hospitals", icon: <Box component="img" src={Hospitals} /> },
  { label: "Medical Store", icon: <Box component="img" src={MedicalStore} /> },
  { label: "Ambulance", icon: <Box component="img" src={Ambulance} /> },
];

export default function CategorySection() {
  const navigate = useNavigate();

  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [loadingStates, setLoadingStates] = useState(false);
  const [loadingCities, setLoadingCities] = useState(false);

  // Fetch states
  useEffect(() => {
    setLoadingStates(true);
    axios
      .get("https://meddata-backend.onrender.com/states", { timeout: 120000 })
      .then((res) => setStates(res.data || []))
      .catch(() => setStates([]))
      .finally(() => setLoadingStates(false));
  }, []);

  // Fetch cities when state changes
  useEffect(() => {
    if (!selectedState) return;
    setLoadingCities(true);
    axios
      .get(
        `https://meddata-backend.onrender.com/cities/${encodeURIComponent(
          selectedState
        )}`,
        { timeout: 120000 }
      )
      .then((res) => setCities(res.data || []))
      .catch(() => setCities([]))
      .finally(() => setLoadingCities(false));
  }, [selectedState]);

  // Handle search
  const handleSearch = (e) => {
    e.preventDefault();
    if (!selectedState || !selectedCity) {
      alert("Please select state and city");
      return;
    }
    navigate(
      `/search?state=${encodeURIComponent(selectedState)}&city=${encodeURIComponent(selectedCity)}`
    );
  };

  return (
    <Box
      textAlign="center"
      sx={{
        width: { xs: "90%", sm: "70%", md: "60%" },
        margin: "-350px auto",
        display: "flex",
        flexDirection: "column",
        gap: 3,
        padding: 4,
        borderRadius: 2,
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        backgroundColor: "#fff",
        position: "relative",
        zIndex: 10,
      }}
    >
      {/* Search Form */}
      <form
        onSubmit={handleSearch}
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: "16px",
          flexWrap: "wrap",
        }}
      >
        <FormControl sx={{ minWidth: 150 }} size="small">
          <InputLabel>State</InputLabel>
          <Select
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
            label="State"
          >
            {loadingStates ? (
              <MenuItem value="">
                <CircularProgress size={16} /> Loading...
              </MenuItem>
            ) : (
              states.map((state) => (
                <MenuItem key={state} value={state}>
                  {state}
                </MenuItem>
              ))
            )}
          </Select>
        </FormControl>

        <FormControl sx={{ minWidth: 150 }} size="small">
          <InputLabel>City</InputLabel>
          <Select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            label="City"
            disabled={!selectedState || loadingCities}
          >
            {loadingCities ? (
              <MenuItem value="">
                <CircularProgress size={16} /> Loading...
              </MenuItem>
            ) : (
              cities.map((city) => (
                <MenuItem key={city} value={city}>
                  {city}
                </MenuItem>
              ))
            )}
          </Select>
        </FormControl>

        <Button type="submit" variant="contained" sx={{ height: 40, px: 4, bgcolor: "#2196f3" }}>
          Search
        </Button>
      </form>

      {/* Category Tiles */}
      <Box>
        <Typography variant="h6" gutterBottom>
          You may be looking for
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {categories.map((cat) => (
            <Grid item key={cat.label}>
              <Paper
                elevation={3}
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
