import { Routes, Route} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import SearchResults from "./Pages/SearchResult/SearchResult";
import MyBookings from "./Pages/My Bookings/MyBookings";
import "./App.css";

function App() {

 
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search-results" element={<SearchResults />} />
        <Route path="/my-bookings" element={<MyBookings/>}/>
      </Routes>
    </div>
  );
}

export default App;