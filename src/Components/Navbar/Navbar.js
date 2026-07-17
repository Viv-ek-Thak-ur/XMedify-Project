import { useNavigate, Link } from "react-router-dom";
import logo from "../../assets/Group 8.svg";
import styles from "./Navbar.module.css";



export default function Navbar(){
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
      The health and well-being of our patients and their health care team
      will always be our priority, so we follow the best practices for
      cleanliness.
    </div>

    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <img src={logo} alt="Medify Logo" />
        </Link>

        <div className={styles.navLinks}>
          {navs.map((nav) => (
            <Link
              key={nav.label}
              to={nav.path}
              className={styles.navLink}
            >
              {nav.label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          onClick={handleMyBookings}
          className={styles.bookingBtn}
        >
          My Bookings
        </button>
      </div>
    </nav>
  </>
);
}