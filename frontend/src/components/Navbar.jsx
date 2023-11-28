import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import AddHomeIcon from "@mui/icons-material/AddHome";
import HolidayVillageIcon from "@mui/icons-material/HolidayVillage";
import { useTheme } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

export default function Navbar({ colorMode }) {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const NavList = () => (
    <Box role="presentation">
      <List>
        <ListItem>
          <ListItemButton component={Link} to="/houses/new">
            <ListItemIcon>
              <AddHomeIcon />
            </ListItemIcon>
            <ListItemText primary="Create House" />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemButton component={Link} to="/houses">
            <ListItemIcon>
              <HolidayVillageIcon />
            </ListItemIcon>
            <ListItemText primary="Houses" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={handleClick}
        >
          <MenuIcon />
        </IconButton>
        <Drawer open={open} onClose={handleClose}>
          <NavList />
        </Drawer>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Atiyeh Holdings
        </Typography>
        <IconButton onClick={colorMode.toggleColorMode} color="inherit">
          {theme.palette.mode === "dark" ? (
            <Brightness7Icon />
          ) : (
            <Brightness4Icon />
          )}
        </IconButton>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
}
