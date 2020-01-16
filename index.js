// Append new "Build Frame" form box below the previous one

$(document).ready(function(){
    $("#add-frame-button").click(function(){
        // $("#bottom").append("#build-frame"); 
        $("#build-frame").clone().insertAfter("div.frame-form:last");
    });
});

// Mat checkbox to activate radio options

function mat(res) { 
    if(document.getElementById("mat-checkbox").checked){
      document.getElementById("4ply").removeAttribute('disabled');
      document.getElementById("8ply").removeAttribute('disabled');
      document.getElementById("12ply").removeAttribute('disabled');
      document.getElementById("fabric").removeAttribute('disabled');
    }
    else{
      document.getElementById("4ply").disabled = true;
      document.getElementById("8ply").disabled = true;
      document.getElementById("12ply").disabled = true;
      document.getElementById("fabric").disabled = true;
    }
  }