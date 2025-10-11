import { Container,Box,Typography, Button } from "@mui/material";
import HeroImg from "../assets/hero_image.svg";

function HeroSection({children}){
    return(
        <Box>
            {children}
        <Box sx={{display:"flex"}}>
        <Container
        
        maxWidth = "lg"
        sx={{
            textAlign:"left",
        }}
        >
            <Typography variant="h6">Skip the travel! Find Online <h1>Medical Centers</h1></Typography>
            <Typography>Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.</Typography>
            <Button variant="contained">Find Centers</Button>
        </Container>
        
        <Box
        component="img"
        src={HeroImg}
        alt="Doctors"
        />
        </Box>  

        </Box>
    )
}

export default HeroSection;