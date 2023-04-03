import selectOptimalFoodCategories from './selectOptimalFoodCategories';
import getRandomFoodByCategory from './getRandomFoodByCategory';
import {
  PersonData,
  MenuItem,
  MenuItemWithQuantity,
  PersonDataWithMenu,
  MenuByFoodCategory,
} from '../types';
import calculateServings from './calculateServings';

/**
 * Count the number of each type of MenuItem in an array and return a new array with the quantity added to each
 * MenuItem object.
 */
const countProduct = (products: MenuItem[]): MenuItemWithQuantity[] => {
    const groupedByName: { [key: string]: MenuItem[] } = {};
    products.forEach((product: MenuItem) => {
        if (!groupedByName[product.food]) {
            groupedByName[product.food] = [product];
        } else {
            groupedByName[product.food].push(product);
        }
    });
    const productsByGroup: MenuItem[][] = Object.values(groupedByName);

    return productsByGroup.map((productGroup: MenuItem[]) => {
        const firstProduct: MenuItem = productGroup[0];
        return {
            ...firstProduct,
            quantity: productGroup.length,
        };
    });
};

/**
 * Get a random integer within a specified range for each person in an array of PersonData objects, and generate a menu
 * for each person.
 */
const getRandomIntegerInRange = (personData: PersonData[]): PersonDataWithMenu[] =>
  personData.map(personData => {
    const servings = calculateServings(personData);
    const menu = servings.reduce((acc, servingsData) => {
      const foodCategories = selectOptimalFoodCategories(servingsData, personData);
      acc[servingsData.fgid] = countProduct(
        foodCategories.map(category => getRandomFoodByCategory(category)!)
      );
      return acc;
    }, {} as MenuByFoodCategory);

    return { ...personData, menu };
  });

export default getRandomIntegerInRange;
