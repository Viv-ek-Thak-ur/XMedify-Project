import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../assets/logo.svg"

const navItems = ["Find Doctors", "Hospitals", "Medicines", "Services","Software for Providers" , "Facilities"];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  

  return (
    <AppBar position="static"  sx={{width: "100%"}}>
        <Toolbar>
            <Box
          component="img"
          src={Logo}
          alt="Logo"
          sx={{ height: 40, mr: 2 }} // adjust height and margin
        />
        <Box sx={{ flexGrow: 1 }} />
            <Box>
                {navItems.map((item)=>(<Button key={item} color="inherit">
                    {item}
                </Button>))}
                <Button variant="contained">My Bookings</Button>
            </Box>
        </Toolbar>
    </AppBar>
  );
};

export default Navbar;
