import * as React from "react";
// import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
// Add an icon to click the button..
import AdsClickIcon from "@mui/icons-material/AdsClick";
import { grey } from "@mui/material/colors";
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
        sx={{
          backgroundColor: grey[900],
          "&:hover": {
            backgroundColor: grey[700],
          },
        }}
        endIcon={<AdsClickIcon />}
      >
        {children}
      </Button>
    </>
  );
};

// export default Button;
export default MyButton;
