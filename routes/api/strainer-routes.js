// Dependencies
// ------------------------------------------------------------------------
var db = require("../../models");

// Routes for /api/strainers
// ------------------------------------------------------------------------
module.exports = function (app) {
    // Get all strainers
    app.get("/api/strainers", function (req, res) {
        db.strainer.findAll({}).then(function (dbStrainer) {
            res.json(dbStrainer);
        });
    });
    // Get strainer by strainer-id
    app.get("/api/strainers/:id", function (req, res) {
        db.strainer.findOne({
            where: {
                id: req.params.id
            }
        })
            .then(function (dbStrainer) {
                res.json(dbStrainer);
            })
    });
    // Create a new strainer
    app.post("/api/strainers", function (req, res) {
        db.strainer.create(req.body).then(function (dbStrainer) {
            res.json(dbStrainer);
        });
    });
    // Delete a strainer by id
    app.delete("/api/strainers/:id", function (req, res) {
        db.strainer.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(function (dbStrainer) {
                res.json(dbStrainer);
            });
    });
    // Update a strainer by id
    app.put("/api/strainers", function (req, res) {
        db.strainer.update(
            req.body,
            {
                where: {
                    id: req.body.id
                }
            }).then(function (dbStrainer) {
                res.json(dbStrainer);
            });
    });
};