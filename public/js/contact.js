app.get("/contact" , function(req,res){
    res.render("contact-me")
});
app.post("/contact",function(req,res){
    var api_key = '4cc34792cca9adacc956350cc11ef70b-4836d8f5-d0574609';
    var domain = 'sandbox8c4827023a704a6fa8bc0ff533b7159b.mailgun.org';
    var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
     
    var data = {
      from: 'Mail Gun Nuka <postmaster@sandbox8c4827023a704a6fa8bc0ff533b7159b.mailgun.org>',
      to: 'geniusdexter833@gmail.com',
      subject: req.body.firstname,
      text: req.body.subject
    };
     
    mailgun.messages().send(data, function (error, body) {
      console.log(body);
      if(!error)
      res.send("mail sent");
      else
      res.send("mail not sent");
    });
});