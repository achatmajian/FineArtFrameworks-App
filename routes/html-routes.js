var path = require("path");

module.exports = function(app) {
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/view-orders.html"));
  });

  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/log-in.html"));
  });

  app.get("/orders/create/client", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/01-create-order.html"));
  });

  app.get("/orders/create/details", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/02-create-order.html"));
  });

  app.get("/orders/create/build", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/03-create-order.html"));
  });

  app.get("/orders/view", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/html/view-orders.html");)
  });

  /*

  // add new client (not just in build frame page)

  // view clients page

  // view materials page

  // view users page

  app.get("/sign-up", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/sign-up.html"));
  });

  */
};
