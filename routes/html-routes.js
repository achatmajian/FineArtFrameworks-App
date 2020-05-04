var path = require("path");

module.exports = function(app) {
  // home screen brings user to view orders page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/view-orders.html"));
  });

  //log in
  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/log-in.html"));
  });

  // order form - part 1: assign client
  app.get("/order/client", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/01-create-order.html"));
  });

  // order form - part 2: order details
  app.get("/order/details", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/02-create-order.html"));
  });

  // order form - part 3: frame build
  app.get("/order/build", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/03-create-order.html"));
  });

  // order form - part 4: review order
  app.get("/order/review", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/04-review-order.html"));
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

  //view order details
  app.get("/view/orders/detail", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/order-detail.html"));
  });

  /*

  // add new client (not just in build frame page)
  app.get("/create/client", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/create-clients.html"));
  });


  // view materials page
  app.get("/view/materials", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/view-materials.html"));
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
