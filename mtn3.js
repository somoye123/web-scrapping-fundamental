const { convertArrayToCSV } = require('convert-array-to-csv');
const rp = require("request-promise");
const cheerio = require("cheerio");
const url = "https://www.mtnonline.com/stores";

const dataArray = [];
rp(url)
  .then(html => {
    const stateArray = [];
    const addressArray = [];
    for(let i = 0; i < 38; i++){
    stateArray.push(cheerio('.accordion_li > .link > h2', html)[i].children[0].data);
    }

    for(let i = 0; i < 912; i++){
    addressArray.push(cheerio('table > tbody > tr > td', html)[i].children[0].data);
    }
        
    dataArray.push(stateArray);
    dataArray.push(addressArray);
    const csvFromArrayOfArrays = convertArrayToCSV(dataArray, {
        stateArray,
        separator: ';'
      });
    //   csvFromArrayOfArrays.toDisk("./output.csv");
    console.log(csvFromArrayOfArrays);

  })
  .catch(err => console.log(err));

