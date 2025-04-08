import React from 'react'
import Button from '@mui/material/Button';

function ButtonForUse({children , colorBackground}) {
  return (
    <Button variant="contained" color={colorBackground}>
        {children}
      </Button>
  )
}

export default ButtonForUse;