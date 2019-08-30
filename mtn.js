const rp = require("request-promise");
const cheerio = require("cheerio");
const url = "https://www.mtnonline.com/stores";

// rp(url).then(html => {
//     let location = {};
//     const locations = [];
//     for( let i = 0; i < 38; i++){
//         location.state = cheerio('.accordion_li > .link > h2',html)[i].text();
//         location.address = cheerio('table > tbody > tr > td', html)[1].text();
//         locations.push(location);
//     }
//     console.log(locations);
// }).catch(err => console.log(err));

// const getLocations = async () => {
//     const html = await rp(url);
//     const locationMap = cheerio('.accordion_li',html).map(async (accord) => {
//         const state = cheerio('.accordion_li >')
//     })
// }

rp(url)
  .then(html => {
    // console.log(cheerio('table > tbody', html).eq(2).text());
    // console.log(
    //   cheerio("table > tbody", html)
    //     .prop("go", true)
    //     .html()
    // );
    console.log(cheerio('table > tbody > tr > td', html)[3].children[0].data);
    // console.log(cheerio('.accordion_li > .link > h2', html)[0].children[0].data);
    // console.log(cheerio('.accordion_li > .link > h2', html).length);
    // console.log(cheerio('.accordion_li > .link > h2', html).text());
    // console.log(cheerio('tr > td', html).text());
    // console.log(cheerio('div.link > h2', html).length);
    // console.log(cheerio('div.link > h2', html));
    // console.log(cheerio('tr > td', html).length);
    // console.log(cheerio('tr > td', html));
  })
  .catch(err => console.log(err));
