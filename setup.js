var request = require("request"),  
    cheerio = require("cheerio"),
    url = 'http://www.eduro.com/';

request(url, function (error, response, body) {  
    if (!error) {
        var $ = cheerio.load(body);
        dailyQuote = $("dailyquote p").html(); // Retrieved as a string

        console.log(dailyQuote);
    } else {
        console.log("Error found: " + error);
    }
});