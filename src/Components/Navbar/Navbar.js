import { useNavigate, Link } from "react-router-dom";
import logo from "../../assets/Group 8.svg";
import styles from "./Navbar.module.css";
import { useState } from "react";
import MenuIcon from "../../assets/burger-menu-right-svgrepo-com.svg";


export default function Navbar(){

  const [menuOpen,setMenuOpen] =useState(false)

   const navs = [
  { label: "Find Doctors", path: "/" },
  { label: "Hospitals", path: "/search-results" },
  { label: "Medicines", path: "/" },
  { label: "Surgeries", path: "/" },
  { label: "Software For Provider", path: "/" },
  { label: "Facilities", path: "/" },
];
const navigate = useNavigate();

const handleMyBookings = () => {
  navigate(`/my-bookings`);

}



   return (
  <>
    <div className={styles.topBar}>
       <span className={styles.topBarText}>
          The health and well-being of our patients and their health care team
          will always be our priority, so we follow the best practices for
          cleanliness.
        </span>
    </div>

    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <img src={logo} alt="Medify Logo" />
        </Link>
        <div className={menuOpen?styles.hamExpand:""}>
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕": <img src = {MenuIcon} alt = "Menu" className={styles.menuIcon}/>}
        </button>

        <div className={`${styles.navLinks} ${menuOpen?styles.showMenu:""}`}>
          {navs.map((nav) => (
            <Link
              key={nav.label}
              to={nav.path}
              className={styles.navLink}
            >
              {nav.label}
            </Link>
          ))}
          <button
          type="button"
          onClick={handleMyBookings}
          className={styles.bookingBtn}
        >
          My Bookings
        </button>
        </div>
     
        </div>

        
      </div>
    </nav>
  </>
);
}