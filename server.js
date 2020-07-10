// Dependencies
// ------------------------------------------------------------------------
//require("dotenv").config();
var express = require("express");
var db = require("./models");
var bodyParser = require("body-parser");
var cors = require('cors');
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
app.use(cors());
app.use(express.static(__dirname + "/public"));
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
require("./routes/api/temp-routes.js")(app);
//require("./routes/html-routes")(app);
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
      "==> 🌎  CORS-enabled web server listening on port %s. Visit http://18.222.181.253:%s/ in your browser. ",
      PORT,
      PORT
    );
  });
});
module.exports = app;
