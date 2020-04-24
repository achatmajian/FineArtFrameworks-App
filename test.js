// DEPENDENCIES
var mysql = require("mysql");
var inquirer = require("inquirer");
var colors = require("colors");
var cTable = require("console.table");

// MYSQL DB CONNECTION CONFIG
var connection = mysql.createConnection({
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "root420",
    database: "fafw_test_DB"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log(colors.yellow("\nLogged in as FAFW Manager.\n"));
    //managerInit();
});

var material = 'walnut';
var face_width = '0.50';
var frame_depth = '1.50';
var finish = 'natural';
var detail = 'Wax'

connection.query("SELECT * FROM frame WHERE face_width = ? AND frame_depth = ? AND material = ? AND finish = ? AND detail = ?", 
    [ face_width, frame_depth, material, finish, detail
]
    , function (err, results) {
        if (err) throw err;
        console.log(results);
        console.log("\n");
        console.table(results);

        console.log(results[0].id);
        console.log(results[0].cost_per_foot);

        materialFinishCost = results[0].cost_per_foot;
        console.log(materialFinishCost);
        //console.dir(results);
        //managerInit();

        console.log(colors.yellow("\nLogging out of Manager session.\n"));
        connection.end();
    });