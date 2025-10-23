import React from "react";
import { Container, Typography } from "@mui/material";
import HeroSection from "./HeroSection";
import Navbar from "../Components/navbar/NavbarSection";
import CategorySection from "../Components/categorySection/CategorySection";
import SwiperSection from "../Components/SwiperSection/SwiperSection";
import SpecialitySection from "../Components/SpecialitySection/SpecialitySection";

function Home() {
  return (
    <>
      <Typography textAlign={"center"}>
        {" "}
        The health and well-being of our patients and their health care team
        will always be our priority, so we follow the best practices for
        cleanliness.
      </Typography>
      <HeroSection>
        
           <Navbar/>
       </HeroSection>
       <CategorySection/>
       <SwiperSection/>
       <SpecialitySection/>
    </>
  );
}

export default Home;
