const request = require('request');
 const cheerio = require('cheerio');

request('https://www.mtnonline.com/stores',(error, response, html)=>{
    if(!error && response.statusCode === 200) {
        let dom = cheerio.load(html);
        dom('table').each((i, elem)=> {
            dom(elem).each((i,e) => {
                console.log(dom(elem).text());
            })
        });
    }
});