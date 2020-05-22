// Temp Orders will be stand in to create object with all of the frame information as we go from page to page until the final submit which will then use this object's values to save to new Order

// Dependencies
// ------------------------------------------------------------------------
var db = require("../../models");

// Routes for /api/orders 
// ------------------------------------------------------------------------

module.exports = function (app) {
    // Get all temp orders
    app.get("/api/temp/orders", function (req, res) {
        db.temp.findAll({}).then(function (dbOrders) {
            res.json(dbOrders);
        });
    });

    // Get Temp Order by temp order-id
    app.get("/api/temp/orders/:id", function (req, res) {
        db.temp.findOne({
            where: {
                id: req.params.id
            }
        })
            .then(function (dbOrders) {
                res.json(dbOrders);
            })
    });

    // Create a new temp order
    app.post("/api/temp/orders", function (req, res) {
        db.temp.create(req.body).then(function (dbOrders) {
            res.json(dbOrders);
        });
    });

    // Delete a temp order by id
    app.delete("/api/temp/orders/:id", function (req, res) {
        db.temp.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(function (dbOrders) {
                res.json(dbOrders);
            });
    });

    // Update a temp order by id
    app.put("/api/temp/orders", function (req, res) {
        db.temp.update(
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