import { FoodCategory } from './foodCategory.enum';

export interface ServingsDataInfo {
    fgid: FoodCategory;
    gender: string;
    ages: string;
    servings: string;
}

export default ServingsDataInfo;