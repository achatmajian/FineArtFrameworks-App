// Dependencies
// ------------------------------------------------------------------------
var db = require("../../models");
// Routes for /api/orders 
// ------------------------------------------------------------------------
module.exports = function (app) {
    // Get all orders
    app.get("/api/orders", function (req, res) {
        db.order.findAll({}).then(function (dbOrders) {
            res.json(dbOrders);
        });
    });
    // Get Order by order-id
    app.get("/api/orders/:id", function (req, res) {
        db.order.findOne({
            where: {
                id: req.params.id
            }
        })
            .then(function (dbOrders) {
                res.json(dbOrders);
            })
    });
    // Create a new order
    app.post("/api/orders", function (req, res) {
        db.order.create(req.body).then(function (dbOrders) {
            res.json(dbOrders);
        });
    });
    // Delete a order by id
    app.delete("/api/orders/:id", function (req, res) {
        db.order.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(function (dbOrders) {
                res.json(dbOrders);
            });
    });
    // Update a order by id
    app.put("/api/orders", function (req, res) {
        db.order.update(
            req.body,
            {
                where: {
                    id: req.body.id
                }
            }).then(function (dbOrders) {
                res.json(dbOrders);
            });
    });
};