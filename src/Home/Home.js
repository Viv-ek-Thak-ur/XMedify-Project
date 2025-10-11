import React from "react";
import { Container, Typography } from "@mui/material";
import HeroSection from "./HeroSection";
import Navbar from "../Components/navbar/NavbarSection";
import CategorySection from "../Components/categorySection/CategorySection";

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
    </>
  );
}

export default Home;
