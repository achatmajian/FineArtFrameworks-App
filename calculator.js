var mysql = require("mysql");
var inquirer = require("inquirer");
var colors = require("colors");
var cTable = require("console.table");

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
    managerInit();
});

function managerInit() {
    inquirer
        .prompt({
            name: "managerInit",
            type: "list",
            message: "What would you like to do today?",
            choices: ["View Frame Options", "Exit"]
        })
        .then(function (answer) {
            if (answer.managerInit === "View Frame Options") {
                frameList();
            } else {
                console.log(colors.yellow("\nLogging out of Manager session.\n"));
                connection.end();
            };
        });
};

function frameList() {
    connection.query("SELECT * FROM frames",
        function (err, results) {
            if (err) throw err;
            console.log("\n");
            console.table(results);
            managerInit();
        });
};
