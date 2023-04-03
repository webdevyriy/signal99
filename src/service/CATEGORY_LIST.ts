import { FoodCategory } from '../types';

export const FOOD_CATEGORY_TITLES : {[key in FoodCategory]: string} = {
  [FoodCategory.VegetablesAndFruit]: 'Vegetables and Fruit',
  [FoodCategory.Grains]: 'Grains',
  [FoodCategory.MilkAndAlts]: 'Milk and Alternatives',
  [FoodCategory.MeatAndAlts]: 'Meat and Alternatives',
};

export const FOOD_CATEGORY: { [key: string]: FoodCategory } = {
  VegetablesAndFruit: FoodCategory.VegetablesAndFruit,
  Grains: FoodCategory.Grains,
  MilkAndAlts: FoodCategory.MilkAndAlts,
  MeatAndAlts: FoodCategory.MeatAndAlts,
};

export const FOOD_CATEGORY_LIST: FoodCategory[] = Object.values(FOOD_CATEGORY);

export enum VegetableCategory {
  NonDarkGreenOrOrange = '0',
  DarkGreen = '1',
  Orange = '2',
}

export enum MilkCategory {
  Milk = '5',
  MilkAlt = '6',
}

export enum MeatCategory {
  MeatAlt = '7',
  Meat = '8',
}

export const MILK_CATEGORIES_LIST: MilkCategory[] = Object.values(MilkCategory);

export const MEAT_CATEGORIES_LIST: MeatCategory[] = Object.values(MeatCategory);

export const VEGETABLE_CATEGORIES_LIST: VegetableCategory[] = Object.values(VegetableCategory);

export enum GrainCategory {
  NonWhole = '4',
  Whole = '3',
}

export const GRAINS_CATEGORIES_LIST: GrainCategory[] = Object.values(GrainCategory);