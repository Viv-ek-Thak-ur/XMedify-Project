import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import SearchResults from "./Pages/SearchResult/SearchResult";
import MyBookings from "./Pages/My Bookings/MyBookings";

function App() {

 
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search-results" element={<SearchResults />} />
        <Route path="/my-bookings" element={<MyBookings/>}/>
      </Routes>
    </>
  );
}

export default App;