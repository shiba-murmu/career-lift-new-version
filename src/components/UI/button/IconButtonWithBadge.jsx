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

/**
 * This button component use when we need the button 
 * with number notification in the button top also..
 */


const SquareButton = styled(Button)(({ theme }) => ({
  width: 150,
  height: 40,
  minWidth: 0,
  borderRadius: 4, // square-like button with slight rounding
  textTransform: 'none',
  fontWeight: 'medium',
}));

export default function IconButtonWithBadge({text, badgeNumber, badgeColor , btnColor}) {
  return (
    <CartBadge badgeContent={badgeNumber} color={badgeColor}>
      <SquareButton variant="contained" color={btnColor}>
        {text}
      </SquareButton>
    </CartBadge>
  );
}
