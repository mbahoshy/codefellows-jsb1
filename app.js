/*
 * This is the main entry module for our node.js application.
 */
var path = require("path"),
    express = require("express"),
    _ = require("underscore");


// Our sample application uses the express framework to abstarct away
// the raw HTTP concerns. This block creates an instance of the express
// server and sets configuration related to our static file server and
// the handlebar template engine.
var app = express()
            .set("views", path.join(__dirname, "views"))
            .set("view engine", "hbs")
            .use(express.static(path.join(__dirname, "public")))
            .use(express.bodyParser());


// This is our in memory database to use for this bootstraped app. This
// is typically stored in an external system like redis, postgresql or
// mongodb. We store it here to make the sample application easier to
// run.
var db = [
  {
    guid: "c214d676-a056-4e77-914c-dfa96e5c93b8",
    firstName: "Homer",
    lastName: "Simpson",
    nickname: "Homer",
    company: "Springfield Nuclear Powerplant",
    email: "hsimpson74@yahoo.com"
  },
  {
    guid: "a9816058-5e20-4e19-be7a-b9ec320a7a91",
    firstName: "Marjorie",
    lastName: "Simpson",
    nickname: "Marge",
    company: "n",
    email: "funmom1337@hotmail.com"
  },
  {
    guid: "ba029c24-2229-4439-a280-452bead4f176",
    firstName: "Jeff",
    lastName: "Albertson",
    nickname: "Comic Book Guy",
    company: "The Android's Dungeon & Baseball Card Shop",
    email: "treknerk1012@comcast.net"
  },
  {
    guid: "5344717e-5433-49ca-9b71-5fc26ad86abc",
    firstName: "Charles Montgomery",
    lastName: "Burns",
    nickname: "Monty",
    company: "Springfield Nuclear Powerplant",
    email: "n"
  },
  {
    guid: "0e33a96d-a16c-43e2-be5e-1698393e6dbb",
    firstName: "Joseph",
    lastName: "Quimby",
    nickname: "Diamond Joe",
    company: "Mayor of Springfield",
    email: "jquimby@springfield.gov"
  }
];


// Now we finally define the various URL patterns that our application
// understands and associate a handler function with them. Express takes
// care of everything else for us.
app.get("/", function(req, res) {
  res.redirect("/contacts");
});

app.get("/contacts", function(req, res) {
  res.render("contactlist");
});

app.get("/addPage", function(req, res) {
  res.render("addPage");
});

app.post("/add", function(req, res) {
  var firstNameN = req.body.firstName;
  var lastNameN = req.body.lastName;
  var nicknameN = req.body.nickname;
  var companyN = req.body.company;
  var emailN = req.body.email;

  db.push({guid:"hello", firstName:firstNameN, lastName:lastNameN, nickname:nicknameN, company:companyN, email:emailN});

  res.redirect("/contacts");
 
});



app.post("/contactSearch", function(req, res){
  var term = req.body.term;
  var condition = req.body.condition;
  
  // use .find
  //record = _.findWhere(db, {condition: term});
  if (record) {
  console.log("found");  
  }
  

});

app.get("/gjson", function (req, res){
  res.send(db);
});

app.get("/contacts/:guid", function(req, res) {
  var guid = req.param("guid"),
      record = _.findWhere(db, {guid: guid});

  if(record) {
    res.render("contact", {contact: record});
  } else {
    res.send("Sorry, the guid " + guid + " doesn't exist in the DB.");
  }
});

app.post("/contacts/:guid", function(req, res) {
  var guid = req.param("guid"),
      record = _.findWhere(db, {guid: guid});

  if(record) {
    var formValues = _.pick(req.body, "firstName", "lastName", "nickname", "company", "email");
    _.extend(record, formValues);
    if(record.nickname = "") {
      record.nickname = record.firstName;
    }
    res.redirect("/contacts");
  } else {
    res.send("Sorry, the guid " + guid + " doesn't exist in the DB.");
  }
});


// With the express server and routes defined, we can start to listen
// for requests. Heroku defines the port in an environment variable.
// Our app should use that if defined, otherwise 3000 is a pretty good
// default.
var port = process.env.PORT || 3000;
app.listen(port);
console.log("The server is now listening on port %s", port);

/*
var isPrime = function(i) {
    if(i%2 === 1) {
        return false;
    } else {
        return true;
    }

};
*/

var isPrime = function(n) {
 if (isNaN(n) || !isFinite(n) || n%1 || n<2) return false; 
 if (n%2==0) return (n==2);
 if (n%3==0) return (n==3);
 var m=Math.sqrt(n);
 for (var i=5;i<=m;i+=6) {
  if (n%i==0)     return false;
  if (n%(i+2)==0) return false;
 }
 return true;
}


module.exports = app;


//exports.isPrime = isPrime;
//exports.myApp = app;