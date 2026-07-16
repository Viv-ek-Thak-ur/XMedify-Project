import { useNavigate, Link } from "react-router-dom";
import logo from "../../assets/Group 8.svg";



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

    return(
        <div>
            <p
        style={{
          backgroundColor: "#2AA7FF",
          margin: "0",
          height: "30px",
          textAlign: "center",
          paddingTop: "5px",
          color: "white",
          fontSize: "14px",
          lineHeight: "30px",
        }}
      >
        {" "}
        The health and well-being of our patients and their health care team
        will always be our priority, so we follow the best practices for
        cleanliness.
      </p>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin:"100px",
          marginTop:"10px",
          alignItems: "center",
        }}
      >
          <Link to="/">
             <img src={logo} alt="MedifyLogo" />
          </Link>

          <div style={{ display: "flex", gap: "60px", alignItems: "center" }}>
            {navs.map((nav) => (
                <Link
                  key={nav.label}
                  to={nav.path}
                  style={{
                    textDecoration: "none",
                    color: "black",
                    lineHeight: "1",
                    height: "100%",
                  }}
                >
                  {nav.label}
                </Link>
              ))}
          </div>
          <button
            type="button"
            onClick={handleMyBookings}
            onMouseEnter={(e)=> e.target.style.backgroundColor = "#1f86d0ff"}
            onMouseLeave={(e)=> e.target.style.backgroundColor = "#2aa7ff"}
            style={{
              backgroundColor: "#2aa7ff",
              border: "0",
              height: "2rem",
              borderRadius: "4px",
              color: "#ffffff"
            }}
          >
            My Bookings
          </button>
        
      </nav>
        </div>
    )
}