import HeroImage from "../../assets/NicePng_doctor-png_336282 1.svg";

export default function HeroSection(){
    return(
        <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "100px",
        }}
      >
        <div style={{ padding: "3rem", width: "500px" }}>
          <h2 style={{ fontWeight: "normal" }}>Skip the travel! Find Online</h2>
          <h1>
            Medical <span style={{ color: "#2aa7ff" }}>Centers</span>
          </h1>
          <p>
            Connect instantly with a 24x7 specialist or choose to video visit a
            particular doctor.
          </p>
          <button
            type="button"
            onClick={() => alert("Hi")}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#1f86d0ff")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#2aa7ff")}
            style={{
              backgroundColor: "#2aa7ff",
              border: "0",
              height: "2rem",
              borderRadius: "4px",
              color: "#ffffff",
              width: "8rem",
            }}
          >
            Find Centres
          </button>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="DoctorsImage"
            style={{ width: "500px", height: "auto" }}
          />
        </div>
      </div>

    )
}