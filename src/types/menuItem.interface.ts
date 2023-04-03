import { FoodCategory } from './foodCategory.enum';

export interface MenuItem {
    fgcat_id: string;
    fgid: FoodCategory;
    food: string;
    srvg_sz: string;
}

export default MenuItem;