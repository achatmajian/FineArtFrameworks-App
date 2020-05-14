// Dependencies
// ------------------------------------------------------------------------
//require("dotenv").config();
var express = require("express");
var db = require("./models");
//var passport = require('passport')
//var LocalStrategy = require('passport-local').Strategy;
//var session = require("express-session")
var bodyParser = require("body-parser");
var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
// ------------------------------------------------------------------------
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));
// app.use(session({ secret: "cats" }));
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(passport.initialize());
//app.use(passport.session());

// Routes
// ------------------------------------------------------------------------
require("./routes/api/client-routes")(app);
require("./routes/api/frame-routes")(app);
require("./routes/api/order-routes")(app);
require("./routes/api/user-routes")(app);
require("./routes/api/drymount-routes")(app);
require("./routes/api/extras-routes")(app);
require("./routes/api/float-routes")(app);
require("./routes/api/flush-routes")(app);
require("./routes/api/glazing-routes")(app);
require("./routes/api/island-routes")(app);
require("./routes/api/mat-routes")(app);
require("./routes/api/material-routes")(app);
require("./routes/api/spacer-routes")(app);
require("./routes/api/strainer-routes")(app);
require("./routes/html-routes")(app);

var syncOptions = { force: false };


/*
// PassportJS User Authentication
// ------------------------------------------------------------------------
passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password_hash'
},
  function (email, password_hash, done) {
    db.user.findOne({ where: { email: email } }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect email.' });
      }
      if (!user.validPassword(password_hash)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));
*/

// If running a test, set syncOptions.force to true
// clearing the `testdb`
// ------------------------------------------------------------------------
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting server & syncing models
// ------------------------------------------------------------------------
db.sequelize.sync(syncOptions).then(function () {
  app.listen(PORT, function () {
    
    /*
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser. ",

      PORT,
      PORT
    );
    */
   
    console.log(
      "==> 🌎  Listening on port %s. Visit http://18.222.181.253:%s/ in your browser. ",

      PORT,
      PORT
    );
  });
});

module.exports = app;