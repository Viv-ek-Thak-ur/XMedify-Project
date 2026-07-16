import styles from "./HospitalCard.module.css";
import Hospital from "../../assets/hospital.svg";
import ThumbIcon from "../../assets/ThumbIcon.svg";
import Rupee from "../../assets/₹.svg";
import { useState } from "react";
import BookingPanel from "../BookingPanel/BookingPanel";

export default function HospitalCard({ hospital, booking }) {
  const [showBooking, setShowBooking] = useState(false);

  const handleBooking = (date, time) => {
  const newBooking = {
    hospital,
    bookingDate: date,
    bookingTime: time,
  };

 

  const bookings =
    JSON.parse(localStorage.getItem("bookings")) || [];

  bookings.push(newBooking);

 

  localStorage.setItem(
    "bookings",
    JSON.stringify(bookings)
  );

 

  alert("Booking Confirmed!");
  setShowBooking(false);
};

  return (
    <div className={styles.card}>
      {/* Top Section */}
      <div className={styles.topSection}>
        <div className={styles.leftSection}>
          <img
            src={Hospital}
            alt="Hospital"
            className={styles.hospitalImage}
          />

          <div className={styles.hospitalInfo}>
            <h3>{hospital["Hospital Name"]}</h3>

            <p>
              <strong>
                {hospital.City}, {hospital.State}
              </strong>
            </p>

            <p>{hospital.Address}</p>

            <p>
              <span className={styles.free}>FREE</span>{" "}
              <img src={Rupee} alt="Rupee" />
              <s>500</s>{" "}
              Consultation fee at clinic.
            </p>

            <img
              src={ThumbIcon}
              alt="Thumb"
              className={styles.thumbIcon}
            />
          </div>
        </div>

        <div className={styles.rightSection}>

          {booking ? (

            <>

              <div className={styles.bookingInfo}>
                <span className={styles.bookingDate}>
                  {new Date(booking.bookingDate).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                   })}
                </span>

                <span className={styles.bookingTime}>
                  {booking.bookingTime}
                </span>
              </div>
            </>

          ) : (

            <>
              <p className={styles.available}>
                Available Today
              </p>

              <button
                className={styles.bookButton}
                onClick={() =>
                  setShowBooking(!showBooking)
                }
              >
                {showBooking
                  ? "Hide Slots"
                  : "Book FREE Center Visit"}
              </button>
            </>

          )}

        </div>
      </div>

      {/* Booking Panel */}
      {!booking && showBooking && (
        <div className={styles.booking}>
          <BookingPanel onBook={handleBooking} />
        </div>
      )}
    </div>
  );
}