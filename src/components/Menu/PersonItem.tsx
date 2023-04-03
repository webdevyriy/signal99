import React from 'react';
import { PersonDataWithMenu, FoodCategory } from '../../types';
import FoodCategoryItem from './FoodCategoryItem';
import styles from './Menu.module.css';
import {Typography} from "@mui/material";
interface Props {
    personData: PersonDataWithMenu;
}

const PersonItem: React.FC<Props> = ({
   personData: { name, gender, age, lactoseIntolerance, menu },
}) => (
  <div className={styles.PersonMenuItem}>
      <div className={styles.PersonMenuItemHeader}>
          <Typography variant="h6" gutterBottom>
              {name}
          </Typography>
          <Typography variant="body1" gutterBottom>
              <b>Gender:</b> {gender}
          </Typography>
          <Typography variant="body1" gutterBottom>
              <b>Age:</b> {age}
          </Typography>
          <Typography variant="body1" gutterBottom>
              <b>Lactose intolerance:</b> {lactoseIntolerance ? '+' : '-'}
          </Typography>
      </div>
      <div className={styles.PersonMenuItemHeaderContent}>
          {(Object.keys(menu) as FoodCategory[]).map(foodCategory => (
              <FoodCategoryItem key={foodCategory} foodCategory={foodCategory} products={menu[foodCategory]} />
          ))}
      </div>
  </div>
);

export default PersonItem;
