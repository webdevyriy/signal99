import {MilkCategory, MILK_CATEGORIES_LIST} from './CATEGORY_LIST';

/**
 Selects random milk categories based on the number of servings and lactose intolerance
 */

const selectCategoriesForMilk = (servingsCount: number, lactoseIntolerance = false) => {
    const {MilkAlt} = MilkCategory;
    const categories: string[] = [];

    for (let i = 0; i < servingsCount; i++) {
        if (lactoseIntolerance) {
            categories.push(MilkAlt);
            continue;
        }
        const randomIndex = Math.floor(Math.random() * MILK_CATEGORIES_LIST.length);
        categories.push(MILK_CATEGORIES_LIST[randomIndex] || MilkAlt);
    }
    return categories;
};

export default selectCategoriesForMilk;