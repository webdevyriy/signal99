import {SERVINGS_FOR_AGE_AND_GENDER} from '../data';
import {PersonData, ServingsDataInfo, ServingsDataRange} from '../types';
import {FOOD_CATEGORY_LIST} from './CATEGORY_LIST';

/**
 A function to find servings data based on a food group and family member data (age, gender, etc)
 */
const calculateServings = (personData: PersonData) =>
    FOOD_CATEGORY_LIST.reduce<ServingsDataRange[]>((acc, foodGroup) => {
        const {age, gender} = personData;
        const servingsData = (SERVINGS_FOR_AGE_AND_GENDER as ServingsDataInfo[]).find(
            record =>
                record.fgid === foodGroup &&
                record.gender === gender &&
                record.ages === age
        );
        // If no servings data is found for the current food group, return the accumulator array without modifying it
        if (!servingsData) return acc;

        // Splitting the servings range string into an array of two numbers (minimum and maximum servings)
        const servingsRange = servingsData.servings.split(' to ').map(Number);

        return [
            ...acc,
            {
                ...servingsData,
                servingsRange
            },
        ];
    }, []);

export default calculateServings;
