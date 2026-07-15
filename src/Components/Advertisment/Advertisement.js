import styles from "./Advertisement.module.css";
import Banner from "../../assets/BannerAd.png";

export default function Advertisement() {
  return (
    <div className={styles.container}>
      <img
        src={Banner}
        alt="Advertisement"
        className={styles.banner}
      />
    </div>
  );
}