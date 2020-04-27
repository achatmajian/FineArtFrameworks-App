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
    password: "password",
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

// INQUIRER FUNCTIONS FOR DEMO VIA NODE IN TERMINAL
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
            }else if (answer.managerInit === "View Glazing Options") {
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

var paperHeight, paperWidth, paperSize, imageHeight, imageWidth, imageSize, matSize, windowHeight, windowWidth, windowSize, frameHeight, frameWidth, frameSize, faceWidth, frameDepth, subtotal;
var unitedInch, material, finish, finishDesc, materialFinishCost, glaze, glazeCost, mat, matCost, float, floatCost, flush, flushCost, spacer, spacerCost, dryMount, dryMountCost, strainer, strainerCost, extra, extraCost, orderCost;
var minimum, oversized, rushJob, overSize15_20, overSize20_25, overSize25, rush0, rush1, rush2, discount, discountAmt, extraAmt;

paperSize = paperHeight * paperWidth;
imageSize = imageHeight * imageWidth;
windowHeight = imageHeight + matSize;
windowWidth = imageWidth + matSize;
windowSize = windowHeight * windowWidth;
frameHeight = windowHeight + faceWidth;
frameWidth = windowWidth + faceWidth;
frameSize = imageHeight + imageWidth + (2 * faceWidth);
unitedInch = Math.ceil(frameSize / 6);
//oversized = false;
//rushJob = false;
//minimum = false;

//orderCost = (unitedInch * (materialFinishCost + glazeCost + matCost + floatCost + flushCost + spacerCost + dryMountCost + strainerCost + extraCost));
extraAmt = 0;
overSize15_20 = 1;
oversize20_25 = 1;
oversize25 = 1;
rush0 = 1;
rush1 = 1;
rush2 = 1;

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
                message: "\nSelect a strainer type: \n",
                choices: ["Strainer", "Painted Strainer"]
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
                message: "\nSelect the type of dry mount: \n",
                choices: ["regular foam", "acid free foam", "rag", "none"]
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
            }
        ])
        .then(function (answer) {

            // Image Height
            imageHeight = answer.image_height;

            // Image Width
            imageWidth = answer.image_width;

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
            } else if (answer.face_width === '0.625') {
                faceWidth = '0.625';
            } else if (answer.face_width === '0.75') {
                faceWidth = '0.75';
            } else if (answer.face_width === '1') {
                faceWidth = '1';
            } else if (answer.face_width === '1.25') {
                faceWidth = '1.25';
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

            // Frame Sizing Calculations
            function roundHalf(num) {
                return (Math.round(num * 2) / 2).toFixed(1);
            };

            frameSize = roundHalf((parseInt(imageHeight) + parseInt(imageWidth) + (2 * parseInt(faceWidth))) / 12);

            // 5' Minimum 
            if (frameSize < 5) {
                //minimum = true;
                frameSize = 5;
                //ovesized = false;
                // Oversize 15-20'
            //} else if (5 < frameSize < 15) {
                //oversized = false;
            } else if (15 <= frameSize <= 20) {
                overSize15_20 = 1.20;
                //oversized = true;
                // Oversize 20-25'
            } else if (20 < frameSize <= 25) {
                overSize20_25 = 1.30;
                //oversized = true;
                // Oversize 25'+
            } else if (frameSize > 25) {
                overSize25 = 1.40;
                //oversized = true;
            };

            // Rush Job
            if (answer.rush === "No") {
                rush0 = 1;
                //rushJob = false;
            } else if (answer.rush === "Yes: 2 Weeks" ) {
                rush1 = 1.20;
                //rushJob = true;
            } else if (answer.rush === "Yes: 1 Week") {
                rush2 = 1.30;
                //rushJob = true;
            }
 
                
            // Discount
            if ( answer.discount === 0) {
                discount = 0;
            } else {
                discount = (parseInt(answer.discount) * 0.01);
            } 

            // United Inch Math Logic
            unitedInch = Math.ceil(parseInt(frameSize * 12) / 6);
            

            // Frame Material
            material = answer.material;
            finish = answer.finish;
            finishDesc = answer.finish_desc;

            // Fitment - Mat
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
                matCost = "0";
            };

            // Fitment - Float
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
                floatCost = "0";
            };

            // Fitment - Spacer
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

            // Fitment - Dry Mount
            if (answer.dry_mount === "regular foam") {
                dryMount = answer.dry_mount;
                dryMountCost = 5.5;
            } else if (answer.dry_mount === "acid free foam") {
                dryMount = answer.dry_mount;
                dryMountCost = 8;
            } else if (answer.dry_mount === "rag") {
                dryMount = answer.dry_mount;
                dryMountCost = 9;
            } else {
                dryMount = "n/a";
                dryMountCost = 0;
            };

            // Glaze Cost
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

            // Strainer Cost
            if (answer.strainer_type === "Strainer") {
                strainer = answer.strainer_type;
                strainerCost = 7;
            } else if (answer.strainer_type === "Painted Strainer") {
                strainer = answer.strainer_type;
                strainerCost = 11;
            } else {
                strainer = "n/a";
                strainerCost = 0;
            };

            // Extra Cost "none", "raise mount", "de-fit/re-fit", ""
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
            }

            // Material Cost

            /*
            SELECT id, cost_per_foot FROM frame WHERE material = ? AND finish = ? AND detail = ?",
                [material, finish, finishDesc],
 
            */
            connection.query("SELECT * FROM frame WHERE face_width = ? AND frame_depth = ? AND material = ? AND finish = ? AND detail = ?",
                [faceWidth, frameDepth, material, finish, finishDesc
                ]
                , function (err, results) {
                    if (err) throw err;
                    //console.log("\n");
                    //console.table(results);

                    materialFinishCost = results[0].cost_per_foot;
                    //console.dir(results);

                    // Calculation Testing:
                    subtotal = ((materialFinishCost + matCost + floatCost + spacerCost + dryMountCost + glazeCost + strainerCost + extraCost) * unitedInch) + extraAmt;

                    orderCost = (subtotal * overSize15_20 * oversize20_25 * oversize25) * (1 - discount);

                    //materialFinishCost = 25;

                    console.log(
                        "\n\n==========================================================" +
                        "\n\nFrame Size (feet): " + frameSize + "'\n\n" +
                        "Face Width (inches): " + faceWidth + "\n\n" +
                        "Frame Depth (inches): " + frameDepth + "\n\n" +
                        "United Inch Number: " + unitedInch + "\n\n" +
                        "Frame Build: " + "Material: " + material + ", Finish: " + finish + ", Finish Option: " + finishDesc + "\n\n" +
                        "Material Cost: " + material + " at $" + materialFinishCost + " per foot " + "\n\n" +
                        "Mat Cost: " + mat + " at $" + matCost + " per foot" + "\n\n" +
                        "Float Cost: " + float + " at $" + floatCost + " per foot" + "\n\n" +
                        "Spacer Cost: " + spacer + " at $" + spacerCost + " per foot" + "\n\n" +
                        "Dry Mount Cost: " + dryMount + " at $" + dryMountCost + " per foot" + "\n\n" +
                        "Glazing Cost: " + glaze + " at $" + glazeCost + " per foot" + "\n\n" +
                        "Strainer Cost: " + strainer + " at $" + strainerCost + " per foot" + "\n\n" +
                        "Extras Cost: " + extra + " at $" + extraCost + "\n\n" +
                        "Other Extras Per Frame: $" + extraAmt + "\n\n" +
                        "-------------------------------" + "\n\n" +
                        "Frame Subtotal: " + "$" + subtotal + "\n\n" +
                        "Frame Discount: " + (discount * 100) + "%" + "\n\n" +
                        "==========================================================" + "\n\n" +
                        "Total Order Cost: " + "$" + orderCost + "\n\n"
                    )

                    managerInit();




                });





        });
};







