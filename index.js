// Append new "Build Frame" form box below the previous one

// $(document).ready(function(){
//     $("#add-frame-button").click(function(){
//         // $("#bottom").append("#build-frame"); 
//         $("#build-frame").clone().insertAfter("div.frame-form:last");
//     });
// });

// Mat checkbox to activate radio options

$(document).ready(function() {
  $("#mat-checkbox").click(function(){
    if ($(this).is(':checked')) 
    {
      $(".mat-answer").prop("disabled", false);

    } else {
          $(".mat-answer").prop("disabled", true);
    }
  });
});