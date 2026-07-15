import { useNavigate } from "react-router-dom";
import logo from "../../assets/Group 8.svg";



export default function Navbar(){
    const navs = [
  "Find Doctors",
  "Hospitals",
  "Medicines",
  "Surgeries",
  "Software For Provider",
  "Facilities",
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
       <a href="/"> <img src={logo} alt="MedifyLogo" /> </a>
        <div style={{ display: "flex", gap: "60px", alignItems: "center" }}>
          {navs.map((nav, index) => (
            <a
              key={index}
              href="#"
              style={{
                textDecoration: "none",
                color: "black",
                lineHeight: "1",
                height: "100%",
              }}
            >
              {nav}
            </a>
          ))}
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
        </div>
      </nav>
        </div>
    )
}