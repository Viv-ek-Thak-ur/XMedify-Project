import { useEffect, useState } from "react";
import styles from "./MyBookings.module.css";
import HospitalCard from "../../Components/HospitalCard/HospitalCard";

export default function MyBookings(){
    const [bookings, setBookings] = useState([]);

    useEffect(()=>{
        const storedBookings = JSON.parse(localStorage.getItem("bookings")) || [] ;
        setBookings(storedBookings);

    },[]);

   

    return(
     
        <div className={styles.container}>
            <div className={styles.heading}>
            <h1>My Bookings</h1>
            </div>
            <div className={styles.left}>
                
               {bookings.length === 0 ? (
                            <p>No Bookings Yet</p>
                            ) : (
                            bookings.map((booking, index) => {
                                const hospital = booking.hospital || booking;

                                return (
                                <HospitalCard
                                    key={
                                    (hospital["Provider ID"] || hospital["Hospital Name"]) + index
                                    }
                                    hospital={hospital}
                                    booking={booking}
                                />
                                );
                            })
                 )}
            </div>
        </div>
        

    )
}