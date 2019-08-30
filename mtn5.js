const request = require('request');
const cheerio = require('cheerio');
const arrangeData1 = require('./arrange1');

request(`https://www.mtnonline.com/stores`,(error, response,html) =>{
    const data = [];
    if(!error && response.statusCode === 200) {
        const $ = cheerio.load(html);
        const states = $('ul#accordion li.accordion_li');
        $(states).find('div.link').each((i,elem)=>{
            let state = {};
            const ul = $(elem).siblings('ul.submenu');
            state.state = $(elem).children('h2').text();
            const tr = $(ul).find('li table tr');
            let stores = [];
            $(tr).each((i,e)=>{
                let store = $(e).find('td')[0];
                let address = $(e).find('td')[1];
                if($(store).text() !== 'Service Centers'){
                    stores.push({"store":$(store).text(),"address":$(address).text()});
                }
                
            })
            state.stores = stores;
            data.push(state);
        })
    }
    // console.log(data[0]);
    arrangeData1(data);
})