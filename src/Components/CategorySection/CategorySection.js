
import { useNavigate , Link} from "react-router-dom";
import Doctor from "../../assets/u.svg";
import Labs from "../../assets/ae.svg";
import Hospitals from "../../assets/g.svg";
import Medical_Store from "../../assets/e.svg";
import Ambulance from "../../assets/h.svg";


import useLocationData from "../../hooks/useLocationData";
import SearchSection from "../SearchSection/SearchSection";

const category = [
  { label: "Doctors", image: Doctor },
  { label: "Labs", image: Labs },
  { label: "Hospitals", image: Hospitals },
  { label: "Medical Store", image: Medical_Store },
  { label: "Ambulance", image: Ambulance },
];

export default function CategorySection() {
  
  const {
  states,
  selectedState,
  setSelectedState,
  cities,
  selectedCity,
  setSelectedCity,
} = useLocationData();

const navigate = useNavigate();

const handleSearch = (state,city) => {
 if (city) {
    navigate(
      `/search-results?state=${encodeURIComponent(
        state
      )}&city=${encodeURIComponent(city)}`
    );
  } else {
    navigate(
      `/search-results?state=${encodeURIComponent(state)}`
    );
  }
}

console.log(states);

  return (
    <div
      style={{
        margin: "150px",
        marginTop: "-150px",
        backgroundColor: "#fff",
        padding: "50px",
        borderRadius: "16px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.05)"
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginLeft: "150px",
          marginRight: "50px",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
      <SearchSection
        variant = "home"
        states={states}
        selectedState={selectedState}
        setSelectedState={setSelectedState}
        cities={cities}
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
        onSearch={handleSearch}
      />
      </div>
      <p
        style={{
          textAlign: "center",
          fontSize: "20px",
          fontWeight: "500",
          color: "#1B3C74",
          marginTop: "60px",
          marginBottom: "40px",
        }}
      >
        You may be looking for
      </p>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "3rem",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {category.map((cat, index) => (
          <Link
            key={index}
            to="/"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "160px",
              height: "120px",
              backgroundColor: "#f9fbff",
              border: "2px solid transparent",
              borderRadius: "12px",
              color: "#1B3C74",
              textDecoration: "none",
              fontWeight: "600",
              fontSize: "16px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.border = "2px solid #2aa7ff";
              e.currentTarget.style.backgroundColor = "#e9f5ff";
              e.currentTarget.style.transform = "translateY(-3px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.border = "2px solid transparent";
              e.currentTarget.style.backgroundColor = "#f9fbff";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <img src={cat.image} alt="category"/> {cat.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
