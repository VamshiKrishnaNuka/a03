const path = require("path")
const express = require("express")
const logger = require("morgan")
const bodyParser = require("body-parser") // simplifies access to request body
const fs = require('fs')  // NEW - this is required
const app = express()  // make express app
const http = require('http').Server(app)  // inject app into the server
const port = 8081
// ADD THESE COMMENTS AND IMPLEMENTATION HERE 
// 1 set up the view engine
app.set("views", path.resolve(__dirname, "views")) // path to views
app.set("view engine", "ejs") // specify our view
// 2 manage our entries
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 3 set up the logger
var accessLogStream = fs.createWriteStream(__dirname + '/access.log', { flags: 'a' });
app.use(logger('dev'));
app.use(logger('combined', { stream: accessLogStream }));
// 4 handle valid GET requests
app.get("/", function (req, res) {
  //res.sendFile(path.join(__dirname + '/assets/index.html'))
  res.render("index.ejs")
})

app.get("/index", function (req, res) {
  //res.sendFile(path.join(__dirname + '/assets/index.html'))
  res.render("index.ejs")
})

// 4 http GET /tic-tac-toe
app.get("/tic-tac-toe", function (req, res) {
  res.render("tic-tac-toe.ejs")
})

// 4 http GET /contact
app.get("/contact", function (req, res) {
  res.render("contact-me.ejs")
})


app.post("/contact", function (req, res) {
  var api_key = '4cc34792cca9adacc956350cc11ef70b-4836d8f5-d0574609';
  var domain = 'sandbox8c4827023a704a6fa8bc0ff533b7159b.mailgun.org';
  var mailgun = require('mailgun-js')({ apiKey: api_key, domain: domain });

  var data = {
    from: 'Mail Gun Nuka <postmaster@sandbox8c4827023a704a6fa8bc0ff533b7159b.mailgun.org>',
    to: 'vamshinuka@live.in',
    subject: req.body.firstname,
    text: req.body.body
  };

  mailgun.messages().send(data, function (error, body) {
    console.log(body);
    if (!error) {
      res.send("mail sent");
    }
    else {
      res.send("mail not sent");
    }
  });
});
// 6 respond with 404 if a bad URI is requested
app.get(function (req, res) {
  res.render("404")
})


// Listen for an application request on port 8081
http.listen(process.env.PORT || 8081, function () {
  console.log('app listening on http://127.0.0.1:8081/')
})