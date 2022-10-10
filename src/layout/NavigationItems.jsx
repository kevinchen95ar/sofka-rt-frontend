import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AddIcon from "@mui/icons-material/Add";
import RocketIcon from "@mui/icons-material/Rocket";
import { NavLink } from "react-router-dom";

const navLinkStyle = { textDecoration: "none", color: "black" };

export const mainListItems = (
  <React.Fragment>
    <NavLink to="/spaceship/create" style={navLinkStyle}>
      <ListItemButton>
        <ListItemIcon>
          <AddIcon />
        </ListItemIcon>
        <ListItemText primary="Crear naves" />
      </ListItemButton>
    </NavLink>

    <NavLink to="/spaceship" style={navLinkStyle}>
      <ListItemButton>
        <ListItemIcon>
          <RocketIcon />
        </ListItemIcon>
        <ListItemText primary="Naves" />
      </ListItemButton>
    </NavLink>
  </React.Fragment>
);
