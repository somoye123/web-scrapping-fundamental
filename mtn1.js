const rp = require("request-promise");
const cheerio = require("cheerio");
const url = "https://www.mtnonline.com/stores";

rp(url)
  .then(html => {
    const table = cheerio('tr > td', html).text();
    const state = cheerio('div.link > h2',html).text();
    // console.log(cheerio('table > tbody', html).eq(2).text());
    // console.log(cheerio("table > tbody", html).prop("go", true).html());
    // console.log(cheerio('table > tbody > tr > td', html)[3].children[0].data);
    // console.log(cheerio('.accordion_li > .link > h2', html)[0].children[0].data);
    // console.log(cheerio('.accordion_li > .link > h2', html).length);
    // console.log(cheerio('.accordion_li > .link > h2', html).text());
    // console.log(cheerio('tr > td', html).text());
    // console.log(cheerio('div.link > h2', html).length);
    // console.log(cheerio('div.link > h2', html));
    // console.log(cheerio('tr > td', html).length);
    // console.log(cheerio('tr > td', html));
    console.log(typeof(table));
    // console.log(state);
    return Promise.all(
      table,
      state
    );
  })
  .catch(err => console.log(err));

