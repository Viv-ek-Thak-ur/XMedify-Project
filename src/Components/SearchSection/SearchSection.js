import SearchBar from "../SearchBar/SearchBar";
import BtnIcon from "../../assets/btnsearchIcon.svg";
import styles from "./SearchSection.module.css";

export default function SearchSection({
variant = "results",
  states,
  selectedState,
  setSelectedState,
  cities,
  selectedCity,
  setSelectedCity,
  onSearch,
}) {
  const handleSearch = () => {
    if (!selectedState) {
      alert("Please select State ");
      return;
    }

    onSearch(selectedState, selectedCity);
  };

  return (
        <div className={`${styles.searchSection} ${
            variant === "home" ? styles.home : ""
        }`}>
      <div >    
      <SearchBar
        id="state"
        placeholder="State"
        options={states}
        value={selectedState}
        onChange={(e) => setSelectedState(e.target.value)}
      />
      </div>
      <div id="city">
      <SearchBar
        id="city"
        placeholder="City"
        options={cities}
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.target.value)}
      />
      </div>

      <button
        id="searchBtn"
        type="submit"
        className={styles.searchButton}
        onClick={handleSearch}
      >
        <img src={BtnIcon} alt="Search" />
        Search
      </button>
    </div>
  );
}