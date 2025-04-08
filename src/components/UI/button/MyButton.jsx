import * as React from "react";
// import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
// Add an icon to click the button..
import AdsClickIcon from "@mui/icons-material/AdsClick";

import "./btn.css";
import { blue } from "@mui/material/colors";
/**
 *
 *
 *
 * This is the button components here to be used in the whole website
 */

const MyButton = ({ children }) => {
  return (
    <>
      <Button
        variant="contained"
        endIcon={<AdsClickIcon />}
        size="large"
        sx={{
          width: { xs: "100%", sm: "auto" },
          fontSize: { xs: 14, sm: 16 },
        }}
      >
        {children}
      </Button>
    </>
  );
};

// export default Button;
export default MyButton;
