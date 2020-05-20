// Dependencies
// ------------------------------------------------------------------------
//require("dotenv").config();
var express = require("express");
var { v4: uuidv4 } = require('uuid');
var db = require("./models");
var session = require("express-session");
var FileStore = require("session-file-store")(session);
var bodyParser = require("body-parser");
var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    session: false
  },
  async (username, password, done) => {
    const user = await db.user.findOne({ where: { email: username, password_hash: password } });
    return done(null, user);
  }
));

// PassportJS to serialize the user
// ------------------------------------------------------------------------
passport.serializeUser((user, done) => {
  console.log("Inside the serializeUser callback. User id is saved to the session file store here");
  done(null, user);
});

// PassportJS to deserialize the user
// ------------------------------------------------------------------------
passport.deserializeUser((user, done) => {
  console.log("Inside the serializeUser callback. User id is saved to the session file store here");
  done(null, user);
});

// Create the server app
// ------------------------------------------------------------------------
var app = express();
var PORT = process.env.PORT || 3001;

// Middleware Configurations
// ------------------------------------------------------------------------
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));
app.use(session({
  genid: (req) => {
    console.log('Inside the session middlware genid function');
    console.log("request object sessionID from client: " + JSON.stringify(req.sessionID));
    //console.log(req);
    return uuidv4(); // use UUIDs for session IDs

  },
  store: new FileStore(),
  secret: "cats",
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

// log in passport authentication functions :)
app.post('/login',
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
  }));

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


    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser. ",

      PORT,
      PORT
    );


    console.log(
      "==> 🌎  Listening on port 3000. Visit http://18.222.181.253:3000/ in your browser. ");
  });
});

module.exports = app;
