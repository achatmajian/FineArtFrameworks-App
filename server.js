// Dependencies
// ------------------------------------------------------------------------
//require("dotenv").config();
var express = require("express");
var { v4: uuidv4 } = require('uuid');
var db = require("./models");
var session = require("express-session");
var cookieParser = require("cookie-parser");
var FileStore = require("session-file-store")(session);
var bodyParser = require("body-parser");
var passport = require('passport');
//var User = require("./models/User");
var LocalStrategy = require('passport-local').Strategy;
var axios = require("axios");

// PassportJS Local Strategy to search DB for user and verify password
// ------------------------------------------------------------------------
passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
},
  async (username, password, done) => {
    const user = await db.user.findOne({ where: { email: username, password_hash: password } });
    console.log(user.id);
    return done(null, user);
  }
));
// PassportJS to serialize the user
// ------------------------------------------------------------------------
passport.serializeUser((user, done) => {
  console.log(`Inside the serializeUser callback. User id is saved to the session file is ${user.id}`);
  done(null, user.id);
});
// PassportJS to deserialize the user
// ------------------------------------------------------------------------
// passport.deserializeUser((id, done) => {
//   console.log("Inside the deserializeUser callback.");
//   console.log(id);
//   User.findById(id, (err, user) => {
//     done(err, user);
//   });
// });

passport.deserializeUser(async(id, done) => {
  console.log("Inside the deserialize user callback");
  const user = await db.user.findOne({where: {id : id} });
  return done(err, user);  
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
app.use(cookieParser());
app.use(session({
  genid: (req) => {
    console.log('Inside the session middlware genid function');
    console.log(`request object sessionID from client: ${JSON.stringify(req.sessionID)}`);
    return uuidv4(); // use UUIDs for session IDs
  },
  store: new FileStore(),
  secret: "cats",
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: false
  }
}));
app.use(express.static(__dirname + "/public"));
app.use(passport.initialize());
app.use(passport.session());
// Log In Post with PassportJS authentication functions :)
// ------------------------------------------------------------------------
// app.post('/login',
//   passport.authenticate('local', {
//     successRedirect: '/',
//     failureRedirect: '/login'
//   }));
app.post("/login", (req, res, next) => {
  console.log("Inside POST / Login callback");
  passport.authenticate('local', (err, user, info) => {
    console.log("Inside the passport.authenticate() callback");
    console.log(`req.session.passport: ${JSON.stringify(req.session.passport)}`);
    console.log(`req.user: ${JSON.stringify(req.user)}`);
    req.login(user, (err) => {
      console.log("Inside req.login callback");
      console.log(`req.session.passport: ${JSON.stringify(req.session.passport)}`);
      console.log(`req.user: ${JSON.stringify(req.user)}`);
      if(err) {
        return res.json({status: "Failure: "+ err});
      } 
      res.send("you were authenticated and logged in!");
    })
  })(req, res, next);
});

app.get("/authrequired", (req, res) => {
  console.log("Inside GET /authrequired callback");
  console.log("req is here \n\n========================\n\n");
  console.log(req);
  console.log("\n\nres is here \n\n========================\n\n");
  console.log(res);
  console.log(`\n\nUser authenticated? ${req.isAuthenticated()}`);
  if (req.isAuthenticated()) {
    res.send("you hit the authentication endpont\n");
  } else {
    res.send("you were not authenticated\n");
  }
})
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
// If running a test, set syncOptions.force to true clearing the `testdb`
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
