// Dependencies
// ------------------------------------------------------------------------
var db = require("../../models");

// Routes for /api/extras
// ------------------------------------------------------------------------

module.exports = function (app) {
    // Get all extras
    app.get("/api/extras", function (req, res) {
        db.extras.findAll({}).then(function (dbExtras) {
            res.json(dbExtras);
        });
    });

    // Get extra by extra-id
    app.get("/api/extras/:id", function (req, res) {
        db.extras.findOne({
            where: {
                id: req.params.id
            }
        })
            .then(function (dbExtras) {
                res.json(dbExtras);
            })
    });

    // Create a new extra
    app.post("/api/extras", function (req, res) {
        db.extras.create(req.body).then(function (dbExtras) {
            res.json(dbExtras);
        });
    });

    // Delete a extra by id
    app.delete("/api/extras/:id", function (req, res) {
        db.extras.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(function (dbExtras) {
                res.json(dbExtras);
            });
    });

    // Update a extra by id
    app.put("/api/extras", function (req, res) {
        db.extras.update(
            req.body,
            {
                where: {
                    id: req.body.id
                }
            }).then(function (dbExtras) {
                res.json(dbExtras);
            });
    });

};