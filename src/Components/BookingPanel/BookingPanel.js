import { useState } from "react";
import styles from "./BookingPanel.module.css";

const slotGroups = [
  {
    title: "Morning",
    slots: ["11:30 AM"],
  },
  {
    title: "Afternoon",
    slots: ["12:00 PM", "12:30 PM", "1:30 PM", "2:00 PM", "2:30 PM"],
  },
  {
    title: "Evening",
    slots: ["6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM"],
  },
];

const today = new Date();

const dates = Array.from({ length: 3 }, (_, i) => {
  const date = new Date(today);
  date.setDate(today.getDate() + i);
  return date;
});

export default function BookingPanel({ onBook }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleConfirmBooking = () => {
    if (!selectedDate || !selectedTime) {
      alert("Please select both a date and a time.");
      return;
    }

    onBook(selectedDate, selectedTime);
  };

  return (
    <div className={styles.bookingPanel}>
      {/* Dates */}
      <div className={styles.dateContainer}>
        {dates.map((date, index) => (
          <button
            key={date.toISOString()}
            className={`${styles.dateButton} ${
              selectedDate?.toDateString() === date.toDateString()
                ? styles.selectedDate
                : ""
            }`}
            onClick={() => setSelectedDate(date)}
          >
            <p className={styles.day}>
              {index === 0
                ? "Today"
                : index === 1
                ? "Tomorrow"
                : date.toLocaleDateString("en-IN", {
                    weekday: "short",
                    day: "numeric",
                    month: "short",
                  })}
            </p>
          </button>
        ))}
      </div>

      {/* Slot Rows */}
      {slotGroups.map((group) => (
        <div key={group.title} className={styles.slotRow}>
          <p className={styles.slotHeading}>
            {group.title}
          </p>

          <div className={styles.slotContainer}>
            {group.slots.map((slot) => (
              <button
                key={slot}
                className={`${styles.slotButton} ${
                  selectedTime === slot ? styles.selectedSlot : ""
                }`}
                onClick={() => setSelectedTime(slot)}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>
      ))}

      <div className={styles.buttonContainer}>
        <button
          className={styles.confirmButton}
          onClick={handleConfirmBooking}
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
}