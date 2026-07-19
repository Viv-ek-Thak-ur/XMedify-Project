import HeroImage from "../../assets/NicePng_doctor-png_336282 1.svg";
import styles from "./HeroSection.module.css";

export default function HeroSection(){
    return(
        <div 
          className={styles.container}
          >
        <div className={styles.leftSection} >
          <h2 style={{ fontWeight: "normal" }}>Skip the travel! Find Online</h2>
          <h1>
            Medical <span >Centers</span>
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
            className={styles.findBtn}
          >
            Find Centres
          </button>
        </div>
        <div className={styles.rightSection}>
          <img
            src={HeroImage}
            alt="DoctorsImage"
            className={styles.heroImageIcon}
          />
        </div>
      </div>

    )
}