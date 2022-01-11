const GSheetReader = require('g-sheets-api');

GSheetReader(
    options,
    results => {
    console.log(results)
    },
    error => {
    console.log("ERORR GOOGLE SHEETS API")
    }
);

const options = {
    apiKey: 'AIzaSyASFZj-dtl0vTuxHIksmSEQwdWGcU91v-M',
    sheetId: '1TSSaAZ-R0UgbHkVgVYaEea_Z3kj3lK0qtsnRmfY4TrE',
    returnAllResults: false,
    // filter: {
    // 	'department': 'archaeology',
    // 	'module description': 'introduction'
    // },
    // filterOptions: {
    // 	operator: 'or',
    // 	matching: 'loose'
    // }
}