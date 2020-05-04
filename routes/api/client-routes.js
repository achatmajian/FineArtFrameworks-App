
// Dependencies
// ------------------------------------------------------------------------
var db = require("../../models");

// Routes for /api/clients 
// ------------------------------------------------------------------------

module.exports = function (app) {
    // Get all clients
    app.get("/api/clients", function (req, res) {
        db.Client.findAll({}).then(function (dbClients) {
            res.json(dbClients);
        });
    });

    // Get Client by client-id
    app.get("/api/clients/:id", function (req, res) {
        db.Client.findOne({
            where: {
                id: req.params.id
            }
        })
            .then(function (dbClients) {
                res.json(dbClients);
            })
    });

    // Create a new client
    app.post("/api/clients", function (req, res) {
        db.Client.create(req.body).then(function (dbClients) {
            res.json(dbClients);
        });
    });

    // Delete a client by id
    app.delete("/api/clients/:id", function (req, res) {
        db.Client.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(function (dbClients) {
                res.json(dbClients);
            });
    });

    // Update a client by id
    app.put("/api/clients", function (req, res) {
        db.Client.update(
            req.body,
            {
                where: {
                    id: req.body.id
                }
            }).then(function (dbClients) {
                res.json(dbClients);
            });
    });

};
