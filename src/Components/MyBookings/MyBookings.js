import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Paper,
  Typography,
  TextField,
} from "@mui/material";
import Navbar from "../navbar/NavbarSection";

export default function MyBookings() {
  const [bookings, setBookings] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBookings, setFilteredBookings] = useState([]);

  useEffect(() => {
    const storedBookings = JSON.parse(localStorage.getItem("bookings") || "[]");
    setBookings(storedBookings);
    setFilteredBookings(storedBookings);
  }, []);

  useEffect(() => {
    const filtered = bookings.filter((b) =>
      b["Hospital Name"].toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBookings(filtered);
  }, [searchTerm, bookings]);

  return (
    <Box>
      <Navbar />

      {/* Heading and Search */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 3,
          flexWrap: "wrap",
        }}
      >
        <h1>My Bookings</h1>
        <TextField
          label="Search by Hospital Name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          size="small"
        />
      </Box>

      {/* Bookings List */}
      <Grid container direction="column" spacing={2} sx={{ p: 3 }}>
        {filteredBookings.length === 0 ? (
          <Typography textAlign="center" width="100%" mt={4}>
            No bookings found.
          </Typography>
        ) : (
          filteredBookings.map((booking, index) => (
            <Grid item key={index} xs={12}>
              <Paper
                elevation={3}
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 2,
                }}
              >
                <h3>{booking["Hospital Name"]}</h3>
                <Typography>Date: {booking.date}</Typography>
                <Typography>Time of Day: {booking.period}</Typography>
                <Typography>Time: {booking.time}</Typography>
              </Paper>
            </Grid>
          ))
        )}
      </Grid>
    </Box>
  );
}
