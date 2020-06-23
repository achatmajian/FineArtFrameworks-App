// Dependencies
// ------------------------------------------------------------------------
var db = require("../../models");
// Routes for /api/floats
// ------------------------------------------------------------------------
module.exports = function (app) {
    // Get all floats
    app.get("/api/floats", function (req, res) {
        db.float.findAll({}).then(function (dbFloat) {
            res.json(dbFloat);
        });
    });
    // Get float by float-id
    app.get("/api/floats/:id", function (req, res) {
        db.float.findOne({
            where: {
                id: req.params.id
            }
        })
            .then(function (dbFloat) {
                res.json(dbFloat);
            })
    });
    // Create a new float
    app.post("/api/floats", function (req, res) {
        db.float.create(req.body).then(function (dbFloat) {
            res.json(dbFloat);
        });
    });
    // Delete a float by id
    app.delete("/api/floats/:id", function (req, res) {
        db.float.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(function (dbFloat) {
                res.json(dbFloat);
            });
    });
    // Update a float by id
    app.put("/api/floats", function (req, res) {
        db.float.update(
            req.body,
            {
                where: {
                    id: req.body.id
                }
            }).then(function (dbFloat) {
                res.json(dbFloat);
            });
    });
};