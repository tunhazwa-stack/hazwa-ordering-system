import React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import { Toolbar } from "@mui/material";
import Typography from "@mui/material/Typography";

const BaseLayout = () => {
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
          </Toolbar>
        </AppBar>
      </div>
    </Box>
  );
};

export default BaseLayout;
