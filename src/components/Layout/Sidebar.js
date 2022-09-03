import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Drawer,
  Toolbar,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";

import AssuredWorkloadRoundedIcon from "@mui/icons-material/AssuredWorkloadRounded";

const drawer = (
  <div>
    <Toolbar>
      <Typography variant="h6">Sunartha Warehouse</Typography>
    </Toolbar>
    <Divider light />
    <List>
      <ListItem>
        <ListItemButton>
          <ListItemIcon>
            <AssuredWorkloadRoundedIcon sx={{ color: "#fff" }} />
          </ListItemIcon>
          <Link
            to="/warehouse"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <ListItemText primary="Warehouse" />
          </Link>
        </ListItemButton>
      </ListItem>
    </List>
  </div>
);

const Sidebar = ({ drawerWidth, mobileOpen, setMobileOpen, window }) => {
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        container={container}
        open={mobileOpen}
        onClose={() => setMobileOpen(!mobileOpen)}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

Sidebar.propTypes = {
  window: PropTypes.func,
};

export default Sidebar;
