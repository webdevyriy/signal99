import React from 'react';
import { MenuItemWithQuantity } from '../../types';
import {Typography} from "@mui/material";

interface Props {
  product: MenuItemWithQuantity;
}

const ProductItem: React.FC<Props> = ({ product }) => (
    <Typography variant="body2" gutterBottom>
        x{product.quantity} {product.food} {product.srvg_sz}
    </Typography>
);

export default ProductItem;
