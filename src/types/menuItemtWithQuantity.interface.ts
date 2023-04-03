import { MenuItem } from './menuItem.interface';

export interface MenuItemWithQuantity extends MenuItem {
    quantity: number;
}

export default MenuItemWithQuantity;