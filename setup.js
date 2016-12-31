var request = require("request"),  
    cheerio = require("cheerio"),
    url = 'http://www.staples.com/uni-ball-Roller-Pens-Micro-Point-Black-Dozen/product_132522';

request(url, function (error, response, body) {  
    if (!error) {
        var $ = cheerio.load(body);
        penText = $(".stp--grid h1").html();
        console.log(penText);
    } else {
        console.log("Error found: " + error);
    }
});



// <div class="stp--grid">
//     <h1 ng-bind-html="product.metadata.name" class="ng-binding">uni-ball® Roller Pen, Micro Point, Black, 12/pk (60151)</h1>