import { PersonData } from './personData.interface';
import { MenuByFoodCategory } from './menuByFoodCategory.type';

export interface PersonDataWithMenu extends PersonData {
    menu: MenuByFoodCategory;
}

export default PersonDataWithMenu;