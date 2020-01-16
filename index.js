// Append new "Build Frame" form box below the previous one

$(document).ready(function(){
    $("#add-frame-button").click(function(){
        // $("#bottom").append("#build-frame"); 
        $("#build-frame").clone().insertAfter("div.frame-form:last");
    });
});

// Show radio options after checkbox is checked for "Wood"

