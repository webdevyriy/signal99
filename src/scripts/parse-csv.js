const {parse} = require('csv-parse');
const fs = require('fs');
const {promisify} = require('util');

const csvToArray = async (pathToCsv, options = {}) =>
    new Promise((resolve, reject) => {
        const data = [];
        fs.createReadStream(pathToCsv)
            .pipe(parse({delimiter: ',', columns: true, ltrim: true, ...options}))
            .on('data', row => data.push(row))
            .on('end', () => resolve(data))
            .on('error', error => reject(error.message));
    });

/** Transforms CSV data to ts arrays and saves them to .ts file */
const parseCsv = async () => {
    const servingsForAgeAndGender = await csvToArray('src/csv-data/servings_per_day-en_ONPP.csv');
    const foodNutritionData = await csvToArray('src/csv-data/foods-en_ONPP_rev.csv', {encoding: 'latin1'});
    const generatedFileData =
        `export const SERVINGS_FOR_AGE_AND_GENDER = ${JSON.stringify(servingsForAgeAndGender)};` +
        `\n` +
        `export const FOOD_NUTRITION_DATA = ${JSON.stringify(foodNutritionData)};`;

    await promisify(fs.writeFile)('src/data/index.ts', generatedFileData);
};

parseCsv()
    .then(() => console.log('\x1b[32m', 'CSV data successfully transformed and saved to .ts file.'))
    .catch(error => console.error(error));