// Append new "Build Frame" form box below the previous one

// $(document).ready(function(){
//     $("#add-frame-button").click(function(){
//         // $("#bottom").append("#build-frame"); 
//         $("#build-frame").clone().insertAfter("div.frame-form:last");
//     });
// });

// Mat checkbox activation
$(document).ready(function() {
  $("#mat-checkbox").click(function(){
    if ($(this).is(':checked')) 
    {
      $(".mat-answer").prop("disabled", false);
      $(".mat-colors").prop("disabled", false);
      $("#float-checkbox").prop("disabled", true);
      $(".float-answer").prop("disabled", true);
      $("#flush-checkbox").prop("disabled", true);
      $("#spacers-checkbox").prop("disabled", true);
      $(".spacer-answers").prop("disabled", true);

    } else {
          $(".mat-answer").prop("disabled", true);
          $(".mat-colors").prop("disabled", true);
          $("#float-checkbox").prop("disabled", false);
          $(".float-answer").prop("disabled", false);
          $("#flush-checkbox").prop("disabled", false);
          $("#spacers-checkbox").prop("disabled", false);
          $(".spacer-answers").prop("disabled", false);
    }
  });
});

// Float checkbox activation
$(document).ready(function() {
  $("#float-checkbox").click(function(){
    if ($(this).is(':checked')) 
    {
      $(".float-answer").prop("disabled", false);
      $("#mat-checkbox").prop("disabled", true);
      $(".mat-answer").prop("disabled", true);
      $(".mat-colors").prop("disabled", true);
      $("#flush-checkbox").prop("disabled", true);
      $("#drymount-checkbox").prop("disabled", true);
      $(".drymount-answers").prop("disabled", true);

    } else {
          $(".float-answer").prop("disabled", true);
          $("#mat-checkbox").prop("disabled", false);
          $(".mat-answer").prop("disabled", false);
          $(".mat-colors").prop("disabled", false);
          $("#flush-checkbox").prop("disabled", false);
          $("#drymount-checkbox").prop("disabled", false);
          $(".drymount-answers").prop("disabled", false);
    }
  });
});

// Flush checkbox activation
$(document).ready(function() {
  $("#flush-checkbox").click(function(){
    if ($(this).is(':checked')) 
    {
      $("#float-checkbox").prop("disabled", true);
      $(".float-answer").prop("disabled", true);
      $("#mat-checkbox").prop("disabled", true);
      $(".mat-answer").prop("disabled", true);
      $(".mat-colors").prop("disabled", true);

    } else {
        $("#float-checkbox").prop("disabled", false);
        $(".float-answer").prop("disabled", false);
        $("#mat-checkbox").prop("disabled", false);
        $(".mat-answer").prop("disabled", false);
        $(".mat-colors").prop("disabled", false);

    }
  });
});