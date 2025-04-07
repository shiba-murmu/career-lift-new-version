import * as React from "react";
// import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
// Add an icon to click the button..
import AdsClickIcon from "@mui/icons-material/AdsClick";

import './btn.css'
import { blue } from "@mui/material/colors";
/**
 *
 * @param {import("@mui/material").ButtonProps} param0
 * @returns
 *
 * This is the button components here to be used in the whole website
 */

const MyButton = ({ children }) => {
  return (
    <>
      <Button
        variant="contained"
        size="large"
        className="btn-grad"
        sx={{
          backgroundColor: blue[900],
          "&:hover": {
            backgroundColor: blue[700],
          },
          width: {
            xs: '100%',  // full width on extra-small screens
            sm: 'auto',  // auto width on small and larger screens
          },
        }}
        color = "light"
        endIcon={<AdsClickIcon />}
      >
        {children}
      </Button>
    </>
  );
};

// export default Button;
export default MyButton;
