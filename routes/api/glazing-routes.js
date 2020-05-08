// Dependencies
// ------------------------------------------------------------------------
var db = require("../../models");

// Routes for /api/glazings
// ------------------------------------------------------------------------

module.exports = function (app) {
    // Get all glazings
    app.get("/api/glazings", function (req, res) {
        db.glazing.findAll({}).then(function (dbGlazing) {
            res.json(dbGlazing);
        });
    });

    // Get glazing by glazing-id
    app.get("/api/glazings/:id", function (req, res) {
        db.glazing.findOne({
            where: {
                id: req.params.id
            }
        })
            .then(function (dbGlazing) {
                res.json(dbGlazing);
            })
    });

    // Create a new glazing
    app.post("/api/glazings", function (req, res) {
        db.glazing.create(req.body).then(function (dbGlazing) {
            res.json(dbGlazing);
        });
    });

    // Delete a glazing by id
    app.delete("/api/glazings/:id", function (req, res) {
        db.glazing.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(function (dbGlazing) {
                res.json(dbGlazing);
            });
    });

    // Update a glazing by id
    app.put("/api/glazings", function (req, res) {
        db.glazing.update(
            req.body,
            {
                where: {
                    id: req.body.id
                }
            }).then(function (dbGlazing) {
                res.json(dbGlazing);
            });
    });

};