import React from 'react';
import {FoodCategory, MenuItemWithQuantity} from '../../types';
import {FOOD_CATEGORY_TITLES} from '../../service/CATEGORY_LIST';
import ProductItem from './ProductItem';
import styles from './Menu.module.css';
import {Typography} from "@mui/material";

interface Props {
    foodCategory: FoodCategory;
    products: MenuItemWithQuantity[];
}

const FoodCategoryItem: React.FC<Props> = ({foodCategory, products}) => (
    <div className={styles.FoodCategoryItem}>
        <Typography variant="body1" gutterBottom>
            <b>{FOOD_CATEGORY_TITLES[foodCategory]}</b>
        </Typography>
        {products.map(product => (
            <ProductItem key={product.food} product={product}/>
        ))}
    </div>
);

export default FoodCategoryItem;
