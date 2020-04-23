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
            choices: ["View Frame Options", "View Users", "View Clients", "Create Order", "Exit"]
        })
        .then(function (answer) {
            if (answer.managerInit === "View Frame Options") {
                frameList();
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

/*
-------------------------------------------------------------------------------------------
*/

// CALCULATOR FUN STUFF

var paperHeight, paperWidth, paperSize, imageHeight, imageWidth, imageSize, matSize, windowHeight, windowWidth, windowSize, frameHeight, frameWidth, frameSize, faceWidth, frameDepth, subtotal;
var unitedInch, material, finish, finishDesc, materialFinishCost, glaze, glazeCost, fitment, mat, matCost, float, floatCost, flush, flushCost, spacer, spacerCost, dryMount, dryMountCost, strainer, strainerCost, extra, extraCost, orderCost;
var overSize15_20, overSize20_25, overSize25, rush0, rush1, rush2, discount, discountAmt, extraAmt;

paperSize = paperHeight * paperWidth;
imageSize = imageHeight * imageWidth;
windowHeight = imageHeight + matSize;
windowWidth = imageWidth + matSize;
windowSize = windowHeight * windowWidth;
frameHeight = windowHeight + faceWidth;
frameWidth = windowWidth + faceWidth;
frameSize = imageHeight + imageWidth + (2 * faceWidth);
unitedInch = Math.ceil(frameSize / 6);

orderCost = (unitedInch * (materialFinishCost + glazeCost + matCost + floatCost + flushCost + spacerCost + dryMountCost + strainerCost + extraCost));
overSize15_20 = orderCost * 1.20;
oversize20_25 = orderCost * 1.30;
oversize25 = orderCost * 1.40;
discount = orderCost - (orderCost * discountAmt);

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
                choices: ['1/2"', '3/4"', '1"', '1 1/2"', '2"', '2 1/2"', '3"', '3 1/2"', '4"']
            },
            {
                name: "frame_depth",
                type: "list",
                message: "\nSelect a frame depth: \n",
                choices: ['1/2"', '3/4"', '1"', '1 1/2"', '2"', '2 1/2"', '3"']
            },
            {
                name: "material",
                type: "list",
                message: "\nSelect a frame material: \n",
                choices: ["Walnut", "Cherry", "Maple", "Ash", "Oak", "Aluminum Weld", "Aluminum Cut/Join"]
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
                message: "Select the type of spacers: \n",
                choices: ["rag", "wood", "silk", "none"]
            },
            {
                name: "dry_mount",
                type: "list",
                message: "Select the type of dry mount: \n",
                choices: ["regular foam", "acid free foam", "rag", "none"]
            },
            {
                name: "glazing",
                type: "list",
                message: "Select the type of glazing: \n",
                choices: ["Glass", "Regular Plexi", "OP-3 plexi", "True Vue Ultra Vue", "True Vue Museum Glass/Art Glass", "Optimum Museum Plexi up to 40 x 60", "Optimum Museum Plexi up to 48 x 96", "Optimum Museum Plexi up to 72 x 96", "Optimum Museum Plexi up to 72 x 120", "None"]
            },
            {
                name: "extras",
                type: "list",
                message: "Any extras? \n",
                choices: ["none", "stretch canvas", "raise mount", "de-fit/re-fit", "re-finish + de-fit/re-fit"]
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
            if (answer.face_width === '1/2"') {
                faceWidth = 0.5;
            } else if (answer.face_width === '3/4"') {
                faceWidth = 0.75;
            } else if (answer.face_width === '1"') {
                faceWidth = 1;
            } else if (answer.face_width === '1 1/2"') {
                faceWidth = 1.50;
            } else if (answer.face_width === '2"') {
                faceWidth = 2;
            } else if (answer.face_width === '2 1/2"') {
                faceWidth = 2.5;
            } else if (answer.face_width === '3"') {
                faceWidth = 3;
            } else if (answer.face_width === '3 1/2"') {
                faceWidth = 3.5;
            } else if (answer.face_width === '4"') {
                faceWidth = 4;
            };

            // Frame Depth
            if (answer.frame_depth === '1/2"') {
                frameDepth = 0.5;
            } else if (answer.frame_depth === '3/4"') {
                frameDepth = 0.75;
            } else if (answer.frame_depth === '1"') {
                frameDepth = 1;
            } else if (answer.frame_depth === '1 1/2"') {
                frameDepth = 1.50;
            } else if (answer.frame_depth === '2"') {
                frameDepth = 2;
            } else if (answer.frame_depth === '2 1/2"') {
                frameDepth = 2.5;
            } else if (answer.frame_depth === '3"') {
                frameDepth = 3;
            };

            // Frame Sizing Calculations
            function roundHalf(num) {
                return (Math.round(num * 2) / 2).toFixed(1);
            };

            frameSize = roundHalf((parseInt(imageHeight) + parseInt(imageWidth) + (2 * parseInt(faceWidth))) / 12);

            unitedInch = Math.ceil(parseInt(frameSize * 12) / 6);

            // Frame Material 
            material = answer.material;
            finish = answer.finish;
            finishDesc = answer.finish_desc;

            // Material Cost
            connection.query("SELECT id, cost_per_foot FROM frame WHERE ?",
                [{
                    material: material
                },
                {
                    finish: finish
                }, {
                    detail: finishDesc
                }], function (err, results) {
                    if (err) throw err;
                    console.log("\n");
                    console.table(results);

                    materialCost = results.cost_per_foot;
                    console.log("material cost is " + materialCost);
                });

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

            // Calculation Testing:
            subtotal = ((materialCost + matCost + floatCost + spacerCost + dryMountCost + glazeCost + strainerCost + extraCost) * unitedInch) + extraAmt;


            console.log(
                "\n\nframe size is: " + frameSize + "'\n\n" +
                "face width is: " + faceWidth + "\n\n" +
                "united inch is: " + unitedInch + "\n\n" +
                "frame material is: " + finishDesc + " " + finish + " " + material + "\n\n" +
                "material cost: " + material + "- " + materialCost + "\n\n" +
                "mat cost: " + mat + "- " + matCost + "\n\n" +
                "float cost: " + float + "- " + floatCost + "\n\n" +
                "spacer cost: " + spacer + "- " + spacerCost + "\n\n" +
                "dry mount cost: " + dryMount + "- " + dryMountCost + "\n\n" +
                "glaze cost: " + glaze + "- " + glazeCost + "\n\n" +
                "strainer cost: " + strainer + "- " + strainerCost + "\n\n" +
                "extra cost: " + extra + "- " + extraCost + "\n\n" + 
                "any other extras per frame:" + extraAmt + "\n\n" + 
                "subtotal: " + subtotal

                
            );

            managerInit();








        })
}







