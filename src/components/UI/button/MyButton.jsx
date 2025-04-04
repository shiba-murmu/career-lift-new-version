import * as React from "react";
// import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

/**
 *
 * @param {import("@mui/material").ButtonProps} param0
 * @returns
 *
 * This is the button components here to be used in the whole website
 */

const MyButton = (props) => {
  return (
    <>
      <Button variant="contained" className={props.className}>
        {props.children}
      </Button>
    </>
  );
};

// export default Button;
export default MyButton;
