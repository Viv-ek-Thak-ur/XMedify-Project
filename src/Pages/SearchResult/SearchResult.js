import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import HospitalCard from "../../Components/HospitalCard/HospitalCard";
import SearchSection from "../../Components/SearchSection/SearchSection";
import useLocationData from "../../hooks/useLocationData";
import styles from "./SearchResults.module.css";
import Advertisement from "../../Components/Advertisment/Advertisement";

export default function SearchResult() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const urlState = searchParams.get("state") || "";
  const urlCity = searchParams.get("city") || "";

  const [hospitals, setHospitals] = useState([]);
  const [hospitalCount,setHospitalCount] = useState(0);

  const {
    states,
    selectedState,
    setSelectedState,
    cities,
    selectedCity,
    setSelectedCity,
  } = useLocationData();

  // Sync dropdowns with URL when page loads or URL changes
  useEffect(() => {
    setSelectedState(urlState);
    setSelectedCity(urlCity);
  }, [urlState, urlCity, setSelectedState, setSelectedCity]);

  // Fetch hospitals whenever URL changes
  useEffect(() => {
    if (!urlState ) return;
    const fetchHospitals = async () => {
       try {
      const url = urlCity
        ? `https://meddata-backend.onrender.com/data?state=${encodeURIComponent(
            urlState
          )}&city=${encodeURIComponent(urlCity)}`
        : `https://meddata-backend.onrender.com/data?state=${encodeURIComponent(
            urlState
          )}`;

      const res = await fetch(url);
      const data = await res.json();

      setHospitals(data);
    } catch (err) {
      console.error(err);
    }
    };

    fetchHospitals();
  }, [urlState, urlCity]);

//   fetch state hospitals for count 

useEffect(()=>{
    const fetchHospitalCount = async () => {
        try{
            const res = await fetch(`https://meddata-backend.onrender.com/data?state=${encodeURIComponent(urlState)}`);
            const data = await res.json();
            setHospitalCount(data.length)
        } catch (err){
            console.error(err);
        }
    }
    fetchHospitalCount();
},[urlState]);


  const handleSearch = (state, city) => {
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
};

  return (
    <div className={styles.resultsContainer}>
      <SearchSection
        variant="results"
        states={states}
        selectedState={selectedState}
        setSelectedState={setSelectedState}
        cities={cities}
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
        onSearch={handleSearch}
      />
      {urlState && (
            <h1>
                {urlCity ? hospitals.length : hospitalCount} medical centers available in{" "}
                {urlCity.toLowerCase || urlState}
            </h1>
                      )}
      <div className={styles.content}>
        <div className={styles.left}>
            {hospitals.map((hospital) => (
                <HospitalCard
                  key={hospital["Provider ID"]}
                  hospital={hospital}
                    />
                ))}
        </div>
        <div className={styles.right}>
           <Advertisement />
        </div>
      </div>            
    </div>
  );
}