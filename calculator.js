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
    managerInit();
});

/*
-------------------------------------------------------------------------------------------
*/

// INQUIRER FUNCTIONS FOR DEMO VIA NODE IN TERMINAL
function managerInit() {
    inquirer
        .prompt({
            name: "managerInit",
            type: "list",
            message: "What would you like to do today?",
            choices: ["View Frame Options","View Users","View Clients", "Exit"]
        })
        .then(function (answer) {
            if (answer.managerInit === "View Frame Options") {
                frameList();
            } else if (answer.managerInit === "View Users") {
                usersList();
                
            } else if (answer.managerInit === "View Clients") {
                clientsList();
            }
            else {
                console.log(colors.yellow("\nLogging out of Manager session.\n"));
                connection.end();
            };
        });
};

//TO VIEW FRAME OPTIONS
function frameList() {
    connection.query("SELECT * FROM frame",
        function (err, results) {
            if (err) throw err;
            console.log("\n");
            console.table(results);
            managerInit();
        });
};

// TO VIEW USERS
function usersList() {
    connection.query("SELECT * FROM users",
    function (err, results) {
        if (err) throw err;
        console.log("\n");
        console.table(results);
        managerInit();
    });
};

// TO VIEW CLIENTS
function clientsList() {
    connection.query("SELECT * FROM clients",
    function (err, results) {
        if (err) throw err;
        console.log("\n");
        console.table(results);
        managerInit();
    });
};

/*
-------------------------------------------------------------------------------------------
*/

// CALCULATOR FUN STUFF

var paperHeight, paperWidth, paperSize, imageHeight, imageWidth, imageSize, matSize, windowHeight, windowWidth, windowSize, frameHeight, frameWidth, frameSize, faceWidth, frameDepth, subtotal;
var unitedInch, material, finish, finishDesc, materialFinishCost, glaze, glazeCost, mat, matCost, float, floatCost, flush, flushCost, spacer, spacerCost, dryMount, dryMountCost, strainer, strainerCost, extra, extraCost, orderCost;
var overSize15_20, overSize20_25, overSize25, rush0, rush1, rush2, discount, discountAmt;

paperSize = paperHeight * paperWidth;
imageSize = imageHeight * imageWidth;
windowHeight = imageHeight + matSize;
windowWidth = imageWidth + matSize;
windowSize = windowHeight * windowWidth;
frameHeight = windowHeight + faceWidth;
frameWidth = windowWidth + faceWidth;
frameSize = frameHeight + frameWidth + (2 * faceWidth);
unitedInch = Math.ceil(frameSize / 6);

orderCost = (unitedInch * (materialFinishCost + glazeCost + matCost + floatCost + flushCost + spacerCost + dryMountCost + strainerCost + extraCost));
overSize15_20 = orderCost * 1.20;
oversize20_25 = orderCost * 1.30;
oversize25 = orderCost * 1.40;
discount = orderCost - (orderCost * discountAmt);



