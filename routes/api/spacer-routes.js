// Dependencies
// ------------------------------------------------------------------------
var db = require("../../models");

// Routes for /api/spacers
// ------------------------------------------------------------------------

module.exports = function (app) {
    // Get all spacers
    app.get("/api/spacers", function (req, res) {
        db.spacer.findAll({}).then(function (dbSpacer) {
            res.json(dbSpacer);
        });
    });

    // Get spacer by spacer-id
    app.get("/api/spacers/:id", function (req, res) {
        db.spacer.findOne({
            where: {
                id: req.params.id
            }
        })
            .then(function (dbSpacer) {
                res.json(dbSpacer);
            })
    });

    // Create a new spacer
    app.post("/api/spacers", function (req, res) {
        db.spacer.create(req.body).then(function (dbSpacer) {
            res.json(dbSpacer);
        });
    });

    // Delete a spacer by id
    app.delete("/api/spacers/:id", function (req, res) {
        db.spacer.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(function (dbSpacer) {
                res.json(dbSpacer);
            });
    });

    // Update a spacer by id
    app.put("/api/spacers", function (req, res) {
        db.spacer.update(
            req.body,
            {
                where: {
                    id: req.body.id
                }
            }).then(function (dbSpacer) {
                res.json(dbSpacer);
            });
    });

};