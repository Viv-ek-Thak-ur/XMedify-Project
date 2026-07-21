
import { useNavigate , Link} from "react-router-dom";
import Doctor from "../../assets/u.svg";
import Labs from "../../assets/ae.svg";
import Hospitals from "../../assets/g.svg";
import Medical_Store from "../../assets/e.svg";
import Ambulance from "../../assets/h.svg";
import styles from "./CategorySection.module.css";


import useLocationData from "../../hooks/useLocationData";
import SearchSection from "../SearchSection/SearchSection";

const category = [
  { label: "Doctors", image: Doctor, link: "/" },
  { label: "Labs", image: Labs,  link: "/"  },
  { label: "Hospitals", image: Hospitals ,  link: "/search-results" },
  { label: "Medical Store", image: Medical_Store ,  link: "/" },
  { label: "Ambulance", image: Ambulance , link: "/" },
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



  return (
    <div className={styles.container}
     
    >
      <div className={styles.searchWrapper}
       
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
      <p className={styles.heading}
      >
        You may be looking for
      </p>
      <div className={styles.categoryGrid}
       
      >
        {category.map((cat, index) => (
          <Link
            className={styles.categoryLink}
            key={index}
            to={cat.link}
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
            <img className={styles.catImage}src={cat.image} alt="category"/> 
            <b className={styles.catLabel}>{cat.label}</b>
          </Link>
        ))}
      </div>
    </div>
  );
}
