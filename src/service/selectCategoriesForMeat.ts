import { MEAT_CATEGORIES_LIST, MeatCategory } from './CATEGORY_LIST';

/**
 Selects random meat categories based on the number of servings
 */

const selectCategoriesForMeat = (servingsCount: number) => {
  const categories: string[] = [];

  for (let i = 0; i < servingsCount; i++) {
    const randomIndex = Math.floor(Math.random() * MEAT_CATEGORIES_LIST.length);
    categories.push(MEAT_CATEGORIES_LIST[randomIndex] || MeatCategory.MeatAlt);
  }

  return categories;
};

export default selectCategoriesForMeat;