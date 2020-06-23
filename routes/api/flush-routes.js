// Dependencies
// ------------------------------------------------------------------------
var db = require("../../models");
// Routes for /api/flushes
// ------------------------------------------------------------------------
module.exports = function (app) {
    // Get all flushes
    app.get("/api/flushes", function (req, res) {
        db.flush.findAll({}).then(function (dbFlush) {
            res.json(dbFlush);
        });
    });
    // Get flush by flush-id
    app.get("/api/flushes/:id", function (req, res) {
        db.flush.findOne({
            where: {
                id: req.params.id
            }
        })
            .then(function (dbFlush) {
                res.json(dbFlush);
            })
    });
    // Create a new flush
    app.post("/api/flushes", function (req, res) {
        db.flush.create(req.body).then(function (dbFlush) {
            res.json(dbFlush);
        });
    });
    // Delete a flush by id
    app.delete("/api/flushes/:id", function (req, res) {
        db.flush.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(function (dbFlush) {
                res.json(dbFlush);
            });
    });
    // Update a flush by id
    app.put("/api/flushes", function (req, res) {
        db.flush.update(
            req.body,
            {
                where: {
                    id: req.body.id
                }
            }).then(function (dbFlush) {
                res.json(dbFlush);
            });
    });
};