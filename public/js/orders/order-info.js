$(document).ready(function () {
  console.log("page is ready :)");

  // To get the temp order ID from URL
  var full_url = document.URL;
  var url_array = full_url.split("/");
  var temp_id = url_array[url_array.length - 1];

  // On Click event to go back to the create new client page if the #new-client-button is selected
  $("#back-button").click(function () {
    window.history.back();
  });

  // On Click event to PUT / update temporary order and then go to the next page
  $("#submit-order-details-button").click(function () {

    var frame_quantity = $("#frame-quantity").val();
    var date_due = $("#date-due").val();
    var rush_status = $("input[name='rush-answer']:checked").val();
    var storage_location = $("#storage-location").val().trim();

    // reformatting the date using momentJS
    date_due = moment(date_due).format('l');

    // converting rush_status type from string to integer
    // rush_status = parseInt(rush_status);

    // converting temp_id from string to integer
    temp_id = parseInt(temp_id);

    console.log(frame_quantity);
    console.log(date_due);
    console.log(rush_status);
    console.log(storage_location);

    $.ajax({
      url: "/api/temp/orders/",
      type: "PUT",
      data: {
        id: temp_id,
        order_quantity: frame_quantity,
        rush_status: rush_status,
        storage_location: storage_location
      },
      dataType: "json",
      beforeSend: function (x) {
        if (x && x.overrideMimeType) {
          x.overrideMimeType("application/j-son;charset=UTF-8");
        }
      }
    }).done(function (response) {
      console.log(response);
      window.location.href = "/order/build/" + temp_id
    })

  });
});