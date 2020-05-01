// DEPENDENCIES
var mysql = require("mysql");
var inquirer = require("inquirer");
var colors = require("colors");
var cTable = require("console.table");
var figlet = require("figlet");

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

    storeName();
    console.log(colors.yellow("\nLogged in as FAFW Manager.\n"));
    managerInit();
});

/*
-------------------------------------------------------------------------------------------
*/

// SHOW COMPANY NAME AT THE START OF DEMO
function storeName() {
    console.log(colors.rainbow(figlet.textSync('F A F W', {
        horizontalLayout: 'default',
        verticalLayout: 'default'
    })));
};

/*
-------------------------------------------------------------------------------------------
*/

// INQUIRER PROMPTS
function managerInit() {
    inquirer
        .prompt({
            name: "managerInit",
            type: "list",
            message: "What would you like to do today?",
            choices: ["View Users", "Create New User", "View Clients", "Create New Client", "View Orders", "Create Order", "View Dry Mount Options", "View Extras Options", "View Float Options", "View Frame Options", "View Glazing Options", "View Mat Options", "View Spacer Options", "Exit"]
        })
        .then(function (answer) {
            if (answer.managerInit === "View Frame Options") {
                frameList();
            } else if (answer.managerInit === "View Orders") {
                orderList();
            } else if (answer.managerInit === "View Dry Mount Options") {
                dryMountList();
            } else if (answer.managerInit === "View Float Options") {
                floatList();
            } else if (answer.managerInit === "View Extras Options") {
                extrasList();
            } else if (answer.managerInit === "View Glazing Options") {
                glazeList();
            } else if (answer.managerInit === "View Mat Options") {
                matsList();
            } else if (answer.managerInit === "View Spacer Options") {
                spacerList();
            } else if (answer.managerInit === "Create New Client") {
                createClient();
            } else if (answer.managerInit === "Create New User") {
                createUser();
            } else if (answer.managerInit === "View Users") {
                usersList();
            } else if (answer.managerInit === "View Clients") {
                clientsList();
            } else if (answer.managerInit === "Create Order") {
                createOrder();
            } else {
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

// TO VIEW DRYMOUNT

function dryMountList() {
    connection.query("SELECT * FROM drymount_options",
        function (err, results) {
            if (err) throw err;
            console.log("\n");
            console.table(results);
            managerInit();
        });

};

// TO VIEW EXTRAS 

function extrasList() {
    connection.query("SELECT * FROM extra_options",
        function (err, results) {
            if (err) throw err;
            console.log("\n");
            console.table(results);
            managerInit();
        });

};

// TO VIEW FLOAT

function floatList() {
    connection.query("SELECT * FROM float_options",
        function (err, results) {
            if (err) throw err;
            console.log("\n");
            console.table(results);
            managerInit();
        });

};

// TO VIEW GLAZING

function glazeList() {
    connection.query("SELECT * FROM glazing",
        function (err, results) {
            if (err) throw err;
            console.log("\n");
            console.table(results);
            managerInit();
        });

};

// TO VIEW MATS

function matsList() {
    connection.query("SELECT * FROM mat_options",
        function (err, results) {
            if (err) throw err;
            console.log("\n");
            console.table(results);
            managerInit();
        });

};

// TO VIEW ORDERS

function orderList() {
    connection.query("SELECT * FROM orders",
        function (err, results) {
            if (err) throw err;
            console.log("\n");
            console.table(results);
            managerInit();
        });

};

// TO VIEW SPACERS

function spacerList() {
    connection.query("SELECT * FROM spacer_options",
        function (err, results) {
            if (err) throw err;
            console.log("\n");
            console.table(results);
            managerInit();
        });

};

function createClient() {
    console.log(colors.blue("\n\nThis function is coming soon...\n\n"));

    managerInit();

};

function createUser() {
    console.log(colors.blue("\n\nThis function is coming soon...\n\n"));

    managerInit();

};

/*
-------------------------------------------------------------------------------------------
*/

// CALCULATOR FUN STUFF


// Variables
var paperHeight, paperWidth, paperSize, imageHeight, imageWidth, imageSize, matSize, windowHeight, windowWidth, windowSize, frameHeight, frameWidth, frameSize, faceWidth, faceWidthNum, frameDepth, subtotal,
    unitedInch, material, finish, finishDesc, materialFinishCost, glaze, glazeCost, mat, matCost, float, floatCost, flush, flushCost, spacer, spacerCost, dryMount, dryMountCost, strainer, strainerCost, extra, extraCost, orderCost,
    overSize, overSizeAmt, rush, rushAmt, isMinimum, isOverSize, isRush, discount, discountAmt, extraAmt, frameSizeInches, frameSizeActual, taxRate, finalTaxRate, taxAmt, finalCost, frameSizeTest;


// Default Values for Extras, Discounts, Oversize Rates, Rush Rates, and Taxes
extraAmt = 0;
discountAmt = 0;
overSize = 1;
rush = 1;
taxRate = 1;
taxAmt = 0;
isMinimum = false;
isOverSize = false;
isRush = false;


// Inquirer Promts to get Order Cost Calculations!!!
function createOrder() {
    inquirer
        .prompt([
            {
                name: "image_height",
                type: "input",
                message: "\nEnter the art height in inches: \n",
                validate: function (value) {
                    if (isNaN(value) === false) {
                        return true;
                    }
                    return false;
                }
            },
            {
                name: "image_width",
                type: "input",
                message: "\nEnter the art width in inches: \n",
                validate: function (value) {
                    if (isNaN(value) === false) {
                        return true;
                    }
                    return false;
                }
            },
            {
                name: "mat_size",
                type: "list",
                message: "\nSelect a mat size: \n",
                choices: ['1"', '1.5"', '2"', '2.5"', '3"']
            },
            {
                name: "face_width",
                type: "list",
                message: "\nSelect a face width: \n",
                choices: ["0.50", "0.625", "0.75", "1", "1.25"]
            },
            {
                name: "frame_depth",
                type: "list",
                message: "\nSelect a frame depth: \n",
                choices: ["1.50", "2", "2.25", "canvas floater"]
            },
            {
                name: "material",
                type: "list",
                message: "\nSelect a frame material: \n",
                choices: ["walnut", "cherry", "maple", "ash", "oak"]
            },
            {
                name: "finish",
                type: "list",
                message: "\nSelect a type of finish: \n",
                choices: ["natural", "stain", "painted"]
            },
            {
                name: "finish_desc",
                type: "list",
                message: "\nSelect the finish description: \n",
                choices: ["Natural Flat", "Natural Gloss", "Bleached", "Oil", "Wax", "Other Natural", "Roe White Wash", "Matting Wash", "New White Wash", "Andrea White Laq", "Black Stain Flat", "Black Stain Gloss", "Dark Walnut", "Roe Walnut", "Walnut #2", "Black Cherry", "Marks Brown", "Chelsea Brown", "Graphite", "ZLB", "Other Stain", "Bright White", "Matting White", "Antique", "Other Paint"]
            },
            {
                name: "fitment_mat",
                type: "list",
                message: "\nSelect the mat style: \n",
                choices: ["4 Ply Rag", "8 Ply Rag", "12 Ply Rag", "None"]
            },
            {
                name: "fitment_float",
                type: "list",
                message: "\nSelect the float style: \n",
                choices: ["Float on Rag", "Float on Linen", "Float on Silk", "None"]
            },
            {
                name: "strainer_type",
                type: "list",
                message: "\nWill you need an additional strainer? \n",
                choices: [
                    '3/8" regular strainer',
                    '1/2" regular strainer',
                    '5/8" regular strainer',
                    '3/4" regular strainer',
                    '3/8" painted strainer',
                    '1/2" painted strainer',
                    '5/8" painted strainer',
                    '3/4" painted strainer',
                    '3/8" additional strainer',
                    '1/2" additional strainer',
                    '5/8" additional strainer',
                    '3/4" additional strainer'
                ]
            },
            {
                name: "spacer_type",
                type: "list",
                message: "\nSelect the type of spacers: \n",
                choices: ["rag", "wood", "silk", "none"]
            },
            {
                name: "dry_mount",
                type: "list",
                message: "\nSelect the type of regular dry mount: \n",
                choices: [
                    'regular foam',
                    'acid free foam',
                    'rag',
                    'none',
                    'plexi 1/8" clear 8 x 10',
                    'plexi 1/8" clear 11 x 14',
                    'plexi 1/8" clear 16 x 20',
                    'plexi 1/8" clear 20 x 24', 
                    'plexi 1/8" clear 20 x 30',
                    'plexi 1/8" clear 24 x 30', 
                    'plexi 1/8" clear 30 x 40', 
                    'plexi 1/8" clear 40 x 40',
                    'plexi 1/8" clear 40 x 50', 
                    'plexi 1/8" clear 40 x 60', 
                    'plexi 1/8" clear 40 x 72',
                    'plexi 1/8" clear 40 x 84',
                    'plexi 1/8" clear 40 x 96',
                    'plexi 1/8" clear 40 x 108',
                    'plexi 1/8" clear 40 x 120',
                    'plexi 1/8" clear 48 x 50', 
                    'plexi 1/8" clear 48 x 60',
                    'plexi 1/8" clear 48 x 72',
                    'plexi 1/8" clear 48 x 84',
                    'plexi 1/8" clear 48 x 96',
                    'plexi 1/8" clear 48 x 108',
                    'plexi 1/8" clear 48 x 120',
                    'plexi 1/8" clear 60 x 60',
                    'plexi 1/8" clear 60 x 72',
                    'plexi 1/8" clear 60 x 84',
                    'plexi 1/4" clear 8 x 10',
                    'plexi 1/4" clear 11 x 14',
                    'plexi 1/4" clear 16 x 20',
                    'plexi 1/4" clear 20 x 24', 
                    'plexi 1/4" clear 20 x 30',
                    'plexi 1/4" clear 24 x 30', 
                    'plexi 1/4" clear 30 x 40', 
                    'plexi 1/4" clear 40 x 40',
                    'plexi 1/4" clear 40 x 50', 
                    'plexi 1/4" clear 40 x 60', 
                    'plexi 1/4" clear 40 x 72',
                    'plexi 1/4" clear 40 x 84',
                    'plexi 1/4" clear 40 x 96',
                    'plexi 1/4" clear 40 x 108',
                    'plexi 1/4" clear 40 x 120',
                    'plexi 1/4" clear 48 x 50', 
                    'plexi 1/4" clear 48 x 60',
                    'plexi 1/4" clear 48 x 72',
                    'plexi 1/4" clear 48 x 84',
                    'plexi 1/4" clear 48 x 96',
                    'plexi 1/4" clear 48 x 108',
                    'plexi 1/4" clear 48 x 120',
                    'plexi 1/4" clear 60 x 60',
                    'plexi 1/4" clear 60 x 72',
                    'plexi 1/4" clear 60 x 84',
                    'sintra 3mm white 8 x 10',
                    'sintra 3mm white 11 x 14',
                    'sintra 3mm white 16 x 20',
                    'sintra 3mm white 20 x 24', 
                    'sintra 3mm white 20 x 30',
                    'sintra 3mm white 24 x 30', 
                    'sintra 3mm white 30 x 40', 
                    'sintra 3mm white 40 x 40',
                    'sintra 3mm white 40 x 50', 
                    'sintra 3mm white 40 x 60', 
                    'sintra 3mm white 40 x 72',
                    'sintra 3mm white 40 x 84',
                    'sintra 3mm white 40 x 96',
                    'sintra 3mm white 40 x 108',
                    'sintra 3mm white 40 x 120',
                    'sintra 3mm white 48 x 50', 
                    'sintra 3mm white 48 x 60',
                    'sintra 3mm white 48 x 72',
                    'sintra 3mm white 48 x 84',
                    'sintra 3mm white 48 x 96',
                    'sintra 3mm white 48 x 108',
                    'sintra 3mm white 48 x 120',
                    'sintra 3mm white 60 x 60',
                    'sintra 3mm white 60 x 72',
                    'sintra 3mm white 60 x 84',
                    'sintra 6mm 8 x 10',
                    'sintra 6mm 11 x 14',
                    'sintra 6mm 16 x 20',
                    'sintra 6mm 20 x 24', 
                    'sintra 6mm 20 x 30',
                    'sintra 6mm 24 x 30', 
                    'sintra 6mm 30 x 40', 
                    'sintra 6mm 40 x 40',
                    'sintra 6mm 40 x 50', 
                    'sintra 6mm 40 x 60', 
                    'sintra 6mm 40 x 72',
                    'sintra 6mm 40 x 84',
                    'sintra 6mm 40 x 96',
                    'sintra 6mm 40 x 108',
                    'sintra 6mm 40 x 120',
                    'sintra 6mm 48 x 50', 
                    'sintra 6mm 48 x 60',
                    'sintra 6mm 48 x 72',
                    'sintra 6mm 48 x 84',
                    'sintra 6mm 48 x 96',
                    'sintra 6mm 48 x 108',
                    'sintra 6mm 48 x 120',
                    'sintra 6mm 60 x 60',
                    'sintra 6mm 60 x 72',
                    'sintra 6mm 60 x 84',
                    'dibond 8 x 10',
                    'dibond 11 x 14',
                    'dibond 16 x 20',
                    'dibond 20 x 24', 
                    'dibond 20 x 30',
                    'dibond 24 x 30', 
                    'dibond 30 x 40', 
                    'dibond 40 x 40',
                    'dibond 40 x 50', 
                    'dibond 40 x 60', 
                    'dibond 40 x 72',
                    'dibond 40 x 84',
                    'dibond 40 x 96',
                    'dibond 40 x 108',
                    'dibond 40 x 120',
                    'dibond 48 x 50', 
                    'dibond 48 x 60',
                    'dibond 48 x 72',
                    'dibond 48 x 84',
                    'dibond 48 x 96',
                    'dibond 48 x 108',
                    'dibond 48 x 120',
                    'dibond 60 x 60',
                    'dibond 60 x 72',
                    'dibond 60 x 84',
                    'aluminum .063" 8 x 10',
                    'aluminum .063" 11 x 14',
                    'aluminum .063" 16 x 20',
                    'aluminum .063" 20 x 24', 
                    'aluminum .063" 20 x 30',
                    'aluminum .063" 24 x 30', 
                    'aluminum .063" 30 x 40', 
                    'aluminum .063" 40 x 40',
                    'aluminum .063" 40 x 50', 
                    'aluminum .063" 40 x 60', 
                    'aluminum .063" 40 x 72',
                    'aluminum .063" 40 x 84',
                    'aluminum .063" 40 x 96',
                    'aluminum .063" 40 x 108',
                    'aluminum .063" 40 x 120',
                    'aluminum .063" 48 x 50', 
                    'aluminum .063" 48 x 60',
                    'aluminum .063" 48 x 72',
                    'aluminum .063" 48 x 84',
                    'aluminum .063" 48 x 96',
                    'aluminum .063" 48 x 108',
                    'aluminum .063" 48 x 120',
                    'aluminum .063" 60 x 60',
                    'aluminum .063" 60 x 72',
                    'aluminum .063" 60 x 84' 
                ]
            },
            {
                name: "glazing",
                type: "list",
                message: "\nSelect the type of glazing: \n",
                choices: ["Glass", "Regular Plexi", "OP-3 plexi", "True Vue Ultra Vue", "True Vue Museum Glass/Art Glass", "Optimum Museum Plexi up to 40 x 60", "Optimum Museum Plexi up to 48 x 96", "Optimum Museum Plexi up to 72 x 96", "Optimum Museum Plexi up to 72 x 120", "None"]
            },
            {
                name: "extras",
                type: "list",
                message: "\nAny extras? \n",
                choices: ["none", "stretch canvas", "raise mount", "de-fit/re-fit", "re-finish + de-fit/re-fit"]
            },
            {
                name: "discount",
                type: "input",
                message: "\nAre there any discounts? If there are no discounts, please enter '0'. Otherwise, enter the discount amount.\n",
                validate: function (value) {
                    if (isNaN(value) === false) {
                        return true;
                    }
                    return false;
                }
            },
            {
                name: "rush",
                type: "list",
                message: "\nIs this a rush job?\n",
                choices: ["No", "Yes: 2 Weeks", "Yes: 1 Week"]
            },
            {
                name: "tax",
                type: "list",
                message: "\nWhere is this frame being shipped?\n",
                choices: ["NY", "NJ", "CT"]
            },
        ])
        .then(function (answer) {

            // Image Height
            imageHeight = parseInt(answer.image_height);

            // Image Width
            imageWidth = parseInt(answer.image_width);

            // Mat Size
            if (answer.mat_size === '1"') {
                matSize = 1;
            } else if (answer.mat_size === '1.5"') {
                matSize = 1.5;
            }
            else if (answer.mat_size === '2"') {
                matSize = 2;
            } else if (answer.mat_size === '2.5"') {
                matSize = 2.5;
            }
            else if (answer.mat_size === '3"') {
                matSize = 3;
            }
            else {
                matSize = 0;
            };

            // Face Width
            if (answer.face_width === '0.50') {
                faceWidth = '0.50';
                faceWidthNum = 0.50;
            } else if (answer.face_width === '0.625') {
                faceWidth = '0.625';
                faceWidthNum = 0.625;
            } else if (answer.face_width === '0.75') {
                faceWidth = '0.75';
                faceWidthNum = 0.75;
            } else if (answer.face_width === '1') {
                faceWidth = '1';
                faceWidthNum = 1;
            } else if (answer.face_width === '1.25') {
                faceWidth = '1.25';
                faceWidthNum = 1.25;
            };

            // Frame Depth
            if (answer.frame_depth === '1.50') {
                frameDepth = '1.50';
            } else if (answer.frame_depth === '2') {
                frameDepth = '2';
            } else if (answer.frame_depth === '2.25') {
                frameDepth = '2.25';
            } else if (answer.frame_depth === 'canvas floater') {
                frameDepth = 'canvas floater';
            };

            // Frame Material Cost
            material = answer.material;
            finish = answer.finish;
            finishDesc = answer.finish_desc;

            // Fitment - Mat Cost Per Foot
            if (answer.fitment_mat === "4 Ply Rag") {
                mat = answer.fitment_mat;
                matCost = 5.50;
            } else if (answer.fitment_mat === "8 Ply Rag") {
                mat = answer.fitment_mat;
                matCost = 12;
            } else if (answer.fitment_mat === "12 Ply Rag") {
                mat = answer.fitment_mat;
                matCost = 21;
            } else {
                mat = "n/a";
                matCost = 0;
            };

            // Fitment - Float Cost Per Foot
            if (answer.fitment_float === "Float on Rag") {
                float = answer.fitment_float;
                floatCost = 8;
            } else if (answer.fitment_float === "Float on Linen") {
                float = answer.fitment_float;
                floatCost = 15.5;
            } else if (answer.fitment_float === "Float on Silk") {
                float = answer.fitment_float;
                floatCost = 18;
            } else {
                float = "n/a";
                floatCost = 0;
            };

            // Fitment - Spacer Cost Per Foot
            if (answer.spacer_type === "rag") {
                spacer = answer.spacer_type;
                spacerCost = 6;
            } else if (answer.spacer_type === "wood") {
                spacer = answer.spacer_type;
                spacerCost = 8;
            } else if (answer.spacer_type === "silk") {
                spacer = answer.spacer_type;
                spacerCost = 10;
            } else {
                spacer = "n/a";
                spacerCost = 0;
            };

            // Fitment - Dry Mount Cost per Foot
            if (answer.dry_mount === "regular foam") {
                dryMount = answer.dry_mount;
                dryMountCost = 5.5;
            } else if (answer.dry_mount === "acid free foam") {
                dryMount = answer.dry_mount;
                dryMountCost = 8;
            } else if (answer.dry_mount === "rag") {
                dryMount = answer.dry_mount;
                dryMountCost = 9;
            } else if (answer.dry_mount === 'plexi 1/8" clear 8 x 10') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 45;
            } else if (answer.dry_mount === 'plexi 1/8" clear 11 x 14') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 52;
            } else if (answer.dry_mount === 'plexi 1/8" clear 16 x 20') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 58;
            } else if (answer.dry_mount === 'plexi 1/8" clear 20 x 24') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 70;
            } else if (answer.dry_mount === 'plexi 1/8" clear 20 x 30') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 90;
            } else if (answer.dry_mount === 'plexi 1/8" clear 24 x 30') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 96;
            } else if (answer.dry_mount === 'plexi 1/8" clear 30 x 40') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 130;
            } else if (answer.dry_mount === 'plexi 1/8" clear 40 x 40') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 185;
            } else if (answer.dry_mount === 'plexi 1/8" clear 40 x 50') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 212;
            } else if (answer.dry_mount === 'plexi 1/8" clear 40 x 60') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 255;
            } else if (answer.dry_mount === 'plexi 1/8" clear 40 x 72') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 298;
            } else if (answer.dry_mount === 'plexi 1/8" clear 40 x 84') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 340;
            } else if (answer.dry_mount === 'plexi 1/8" clear 40 x 96') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 363;
            } else if (answer.dry_mount === 'plexi 1/8" clear 40 x 108') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 418;
            } else if (answer.dry_mount === 'plexi 1/8" clear 40 x 120') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 450;
            } else if (answer.dry_mount === 'plexi 1/8" clear 48 x 50') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 270;
            } else if (answer.dry_mount === 'plexi 1/8" clear 48 x 60') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 320;
            } else if (answer.dry_mount === 'plexi 1/8" clear 48 x 72') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 373;
            } else if (answer.dry_mount === 'plexi 1/8" clear 48 x 84') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 392;
            } else if (answer.dry_mount === 'plexi 1/8" clear 48 x 96') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 410;
            } else if (answer.dry_mount === 'plexi 1/8" clear 48 x 108') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 452;
            } else if (answer.dry_mount === 'plexi 1/8" clear 48 x 120') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 500;
            } else if (answer.dry_mount === 'plexi 1/8" clear 60 x 60') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 392;
            } else if (answer.dry_mount === 'plexi 1/8" clear 60 x 72') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 452;
            } else if (answer.dry_mount === 'plexi 1/8" clear 60 x 84') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 470;
            } else if (answer.dry_mount === 'plexi 1/4" clear 8 x 10') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 48;
            } else if (answer.dry_mount === 'plexi 1/4" clear 11 x 14') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 54;
            } else if (answer.dry_mount === 'plexi 1/4" clear 16 x 20') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 65;
            } else if (answer.dry_mount === 'plexi 1/4" clear 20 x 24') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 77;
            } else if (answer.dry_mount === 'plexi 1/4" clear 20 x 30') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 97;
            } else if (answer.dry_mount === 'plexi 1/4" clear 24 x 30') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 105;
            } else if (answer.dry_mount === 'plexi 1/4" clear 30 x 40') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 142;
            } else if (answer.dry_mount === 'plexi 1/4" clear 40 x 40') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 210;
            } else if (answer.dry_mount === 'plexi 1/4" clear 40 x 50') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 234;
            } else if (answer.dry_mount === 'plexi 1/4" clear 40 x 60') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 290;
            } else if (answer.dry_mount === 'plexi 1/4" clear 40 x 72') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 340;
            } else if (answer.dry_mount === 'plexi 1/4" clear 40 x 84') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 373;
            } else if (answer.dry_mount === 'plexi 1/4" clear 40 x 96') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 400;
            } else if (answer.dry_mount === 'plexi 1/4" clear 40 x 108') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 440;
            } else if (answer.dry_mount === 'plexi 1/4" clear 40 x 120') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 480;
            } else if (answer.dry_mount === 'plexi 1/4" clear 48 x 50') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 294;
            } else if (answer.dry_mount === 'plexi 1/4" clear 48 x 60') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 340;
            } else if (answer.dry_mount === 'plexi 1/4" clear 48 x 72') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 410;
            } else if (answer.dry_mount === 'plexi 1/4" clear 48 x 84') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 426;
            } else if (answer.dry_mount === 'plexi 1/4" clear 48 x 96') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 448;
            } else if (answer.dry_mount === 'plexi 1/4" clear 48 x 108') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 492;
            } else if (answer.dry_mount === 'plexi 1/4" clear 48 x 120') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 560;
            } else if (answer.dry_mount === 'plexi 1/4" clear 60 x 60') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 425;
            } else if (answer.dry_mount === 'plexi 1/4" clear 60 x 72') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 492;
            } else if (answer.dry_mount === 'plexi 1/4" clear 60 x 84') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 520;
            } else if (answer.dry_mount === 'sintra 3mm white 8 x 10') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 34;
            } else if (answer.dry_mount === 'sintra 3mm white 11 x 14') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 36;
            } else if (answer.dry_mount === 'sintra 3mm white 16 x 20') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 43;
            } else if (answer.dry_mount === 'sintra 3mm white 20 x 24') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 52;
            } else if (answer.dry_mount === 'sintra 3mm white 20 x 30') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 67;
            } else if (answer.dry_mount === 'sintra 3mm white 24 x 30') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 73;
            } else if (answer.dry_mount === 'sintra 3mm white 30 x 40') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 97;
            } else if (answer.dry_mount === 'sintra 3mm white 40 x 40') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 132;
            } else if (answer.dry_mount === 'sintra 3mm white 40 x 50') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 145;
            } else if (answer.dry_mount === 'sintra 3mm white 40 x 60') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 182;
            } else if (answer.dry_mount === 'sintra 3mm white 40 x 72') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 230;
            } else if (answer.dry_mount === 'sintra 3mm white 40 x 84') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 250;
            } else if (answer.dry_mount === 'sintra 3mm white 40 x 96') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 266;
            } else if (answer.dry_mount === 'sintra 3mm white 40 x 108') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 265;
            } else if (answer.dry_mount === 'sintra 3mm white 40 x 120') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 320;
            } else if (answer.dry_mount === 'sintra 3mm white 48 x 50') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 194;
            } else if (answer.dry_mount === 'sintra 3mm white 48 x 60') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 230;
            } else if (answer.dry_mount === 'sintra 3mm white 48 x 72') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 266;
            } else if (answer.dry_mount === 'sintra 3mm white 48 x 84') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 290;
            } else if (answer.dry_mount === 'sintra 3mm white 48 x 96') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 315;
            } else if (answer.dry_mount === 'sintra 3mm white 48 x 108') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 345;
            } else if (answer.dry_mount === 'sintra 3mm white 48 x 120') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 374;
            } else if (answer.dry_mount === 'sintra 3mm white 60 x 60') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 290;
            } else if (answer.dry_mount === 'sintra 3mm white 60 x 72') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 345;
            } else if (answer.dry_mount === 'sintra 3mm white 60 x 84') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 360;
            } else if (answer.dry_mount === 'sintra 6mm 8 x 10') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 36;
            } else if (answer.dry_mount === 'sintra 6mm 11 x 14') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 40;
            } else if (answer.dry_mount === 'sintra 6mm 16 x 20') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 47;
            } else if (answer.dry_mount === 'sintra 6mm 20 x 24') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 58;
            } else if (answer.dry_mount === 'sintra 6mm 20 x 30') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 73;
            } else if (answer.dry_mount === 'sintra 6mm 24 x 30') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 85;
            } else if (answer.dry_mount === 'sintra 6mm 30 x 40') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 110;
            } else if (answer.dry_mount === 'sintra 6mm 40 x 40') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 154;
            } else if (answer.dry_mount === 'sintra 6mm 40 x 50') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 170;
            } else if (answer.dry_mount === 'sintra 6mm 40 x 60') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 206;
            } else if (answer.dry_mount === 'sintra 6mm 40 x 72') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 250;
            } else if (answer.dry_mount === 'sintra 6mm 40 x 84') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 266;
            } else if (answer.dry_mount === 'sintra 6mm 40 x 96') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 290;
            } else if (answer.dry_mount === 'sintra 6mm 40 x 108') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 320;
            } else if (answer.dry_mount === 'sintra 6mm 40 x 120') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 350;
            } else if (answer.dry_mount === 'sintra 6mm 48 x 50') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 218;
            } else if (answer.dry_mount === 'sintra 6mm 48 x 60') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 254;
            } else if (answer.dry_mount === 'sintra 6mm 48 x 72') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 290;
            } else if (answer.dry_mount === 'sintra 6mm 48 x 84') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 320;
            } else if (answer.dry_mount === 'sintra 6mm 48 x 96') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 315;
            } else if (answer.dry_mount === 'sintra 6mm 48 x 108') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 374;
            } else if (answer.dry_mount === 'sintra 6mm 48 x 120') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 407;
            } else if (answer.dry_mount === 'sintra 6mm 60 x 60') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 330;
            } else if (answer.dry_mount === 'sintra 6mm 60 x 72') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 352;
            } else if (answer.dry_mount === 'sintra 6mm 60 x 84') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 374;
            } else if (answer.dry_mount === 'dibond 8 x 10') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 68;
            } else if (answer.dry_mount === 'dibond 11 x 14') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 81;
            } else if (answer.dry_mount === 'dibond 16 x 20') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 100;
            } else if (answer.dry_mount === 'dibond 20 x 24') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 120;
            } else if (answer.dry_mount === 'dibond 20 x 30') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 158;
            } else if (answer.dry_mount === 'dibond 24 x 30') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 180;
            } else if (answer.dry_mount === 'dibond 30 x 40') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 210;
            } else if (answer.dry_mount === 'dibond 40 x 40') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 310;
            } else if (answer.dry_mount === 'dibond 40 x 50') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 310;
            } else if (answer.dry_mount === 'dibond 40 x 60') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 370;
            } else if (answer.dry_mount === 'dibond 40 x 72') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 425;
            } else if (answer.dry_mount === 'dibond 40 x 84') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 490;
            } else if (answer.dry_mount === 'dibond 40 x 96') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 538;
            } else if (answer.dry_mount === 'dibond 40 x 108') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 578;
            } else if (answer.dry_mount === 'dibond 40 x 120') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 612;
            } else if (answer.dry_mount === 'dibond 48 x 50') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 370;
            } else if (answer.dry_mount === 'dibond 48 x 60') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 420;
            } else if (answer.dry_mount === 'dibond 48 x 72') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 470;
            } else if (answer.dry_mount === 'dibond 48 x 84') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 520;
            } else if (answer.dry_mount === 'dibond 48 x 96') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 560;
            } else if (answer.dry_mount === 'dibond 48 x 108') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 640;
            } else if (answer.dry_mount === 'dibond 48 x 120') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 720;
            } else if (answer.dry_mount === 'dibond 60 x 60') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 484;
            } else if (answer.dry_mount === 'dibond 60 x 72') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 545;
            } else if (answer.dry_mount === 'dibond 60 x 84') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 610;
            } else if (answer.dry_mount === 'aluminum .063" 8 x 10') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 70;
            } else if (answer.dry_mount === 'aluminum .063" 11 x 14') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 85;
            } else if (answer.dry_mount === 'aluminum .063" 16 x 20') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 110;
            } else if (answer.dry_mount === 'aluminum .063" 20 x 24') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 140; 
            } else if (answer.dry_mount === 'aluminum .063" 20 x 30') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 170;
            } else if (answer.dry_mount === 'aluminum .063" 24 x 30') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 190;
            } else if (answer.dry_mount === 'aluminum .063" 30 x 40') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 280;
            } else if (answer.dry_mount === 'aluminum .063" 40 x 40') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 365;
            } else if (answer.dry_mount === 'aluminum .063" 40 x 50') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 375;
            } else if (answer.dry_mount === 'aluminum .063" 40 x 60') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 430;
            } else if (answer.dry_mount === 'aluminum .063" 40 x 72') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 500;
            } else if (answer.dry_mount === 'aluminum .063" 40 x 84') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 580;
            } else if (answer.dry_mount === 'aluminum .063" 40 x 96') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 640;
            } else if (answer.dry_mount === 'aluminum .063" 40 x 108') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 680;
            } else if (answer.dry_mount === 'aluminum .063" 40 x 120') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 720;
            } else if (answer.dry_mount === 'aluminum .063" 48 x 50') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 440;
            } else if (answer.dry_mount === 'aluminum .063" 48 x 60') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 490;
            } else if (answer.dry_mount === 'aluminum .063" 48 x 72') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 570;
            } else if (answer.dry_mount === 'aluminum .063" 48 x 84') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 640;
            } else if (answer.dry_mount === 'aluminum .063" 48 x 96') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 680;
            } else if (answer.dry_mount === 'aluminum .063" 48 x 108') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 720;
            } else if (answer.dry_mount === 'aluminum .063" 48 x 120') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 780;
            } else if (answer.dry_mount === 'aluminum .063" 60 x 60') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 560;
            } else if (answer.dry_mount === 'aluminum .063" 60 x 72') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 640;
            } else if (answer.dry_mount === 'aluminum .063" 60 x 84') {
                dryMount = answer.dry_mount;
                dryMountCost = 0;
                extraAmt = extraAmt + 710;
            } else {
                dryMount = "n/a";
                dryMountCost = 0;
            };

            // Glaze Cost Per Foot
            if (answer.glazing === "Glass") {
                glaze = answer.glazing;
                glazeCost = 8;
            } else if (answer.glazing === "Regular Plexi") {
                glaze = answer.glazing;
                glazeCost = 12;
            } else if (answer.glazing === "OP-3 plexi") {
                glaze = answer.glazing;
                glazeCost = 19;
            } else if (answer.glazing === "True Vue Ultra Vue") {
                glaze = answer.glazing;
                glazeCost = 21;
            } else if (answer.glazing === "True Vue Museum Glass/Art Glass") {
                glaze = answer.glazing;
                glazeCost = 35;
            } else if (answer.glazing === "Optimum Museum Plexi up to 40 x 60") {
                glaze = answer.glazing;
                glazeCost = 0;
                extraAmt = extraAmt + 990;
            } else if (answer.glazing === "Optimum Museum Plexi up to 48 x 96") {
                glaze = answer.glazing;
                glazeCost = 0;
                extraAmt = extraAmt + 1450;
            } else if (answer.glazing === "Optimum Museum Plexi up to 72 x 96") {
                glaze = answer.glazing;
                glazeCost = 0;
                extraAmt = extraAmt + 3200;
            } else if (answer.glazing === "Optimum Museum Plexi up to 72 x 120") {
                glaze = answer.glazing;
                glazeCost = 0;
                extraAmt = extraAmt + 7400;
            } else {
                glaze = "n/a"
                glazeCost = 0;
            };

            /*
                    '3/8" painted strainer',
                    '1/2" painted strainer',
                    '5/8" painted strainer',
                    '3/4" painted strainer',
                    '3/8" additional strainer',
                    '1/2" additional strainer',
                    '5/8" additional strainer',
                    '3/4" additional strainer'

            */

            // Strainers Cost Per Foot
            if (answer.strainer_type === '3/8" regular strainer') {
                strainer = answer.strainer_type;
                strainerCost = 7;
            } else if (answer.strainer_type === '1/2" regular strainer') {
                strainer = answer.strainer_type;
                strainerCost = 7;
            } else if (answer.strainer_type === '5/8" regular strainer') {
                strainer = answer.strainer_type;
                strainerCost = 7;
            } else if (answer.strainer_type === '3/4" regular strainer') {
                strainer = answer.strainer_type;
                strainerCost = 7;
            } else if (answer.strainer_type === '3/8" painted strainer') {
                strainer = answer.strainer_type;
                strainerCost = 11;
            } else if (answer.strainer_type === '1/2" painted strainer') {
                strainer = answer.strainer_type;
                strainerCost = 11;
            } else if (answer.strainer_type === '5/8" painted strainer') {
                strainer = answer.strainer_type;
                strainerCost = 11;
            } else if (answer.strainer_type === '3/4" painted strainer') {
                strainer = answer.strainer_type;
                strainerCost = 11; 
            } else {
                strainer = answer.strainer_type;
                strainerCost = 0;
            };

            // Extras Cost Per Foot
            if (answer.extras === "stretch canvas") {
                extra = answer.extras;
                extraCost = 10;
            } else if (answer.extras === "raise mount") {
                extra = answer.extras;
                extraCost = 5;
            } else if (answer.extras === "de-fit/re-fit") {
                extra = answer.extras;
                extraCost = 8;
            } else if (answer.extras === "re-finish + de-fit/re-fit") {
                extra = answer.extras;
                extraCost = 27;
            } else {
                extra = "n/a";
                extraCost = 0;
            };

            // Discount Costs
            if (answer.discount === 0) {
                discount = 0;
                discountAmt = 0;
            } else {
                discount = parseInt(answer.discount) * 0.01;
            };

            // Rush Costs
            if (answer.rush === "No") {
                rush = 1;
            } else if (answer.rush === "Yes: 2 Weeks") {
                rush = 1.20;
            } else if (answer.rush === "Yes: 1 Week") {
                rush = 1.30;
            };

            // Booleans for rush
            if (rush != 1) {
                isRush = true;
            } else {
                isRush = false;
            };

            //Booleans for oversize
            if (overSize != 1) {
                isOverSize = true;
            } else {
                isOverSize = false;
            }

            // Tax Costs
            if (answer.tax === "NY") {
                taxRate = 1.08725;
            } else if (answer.tax === "NJ") {
                taxRate = 1;
            } else if (answer.tax === "CT") {
                taxRate = 1.0635;
            };

            // Dimension Variables & Dimension Calculations
            function roundHalf(num) { return (Math.round(num * 2) / 2) };
            paperSize = paperHeight + paperWidth;
            imageSize = imageHeight + imageWidth;
            windowHeight = imageHeight + (matSize * 2);
            windowWidth = imageWidth + (matSize * 2);
            windowSize = windowHeight + windowWidth;
            frameHeight = windowHeight + (faceWidthNum * 2);
            frameWidth = windowWidth + (faceWidthNum * 2);
            frameSize = roundHalf((windowHeight + windowWidth + (2 * faceWidthNum)) / 12);
            frameSizeActual = roundHalf((windowHeight + windowWidth + (2 * faceWidthNum)) / 12);
            frameSizeInches = roundHalf(windowHeight + windowWidth + (2 * faceWidthNum));

            // United Inch Calc (comes after the Minimum if/else checks to account for isMinimum = true)
            unitedInch = roundHalf((frameSize * 12) / 6);

            // Minimum and Oversize Costs
            if (frameSizeInches < 60) {
                unitedInch = 5;
                overSize = 1;
                isMinimum = true;
            } else if (unitedInch >= 15 && unitedInch <= 19.5) {
                overSize = 1.20;
                isOverSize = true;
            } else if (unitedInch >= 20 && unitedInch <= 24.5) {
                overSize = 1.30;
                isOverSize = true;
            } else if (25 <= unitedInch) {
                overSize = 1.40;
                isOverSize = true;
            } else {
                overSize = 1;
                isMinimum = false;
            };

            // MySQL query to get the actual cost of the selected materials defined above
            connection.query("SELECT * FROM frame WHERE face_width = ? AND frame_depth = ? AND material = ? AND finish = ? AND detail = ?",
                [faceWidth, frameDepth, material, finish, finishDesc
                ]
                , function (err, results) {
                    if (err) throw err;

                    materialFinishCost = results[0].cost_per_foot;

                    subtotal = ((materialFinishCost + matCost + floatCost + spacerCost + dryMountCost + glazeCost + strainerCost + extraCost) * unitedInch);

                    discountAmt = subtotal * discount;

                    var frameTotal = subtotal - discountamt;

                    overSizeAmt = subtotal * (overSize - 1);

                    rushAmt = subtotal * (rush - 1);

                    finalTaxRate = (taxRate - 1) * 100;

                    orderCost = (subtotal * overSize * rush) - discountAmt + extraAmt;

                    taxAmt = (finalTaxRate / 100) * orderCost;

                    finalCost = orderCost + taxAmt;

                    console.log(
                        "\n\n====================================================================================================================\n\n" +
                        //colors.yellow("\n\nImage Size (inches): ") + imageHeight + '" x ' + imageWidth + '"' + "\n\n" +
                        //colors.yellow("Mat Size (inches): ") + matSize + '"' + "\n\n" +
                        //colors.yellow("Window Size (inches): ") + windowHeight + '" x ' + windowWidth + '"' + "\n\n" +
                        //colors.yellow("Face Width (inches): ") + faceWidth + '"' + "\n\n" +
                        //colors.yellow("Frame Depth (inches): ") + frameDepth + '"' + "\n\n" +
                        //colors.yellow("Frame Size (inches): ") + frameSizeInches + '"' + "\n\n" +
                        //colors.yellow("Actual Frame Size (feet): ") + frameSizeActual + "'\n\n" +
                        //colors.yellow("Frame Size (feet): ") + frameSize + "' (To account for any '5 Minimums in calculations)\n\n" +
                        colors.yellow("Frame Dimensions: ") + frameHeight + " x " + frameWidth + "\n\n" +
                        colors.yellow("United Inch Number: ") + unitedInch + "\n\n" +
                        "--------------------------------------------------------------------------------------------------------------------" + "\n\n" +
                        colors.yellow("Frame Build: ") + colors.cyan("Material: ") + material + ", " + colors.cyan("Finish: ") + finish + ", " + colors.cyan("Finish Option: ") + finishDesc + "\n\n" +
                        colors.yellow("Frame Material: ") + material + " at " + colors.green("$" + materialFinishCost) + " per foot " + "\n\n" +
                        colors.yellow("Mat: ") + mat + " at " + colors.green("$" + matCost) + " per foot" + "\n\n" +
                        colors.yellow("Float: ") + float + " at " + colors.green("$" + floatCost) + " per foot" + "\n\n" +
                        colors.yellow("Spacer: ") + spacer + " at " + colors.green("$" + spacerCost) + " per foot" + "\n\n" +
                        colors.yellow("Dry Mount: ") + dryMount + " at " + colors.green("$" + dryMountCost) + " per foot" + "\n\n" +
                        colors.yellow("Glazing: ") + glaze + " at " + colors.green("$" + glazeCost) + " per foot" + "\n\n" +
                        colors.yellow("Strainer: ") + strainer + " at " + colors.green("$" + strainerCost) + " per foot" + "\n\n" +
                        colors.yellow("Extras: ") + extra + " at " + colors.green("$" + extraCost) + " per foot" + "\n\n" +
                        colors.yellow("Other Extras Per Frame: ") + colors.green("$" + extraAmt) + "\n\n" +
                        "--------------------------------------------------------------------------------------------------------------------" + "\n\n" +
                        colors.yellow("Minimum: ") + colors.cyan(isMinimum) + " | " + colors.yellow("Oversize: ") + colors.cyan(isOverSize) + " | " + colors.yellow("Rush: ") + colors.cyan(isRush) + "\n\n" +
                        "--------------------------------------------------------------------------------------------------------------------" + "\n\n" +
                        colors.yellow("Frame Subtotal: ") + colors.green("$" + subtotal.toFixed(2)) + "\n\n" +
                        //colors.yellow("Frame Discount Percentage: ") + colors.magenta((discount * 100) + "%") + "\n\n" +
                        colors.yellow("Frame Discount Amount: ") + colors.magenta("-$" + discountAmt.toFixed(2)) + "\n\n" +
                        colors.yellow("Oversize Amount: ") + colors.green("$" + overSizeAmt.toFixed(2)) + "\n\n" +
                        colors.yellow("Rush Amount: ") + colors.green("$" + rushAmt.toFixed(2)) + "\n\n" +
                        colors.yellow("Tax Rate Percentage: ") + colors.cyan(finalTaxRate.toFixed(3) + "%") + "\n\n" +
                        colors.yellow("Tax Amount: ") + colors.cyan("$" + taxAmt.toFixed(2)) + "\n\n" +
                        "====================================================================================================================" + "\n\n" +
                        colors.yellow("Total Order Cost: ") + colors.green("$" + finalCost.toFixed(2)) + "\n\n"

                    );

                    managerInit();




                });





        });
};