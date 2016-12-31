var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app = express();

app.get('/pen', function(req, res) {

    url = 'http://www.staples.com/uni-ball-Roller-Pens-Micro-Point-Black-Dozen/product_132522';

    request(url, function(error, response, html) {
        if (!error) {

            var $ = cheerio.load(html);
            var title;
            var json = {title : ""};

            $('.stp--grid h1').filter(function() {

                var data = $(this);
                title = data.html();            
                json.title = title;
            })
        }
        // write to the system using 'fs' library, passing 3 parameters to the writeFile function
        // Parameter 1: output.json - created file
        // Parameter 2: JSON.stringify(json, null, 4) - the data to write with an extra step by calling JSON.stringify to make JSON easier to read
        // Parameter 3: callback function - callback function to know the status of the function
        fs.writeFile('output.json', JSON.stringify(json, null, 4), function(err) {
            console.log('file successfully written, check output.json');
        })
        // TODO: build out UI
        res.send('The uni-ball&#174; Roller Pen (Micro Point, Black) can be found at: ' + url);
    });
})

app.listen('8081');
exports = module.exports = app;





