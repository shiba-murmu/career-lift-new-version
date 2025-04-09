import * as React from 'react';
import { styled } from '@mui/material/styles';
import Badge, { badgeClasses } from '@mui/material/Badge';
import Button from '@mui/material/Button';

const CartBadge = styled(Badge)(({ theme }) => ({
  [`& .${badgeClasses.badge}`]: {
    top: 8,
    right: 8,
    padding: '0 4px',
  },
}));

const SquareButton = styled(Button)(({ theme }) => ({
  width: 130,
  height: 40,
  minWidth: 0,
  borderRadius: 4, // square-like button with slight rounding
  textTransform: 'none',
  fontWeight: 'medium',
}));

export default function IconButtonWithBadge({text, badgeNumber}) {
  return (
    <CartBadge badgeContent={badgeNumber} color="primary">
      <SquareButton variant="contained" color="success">
        {text}
      </SquareButton>
    </CartBadge>
  );
}
