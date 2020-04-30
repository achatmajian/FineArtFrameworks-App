// Dependencies
//require("dotenv").config();
var express = require("express");
//var exphbs = require("express-handlebars");
var db = require("./models");
//var passport = require('passport')
//var LocalStrategy = require('passport-local').Strategy;
//var session = require("express-session")
//var bodyParser = require("body-parser");
var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
//app.use(session({ secret: "cats" }));
//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(passport.initialize());
//app.use(passport.session());

// Routes
/*
require("./routes/api-routes")(app);
require("./routes/html-routes")(app);
*/

var syncOptions = { force: false };

/*
// PassportJS User Authentication
passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'passwd'
},
  function (username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));

*/

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}


// Starting server & syncing models ------------------------------------/
db.sequelize.sync(syncOptions).then(function () {
  app.listen(PORT, function () {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;