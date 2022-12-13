// Load Node modules
var express = require('express');
// Initialise Express
var app = express();
// Render static files
app.use(express.static('public'));
// Port website will run on
app.listen(8080);

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// *** GET Routes - display pages ***
// Root Route
app.get('/', function (req, res) {
    res.render('pages/index');
});
app.get('/2023-challenge', function (req, res) {
    res.render('pages/2023-challenge');
});