const rp = require("request-promise");
const otcsv = require("objects-to-csv");
const cheerio = require("cheerio");
const baseURL = "https://www.mtnonline.com/stores";

const getCompanies = async () => {
    const html = await rp(baseURL);
    const businessMap = cheerio("a.business-name", html)
        .map(async (i, e) => {
            const link = baseURL + e.attribs.href;
            const innerHTML = await rp(link);
            const emailAddress = cheerio("a.email-business", innerHTML).prop("href");
            const name = e.children[0].data || cheerio("h1", innerHTML).text();
            const phone = cheerio("p.phone", innerHTML).text();
            emailAddress: emailAddress ? emailAddress.replace("mailto:", "") : "";

            return {
                emailAddress,
                link,
                name,
                phone
            };
        })
        .get();
    return Promise.all(businessMap);
};

getCompanies()
    .then(result => {
        const transformed = new otcsv(result);
        return transformed.toDisk("./output.csv");
    })
    .then(() => console.log('SUCCESSFULLY COMPLETED THE WEB SCRAPING SAMPLE'));
