// Dependencies
// ------------------------------------------------------------------------
var db = require("../../models");

// Routes for /api/drymounts
// ------------------------------------------------------------------------

module.exports = function (app) {
    // Get all drymounts
    app.get("/api/drymounts", function (req, res) {
        db.drymount.findAll({}).then(function (dbDrymount) {
            res.json(dbDrymount);
        });
    });

    // Get drymount by drymount-id
    app.get("/api/drymounts/:id", function (req, res) {
        db.drymount.findOne({
            where: {
                id: req.params.id
            }
        })
            .then(function (dbDrymount) {
                res.json(dbDrymount);
            })
    });

    // Create a new drymount
    app.post("/api/drymounts", function (req, res) {
        db.drymount.create(req.body).then(function (dbDrymount) {
            res.json(dbDrymount);
        });
    });

    // Delete a drymount by id
    app.delete("/api/drymounts/:id", function (req, res) {
        db.drymount.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(function (dbDrymount) {
                res.json(dbDrymount);
            });
    });

    // Update a drymount by id
    app.put("/api/drymounts", function (req, res) {
        db.drymount.update(
            req.body,
            {
                where: {
                    id: req.body.id
                }
            }).then(function (dbDrymount) {
                res.json(dbDrymount);
            });
    });

};