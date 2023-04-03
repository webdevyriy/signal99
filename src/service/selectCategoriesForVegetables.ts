import { VegetableCategory, VEGETABLE_CATEGORIES_LIST } from './CATEGORY_LIST';

/**
 Returns an array of vegetable categories based on the number of servings
 */
const selectCategoriesForVegetables = (servingsCount : number) => {
  const categories: string[] = [];

  for (let i = 0; i < servingsCount; i++) {
    if (!categories.includes(VegetableCategory.DarkGreen)) {
      categories.push(VegetableCategory.DarkGreen);
      continue;
    }
    if (!categories.includes(VegetableCategory.Orange)) {
      categories.push(VegetableCategory.Orange);
      continue;
    }
    const nonDarkGreenOrOrangeCategories = VEGETABLE_CATEGORIES_LIST.filter(
        (category) =>
            category !== VegetableCategory.DarkGreen && category !== VegetableCategory.Orange
    );
    const randomIndex = Math.floor(Math.random() * nonDarkGreenOrOrangeCategories.length);
    categories.push(nonDarkGreenOrOrangeCategories[randomIndex] || VegetableCategory.NonDarkGreenOrOrange);
  }
  return categories;
};

export default selectCategoriesForVegetables;