// Dependencies
// ------------------------------------------------------------------------
var db = require("../../models");
//var passport = require("passport");


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
        db.user.findAll({
            include: [
                {
                    model: db.client,
                    include: [
                        {
                            model: db.order,
                            include: [
                                {
                                    model: db.frame
                                }
                            ]
                        }
                    ]
                }
            ]
        }).then(users => {
            const resObj = users.map(user => {

                //tidy up the user data
                return Object.assign(
                    {},
                    {
                        user_id: user.id,
                        role: user.role,
                        email: user.email,
                        first_name: user.first_name,
                        last_name: user.last_name,
                        password_hash: user.password_hash,
                        clients: user.clients.map(client => {

                            //tidy up the post data
                            return Object.assign(
                                {},
                                {
                                    client_id: client.id,
                                    user_id: client.user_id,
                                    client_email: client.email,
                                    client_phone: client.phone,
                                    client_first_name: client.first_name,
                                    client_last_name: client.last_name,
                                    client_address_one: client.address_one,
                                    client_address_two: client.address_two,
                                    client_city: client.city,
                                    client_state: client.state,
                                    client_zip: client.client_zip_code,
                                    client_type: client.client_type,
                                    userId: client.userId,
                                    orders: client.orders.map(order => {
                                        return Object.assign(
                                            {},
                                            {
                                                order_id: order.id,
                                                client_id: order.client_id,
                                                order_quantity: order.order_quanity,
                                                order_storage_location: order.order_storage_location,
                                                order_rush_status: order.order_rush_status,
                                                order_notes: order.order_notes,
                                                order_extra_costs: order.order_extra_costs,
                                                order_subtotal: order.order_subtotal,
                                                order_tax_percent: order.order_tax_percent,
                                                order_total: order.order_total,
                                                date_due: order.date_due,
                                                created_at: order.created_at,
                                                createdAt: order.createdAt,
                                                clientId: order.clientId,
                                                frames: order.frames.map(frame => {
                                                    return Object.assign(
                                                        {},
                                                        {
                                                            frame_id: frame.id,
                                                            order_id: frame.order_id,
                                                            paper_width: frame.paper_width,
                                                            paper_height: frame.paper_height,
                                                            image_width: frame.image_width,
                                                            image_height: frame.image_height,
                                                            mat_size: frame.mat_size,
                                                            float_size: frame.float_size,
                                                            window_width: frame.window_width,
                                                            window_height: frame.window_height,
                                                            face_width: frame.face_width,
                                                            frame_depth: frame.frame_depth,
                                                            frame_size: frame.frame_size,
                                                            united_inch: frame.united_inch,
                                                            mounting_type: frame.mounting_type,
                                                            drymount_name: frame.drymount_name,
                                                            drymount_detail: frame.drymount_detail,
                                                            drymount_cost: frame.drymount_cost,
                                                            extras_name: frame.extras_name,
                                                            extras_detail: frame.extras_detail,
                                                            extras_cost: frame.extras_cost,
                                                            float_name: frame.float_name,
                                                            float_detail: frame.float_detail,
                                                            float_cost: frame.float_cost,
                                                            flush_name: frame.flush_name,
                                                            flush_detail: frame.flush_detail,
                                                            flush_cost: frame.flush_cost,
                                                            glazing_name: frame.glazing_name,
                                                            glazing_detail: frame.glazing_detail,
                                                            glazing_cost: frame.glazing_cost,
                                                            mat_name: frame.mat_name,
                                                            mat_detail: frame.mat_detail,
                                                            mat_cost: frame.mat_cost,
                                                            material_name: frame.material_name,
                                                            material_detail: frame.material_detail,
                                                            material_cost: frame.material_cost,
                                                            spacer_name: frame.spacer_name,
                                                            spacer_detail: frame.spacer_detail,
                                                            spacer_cost: frame.spacer_cost,
                                                            strainer_name: frame.strainer_name,
                                                            strainer_detail: frame.strainer_detail,
                                                            strainer_cost: frame.strainer_cost,
                                                            frame_extra_cost: frame.frame_extra_cost,
                                                            frame_discount_percent: frame.frame_discount_percent,
                                                            frame_subtotal: frame.frame_subtotal,
                                                            frame_total: frame.frame_total
                                                        }
                                                    )
                                                })
                                            }
                                        )
                                    })
                                }
                            )
                        })
                    }
                )
            });
            res.json(resObj)
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