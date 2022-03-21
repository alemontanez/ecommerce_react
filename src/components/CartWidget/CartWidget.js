import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function CartWidget() {
    return (
        <IconButton color="primary" aria-label="add to shopping cart">
          <ShoppingCartIcon color="success"/>
        </IconButton>
    );
  }