import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  
  Button,
  
  Box,
} from "@mui/material";
import Logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const navItems = ["Find Doctors", "Hospitals", "Medicines", "Services","Software for Providers" , "Facilities"];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  

  return (
    <AppBar position="static"  sx={{width: "100%"}}>
        <Toolbar>
          <Link to="/">
            <Box
          component="img"
          src={Logo}
          alt="Logo"
          sx={{ height: 40, mr: 2 }} // adjust height and margin
        />
        </Link>
        <Box sx={{ flexGrow: 1 }} />
            <Box>
                {navItems.map((item)=>(<Button key={item} color="inherit">
                    {item}
                </Button>))}
                <Button component={Link} to="/my-bookings" variant="contained"> My Bookings</Button>
            </Box>
        </Toolbar>
    </AppBar>
  );
};

export default Navbar;
