// Dependencies
// ------------------------------------------------------------------------
var db = require("../../models");

// Routes for /api/islands
// ------------------------------------------------------------------------

module.exports = function (app) {
    // Get all islands
    app.get("/api/islands", function (req, res) {
        db.island.findAll({}).then(function (dbIsland) {
            res.json(dbIsland);
        });
    });

    // Get island by island-id
    app.get("/api/islands/:id", function (req, res) {
        db.island.findOne({
            where: {
                id: req.params.id
            }
        })
            .then(function (dbIsland) {
                res.json(dbIsland);
            })
    });

    // Create a new island
    app.post("/api/islands", function (req, res) {
        db.island.create(req.body).then(function (dbIsland) {
            res.json(dbIsland);
        });
    });

    // Delete a island by id
    app.delete("/api/islands/:id", function (req, res) {
        db.island.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(function (dbIsland) {
                res.json(dbIsland);
            });
    });

    // Update a island by id
    app.put("/api/islands", function (req, res) {
        db.island.update(
            req.body,
            {
                where: {
                    id: req.body.id
                }
            }).then(function (dbIsland) {
                res.json(dbIsland);
            });
    });

};