import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Paper,
  Typography,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../navbar/NavbarSection";
import HospitalIcon from "../../assets/searchResult.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const useQuery = () => new URLSearchParams(useLocation().search);

export default function SearchResults() {
  const query = useQuery();
  const navigate = useNavigate();

  const [selectedState, setSelectedState] = useState(query.get("state") || "");
  const [selectedCity, setSelectedCity] = useState(query.get("city") || "");
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingStates, setLoadingStates] = useState(false);
  const [loadingCities, setLoadingCities] = useState(false);

  // Booking state
  const [activeBookingId, setActiveBookingId] = useState(null);
  const [bookingSelections, setBookingSelections] = useState({}); // per hospital

  const next7Days = Array.from({ length: 7 }).map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i);
    return d;
  });

  const timeSlots = {
    Morning: ["9:00 AM", "10:00 AM", "11:00 AM"],
    Afternoon: ["12:00 PM", "1:00 PM", "2:00 PM"],
    Evening: ["3:00 PM", "4:00 PM", "5:00 PM"],
  };

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

  // Fetch search results
  const fetchResults = (stateParam = selectedState, cityParam = selectedCity) => {
    if (!stateParam || !cityParam) return;
    setLoading(true);
    axios
      .get(
        `https://meddata-backend.onrender.com/data?state=${encodeURIComponent(
          stateParam
        )}&city=${encodeURIComponent(cityParam)}`,
        { timeout: 120000 }
      )
      .then((res) => setResults(res.data || []))
      .catch(() => setResults([]))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    if (selectedState && selectedCity) {
      fetchResults(selectedState, selectedCity);
    }
  }, [selectedState, selectedCity]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!selectedState || !selectedCity) {
      alert("Please select state and city");
      return;
    }
    navigate(
      `/search?state=${encodeURIComponent(selectedState)}&city=${encodeURIComponent(selectedCity)}`
    );
    fetchResults(selectedState, selectedCity);
  };

  const handleConfirmBooking = (hospitalName, hospitalId) => {
    const selection = bookingSelections[hospitalId] || {};
    const { date, period, time } = selection;

    if (!date || !period || !time) {
      alert("Please select date and time slot first!");
      return;
    }

    const newBooking = {
      "Hospital Name": hospitalName,
      date: date.toDateString(),
      period,
      time,
      id: Date.now(),
    };

    const existingBookings = JSON.parse(localStorage.getItem("bookings") || "[]");
    localStorage.setItem("bookings", JSON.stringify([...existingBookings, newBooking]));

    alert(
      `Booked ${hospitalName} on ${date.toDateString()} during ${period} at ${time}`
    );

    setBookingSelections((prev) => ({
      ...prev,
      [hospitalId]: { date: null, period: null, time: null },
    }));

    setActiveBookingId(null);
  };

  return (
    <Box>
      <Navbar />

      {/* Search Bar */}
      <Box
        component="form"
        onSubmit={handleSearch}
        sx={{ display: "flex", gap: 2, flexWrap: "wrap", justifyContent: "center", p: 3 }}
      >
        <div id="state">
          <FormControl sx={{ minWidth: 150 }} size="small">
            <InputLabel>State</InputLabel>
            <Select
              value={selectedState}
              onChange={(e) => {
                setSelectedState(e.target.value);
                setSelectedCity("");
              }}
              label="State"
              native
            >
              <option value="">Select State</option>
              {states.map((state) => (
                <option key={state} value={state}>{state}</option>
              ))}
            </Select>
          </FormControl>
        </div>

        <div id="city">
          <FormControl sx={{ minWidth: 150 }} size="small">
            <InputLabel>City</InputLabel>
            <Select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              label="City"
              native
              disabled={!selectedState || loadingCities}
            >
              <option value="">Select City</option>
              {cities.map((city) => (
                <option key={city} value={city}>{city}</option>
              ))}
            </Select>
          </FormControl>
        </div>

        <Button type="submit" variant="contained" id="searchBtn" sx={{ height: 40 }}>
          Search
        </Button>
      </Box>

      {/* Results Heading */}
      <h1 style={{ textAlign: "center", marginTop: 16 }}>
        {results.length} medical centers available in {selectedCity.toLowerCase()}
      </h1>

      {/* Results */}
      <Grid container direction="column" spacing={3} sx={{ p: 3 }}>
        {loading ? (
          <Box textAlign="center" width="100%" mt={4}>
            <CircularProgress />
          </Box>
        ) : results.length === 0 ? (
          <Typography textAlign="center" width="100%" mt={4}>
            No results found
          </Typography>
        ) : (
          results.map((item) => {
            const hospitalId = item["Provider ID"];
            const selection = bookingSelections[hospitalId] || { date: null, period: null, time: null };

            return (
              <Grid item key={hospitalId} xs={12}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    borderRadius: 2,
                    mb: 2,
                  }}
                >
                  {/* Left Info */}
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Box component="img" src={HospitalIcon} sx={{ width: 60, height: 60 }} />
                    <Box>
                      <h3>{item["Hospital Name"]}</h3>
                      <Typography variant="body2" color="text.secondary">
                        {item["City"]}, {item["State"]}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item["Address"]}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Booking */}
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Button
                      variant="contained"
                      onClick={() =>
                        activeBookingId === hospitalId
                          ? handleConfirmBooking(item["Hospital Name"], hospitalId)
                          : setActiveBookingId(hospitalId)
                      }
                      sx={{ mb: 1 }}
                    >
                      {activeBookingId === hospitalId ? "Confirm Booking" : "Book FREE Center Visit"}
                    </Button>

                    {activeBookingId === hospitalId && (
                      <Box sx={{ mt: 1, width: 350 }}>
                        {/* Show Today text if selected date is today */}
                        {selection.date?.toDateString() === new Date().toDateString() && <p>Today</p>}

                        <Swiper spaceBetween={10} slidesPerView={4}>
                          {next7Days.map((date) => (
                            <SwiperSlide key={date.toDateString()}>
                              <Button
                                variant={selection.date?.toDateString() === date.toDateString() ? "contained" : "outlined"}
                                onClick={() =>
                                  setBookingSelections((prev) => ({
                                    ...prev,
                                    [hospitalId]: {
                                      ...prev[hospitalId],
                                      date,
                                    },
                                  }))
                                }
                                sx={{ width: "100%", whiteSpace: "nowrap" }}
                              >
                                {date.toLocaleDateString("en-US", { weekday: "short", day: "numeric" })}
                              </Button>
                            </SwiperSlide>
                          ))}
                        </Swiper>

                        <Table sx={{ mt: 1 }}>
                          <TableBody>
                            {Object.entries(timeSlots).map(([period, slots]) => (
                              <TableRow key={period}>
                                <TableCell sx={{ width: 100 }}>
                                  <p>{period}</p>
                                </TableCell>
                                <TableCell>
                                  {slots.map((slot) => (
                                    <Button
                                      key={slot}
                                      variant={selection.time === slot && selection.period === period ? "contained" : "outlined"}
                                      size="small"
                                      sx={{ m: 0.5 }}
                                      onClick={() =>
                                        setBookingSelections((prev) => ({
                                          ...prev,
                                          [hospitalId]: {
                                            ...prev[hospitalId],
                                            time: slot,
                                            period,
                                          },
                                        }))
                                      }
                                    >
                                      {slot}
                                    </Button>
                                  ))}
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </Box>
                    )}
                  </Box>
                </Paper>
              </Grid>
            );
          })
        )}
      </Grid>
    </Box>
  );
}
