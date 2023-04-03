import selectCategoriesForVegetables from './selectCategoriesForVegetables';
import selectCategoriesForMilk from './selectCategoriesForMilk';
import selectCategoriesForMeat from './selectCategoriesForMeat';
import selectCategoriesForGrains from "./selectCategoriesForGrains";
import getRandomIntegerInRange from './getRandomIntInRange';
import { PersonData, ServingsDataRange } from '../types';
import { FOOD_CATEGORY } from './CATEGORY_LIST';

/**
 * Calculates a random number of servings within the provided range.
 */
const calculateServingsCount = (servingsRange: number[]): number => {
  return servingsRange.length > 1 ? getRandomIntegerInRange(servingsRange[0], servingsRange[1]) : servingsRange[0];
};

/**
 * Selects optimal food categories for a given food group and servings range, based on a person's data.
 */
const selectOptimalFoodCategories = (
    servingsData: ServingsDataRange,
    personData: PersonData
): string[] => {
  const servingsCount: number = calculateServingsCount(servingsData.servingsRange);
  switch (servingsData.fgid) {
    case FOOD_CATEGORY.VegetablesAndFruit: {
      return selectCategoriesForVegetables(servingsCount);
    }
    case FOOD_CATEGORY.Grains: {
      return selectCategoriesForGrains(servingsCount);
    }
    case FOOD_CATEGORY.MilkAndAlts: {
      return selectCategoriesForMilk(servingsCount, personData.lactoseIntolerance);
    }
    case FOOD_CATEGORY.MeatAndAlts: {
      return selectCategoriesForMeat(servingsCount);
    }
    default: {
      return [];
    }
  }
};

export default selectOptimalFoodCategories;