import { GrainCategory } from './CATEGORY_LIST';

/**
 * This function randomly assigns grain categories based on the number of servings, with the constraint that at least
 * half of the servings must come from the whole grain category.
 */
const selectGrainCategories = (servingsCount: number): string[] => {
  const categories: string[] = [];

  const wholeGrainCount = Math.ceil(servingsCount / 2);

  for (let i = 0; i < servingsCount; i++) {
    const category = i < wholeGrainCount ? GrainCategory.Whole : GrainCategory.NonWhole;
    categories.push(category);
  }
  return categories;
};

export default selectGrainCategories;