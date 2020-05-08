// Dependencies
// ------------------------------------------------------------------------
var db = require("../../models");

// Routes for /api/mats
// ------------------------------------------------------------------------

module.exports = function (app) {
    // Get all mats
    app.get("/api/mats", function (req, res) {
        db.mat.findAll({}).then(function (dbMat) {
            res.json(dbMat);
        });
    });

    // Get mat by mat-id
    app.get("/api/mats/:id", function (req, res) {
        db.mat.findOne({
            where: {
                id: req.params.id
            }
        })
            .then(function (dbMat) {
                res.json(dbMat);
            })
    });

    // Create a new mat
    app.post("/api/mats", function (req, res) {
        db.mat.create(req.body).then(function (dbMat) {
            res.json(dbMat);
        });
    });

    // Delete a mat by id
    app.delete("/api/mats/:id", function (req, res) {
        db.mat.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(function (dbMat) {
                res.json(dbMat);
            });
    });

    // Update a mat by id
    app.put("/api/mats", function (req, res) {
        db.mat.update(
            req.body,
            {
                where: {
                    id: req.body.id
                }
            }).then(function (dbMat) {
                res.json(dbMat);
            });
    });

};