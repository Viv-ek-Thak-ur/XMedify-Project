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
            <div className={styles.left}>
                <h1>My Bookings</h1>
               {bookings.length === 0 ?<p>No Bookings Yet</p> :(bookings.map((booking,index)=>(
                    <HospitalCard
                        key={booking.hospital["Provider ID"] + index}
                        hospital={booking.hospital}
                        booking={booking}
                    />
                )))} 
            </div>
        </div>
        

    )
}