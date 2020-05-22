var path = require("path");
var { v4: uuidv4 } = require('uuid');
var passport = require("passport");
var session = require("express-session");

module.exports = function(app) {
  // home screen brings user to view orders page
  app.get("/", function(req, res) {
    //console.log(req);
    //var uniqueId = uuidv4();
    console.log("inside the homepage callback function");
    console.log(req.sessionID);
    //res.send('Hit home page.\n');
    res.sendFile(path.join(__dirname, "../public/html/01-client-info.html"));
  });

  // log in
  app.get("/login", function(req, res) {
    console.log("Inside the GET /login callback function");
    console.log(req.sessionID);
    //res.send("Hit the login page.\n");
    res.sendFile(path.join(__dirname, "../public/html/log-in.html"));
  });

  // order form (default to part 1)
  app.get("/order", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/01-client-info.html"))
  });

  // order form - part 1: assign client (new client)
  app.get("/order/client", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/01-client-info.html"))
  });

  // order form - part 1: assign client (existing client)
  app.get("/order/client/existing", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/01.1-client-info.html"));
  });

  // order form - part 2: order details
  app.get("/order/details", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/02-order-info.html"));
  });

  // WITH ID IN URL:: order form - part 2: order details
  app.get("/order/details/:id", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/02-order-info.html"));
  });

  // order form - part 3: frame build
  app.get("/order/build", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/03-build-frames.html"));
  });

 // WITH ID IN URL:: order form - part 3: frame build
 app.get("/order/build/:id", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/html/03-build-frames.html"));
});

  // order form - part 4: review order
  app.get("/order/review", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/04-review-order.html"));
  });

  // WITH ID IN URL:: order form - part 4: review order
  app.get("/order/review/:id", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/04-review-order.html"));
  });

  // order form - part 5: pricing estimate
  app.get("/order/estimate", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/05-pricing-estimate.html"))
  });

   // WITH ID IN URL:: order form - part 5: pricing estimate
   app.get("/order/estimate/:id", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/05-pricing-estimate.html"))
  });

  // view orders table
  app.get("/view/orders", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/html/view-orders.html"));
  });

  // view users table
  app.get("/view/users", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/view-users.html"));
  });

  // view clients table
  app.get("/view/clients", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/view-clients.html"));
  });

  // view order details
  app.get("/view/orders/detail", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/order-detail.html"));
  });

  // view materials (drymount)
  app.get("/view/materials/drymount", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/view-drymount.html"))
  });

  // view materials (extras)
  app.get("/view/materials/extras", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/view-extras.html"))
  });

  // view materials (glazing)
  app.get("/view/materials/glazing", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/view-glazing.html"))
  });

  // view materials (lumber)
  app.get("/view/materials/lumber", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/view-lumber.html"))
  });

  // view materials (spacers)
  app.get("/view/materials/spacers", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/view-spacers.html"))
  });

  /*

  // add new client (not just in build frame page)
  app.get("/create/client", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/create-clients.html"));
  });

  // sign up if not existing user
  app.get("/sign-up", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/sign-up.html"));
  });

  // login/update-password
  app.get("/login/update-password", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/password-reset.html"));
  });

  */
};
