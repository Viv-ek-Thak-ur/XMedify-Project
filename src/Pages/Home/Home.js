// import { useEffect } from "react";
import CategorySection from "../../Components/CategorySection/CategorySection";
import HeroSection from "../../Components/HeroSection/HeroSection";

export default function Home(){

    // useEffect(()=>{
    //     localStorage.clear();
    // },[])
    return(
        <>
        <HeroSection/>
        <CategorySection/>
        </>
    )
    }
