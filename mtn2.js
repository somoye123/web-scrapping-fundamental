const request = require('request');
 const cheerio = require('cheerio');
const otcsv = require("objects-to-csv");

let test = request('https://www.mtnonline.com/stores',(error, response, html)=>{
    if(!error && response.statusCode === 200) {
        let dom = cheerio.load(html);
        let mtn = [];
        dom('table').each((i, elem)=> {
            dom(elem).each((i,e) => {
                console.log(dom(elem).text());
                console.log(dom(elem).length);
                mtn.push(dom(elem).text());
            })
        });
        console.log(mtn);
    }
    return mtn;
});
const transformed = new otcsv;
transformed(test);