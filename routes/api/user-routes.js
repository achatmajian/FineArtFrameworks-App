// Dependencies
// ------------------------------------------------------------------------
var db = require("../../models");
var passport = require("passport");


// Routes for api/users
// ------------------------------------------------------------------------
module.exports = function (app) {

     /*
    //Route for Log In Authentication
    app.post('/login',
        passport.authenticate('local', {
            successRedirect: '/',
            failureRedirect: '/login',
            failureFlash: true
        })
    );
    */
    

    // Get all users
    app.get("/api/users", function (req, res) {
        db.user.findAll({}).then(function (dbUsers) {
            res.json(dbUsers);
        });
    });

    // Get user by user-id
    app.get("/api/users/:id", function (req, res) {
        db.user.findOne({
            where: {
                id: req.params.id
            }
        })
            .then(function (dbUsers) {
                res.json(dbUsers);
            })
    });

    // Create a new user
    app.post("/api/users", function (req, res) {
        db.user.create(req.body).then(function (dbUsers) {
            res.json(dbUsers);
        });
    });

    // Delete a user by id
    app.delete("/api/users/:id", function (req, res) {
        db.user.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(function (dbUsers) {
                res.json(dbUsers);
            });
    });

    // Update a user by id
    app.put("/api/users", function (req, res) {
        db.user.update(
            req.body,
            {
                where: {
                    id: req.body.id
                }
            }).then(function (dbUsers) {
                res.json(dbUsers);
            });
    });

};