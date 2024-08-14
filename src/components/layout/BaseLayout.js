import React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import { Toolbar } from "@mui/material";
import Typography from "@mui/material/Typography";
import {useNavigate} from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const BaseLayout = () => {
  const navigate = useNavigate();

  const goToCartPage = () => {
    navigate ('/cart');
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <div>
        <AppBar position="static">
          <Toolbar style={{ backgroundColor: "whitesmoke" }}>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
              style={{ color: "grey" }}
            >
              ABC Shop
            </Typography>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              className="remove-button"
              onClick={goToCartPage}
            >
              <ShoppingCartIcon style={{color:"grey"}}/>
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    </Box>
  );
};

export default BaseLayout;
