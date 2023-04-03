import {FOOD_NUTRITION_DATA} from '../data';
import {MenuItem} from '../types';

/**
 * Returns a random product from the provided category.
 */
const getRandomFoodByCategory = (category: string) => {
    // Filter the products by category
    const productsInCategory = (FOOD_NUTRITION_DATA as MenuItem[]).filter(food => food.fgcat_id === category);
    // Generate a random index to select a product
    const randomIndex = Math.floor(Math.random() * productsInCategory.length);
    // Return a random product from the category
    return productsInCategory[randomIndex];
}

export default getRandomFoodByCategory;