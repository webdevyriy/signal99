import { FoodCategory } from './foodCategory.enum';
import { MenuItemWithQuantity } from './menuItemtWithQuantity.interface';

export type MenuByFoodCategory = {
    [key in FoodCategory]: MenuItemWithQuantity[];
};

export default MenuByFoodCategory;