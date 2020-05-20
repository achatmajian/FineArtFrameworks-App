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

//const user = db.user.findOne({ where: { email: req.body.username } });

// PassportJS User Local Authentication
// ------------------------------------------------------------------------
passport.use('local', new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  },
  async (req, username, password, done) => {
    console.log("Inside local strategy callback");
    const user = await db.user.findOne({ where: { email: req.body.username } });
    
    if (err) {
      return done(err);
    } else if (!user) {
      return done(null, false, { message: 'Incorrect username.' });
    } else if (!user.validPassword(password)) {
      return done(null, false, { message: 'Incorrect password.' });
    } else if (username === user.email && password === user.password_hash) {
      console.log('"Local strategy returned true');
      console.log(user.id);
      return done(null, user);
    }
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
  done(err, user);
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

// app.post("/login", async (req, res, next) => {
//   console.log("Inside the POST /login callback function");
//   console.log(req.body);
//   const user = await db.user.findOne({ where: { email: req.body.username } });
//   console.dir(user.id);
//   res.send('ok');
// });

app.post("/login", async (req, res, next) => {
  console.log("Inside the POST / login callback function");
  console.log(req.body);
  passport.authenticate('local', (err, user, info) => {
    console.log("Inside the passport.authenticate() callback");
    console.log("errors: \n\n" + err + "\n\n");
    console.log("user: \n\n" + user) + "\n\n";
    console.log("passport user: " + req.user);
    console.log("info: \n\n" + info);
  })
})

// app.post("/login", (req, res, next) => {
//   console.log("Inside the POST /login callback function");
//   console.log(req.body);
//   passport.authenticate('local', {successRedirect: "/", failureRedirect: "/login", failureFlash: true }, (err, user, info) => {
//     console.log("Inside the passport.authenticate() callback");

//     // logs to debug
//     console.log("errors: \n\n" + err + "\n\n");
//     console.log("user: \n\n" + user) + "\n\n";
//     console.log("passport user: " + req.user);
//     console.log("info: \n\n" + info);

//     if (err) {
//       console.log("There was an error here at line 100!");
//       res.status(401).send(err);
//     } else if (!user) {
//       console.log("There is no user");
//       res.status(401).send(JSON.stringify(info));
//     } else {
//       req.login(user, function (err) {
//         if (err) { return next(err); }
//         return res.redirect('api/users/' + req.user.id);
//       });
//     }

//     res.status(401).send(info);
//   })(req, res);
// },

//   // function to call once successfully authenticated
//   function (req, res) {
//     res.status(200).send('logged in!');
//   });

/*console.log("Inside the passport.authenticate() callback");
console.log("req.session.passport: " + req.session.passport);
console.log("req.user: " + req.user);
req.login(user, (err) => {
  console.log("Inside the req.login() callback");
  console.log("req.session.passport: " + req.session.passport);
  console.log("req.user: " + req.user);
  return res.send("You were authenticated and logged in!");
})
})(req, res);
//console.log(req.body);
//res.send("You posted to the login page!\n");
});
*/
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