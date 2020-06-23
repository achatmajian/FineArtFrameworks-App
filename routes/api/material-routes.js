// Dependencies
// ------------------------------------------------------------------------
var db = require("../../models");
// Routes for /api/materials
// ------------------------------------------------------------------------
module.exports = function (app) {
    // Get all materials
    app.get("/api/materials", function (req, res) {
        db.material.findAll({}).then(function (dbMaterial) {
            res.json(dbMaterial);
        });
    });
    // Get material by material-id
    app.get("/api/materials/:id", function (req, res) {
        db.material.findOne({
            where: {
                id: req.params.id
            }
        })
            .then(function (dbMaterial) {
                res.json(dbMaterial);
            })
    });
    // Create a new material
    app.post("/api/materials", function (req, res) {
        db.material.create(req.body).then(function (dbMaterial) {
            res.json(dbMaterial);
        });
    });
    // Delete a material by id
    app.delete("/api/materials/:id", function (req, res) {
        db.material.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(function (dbMaterial) {
                res.json(dbMaterial);
            });
    });
    // Update a material by id
    app.put("/api/materials", function (req, res) {
        db.material.update(
            req.body,
            {
                where: {
                    id: req.body.id
                }
            }).then(function (dbMaterial) {
                res.json(dbMaterial);
            });
    });
};