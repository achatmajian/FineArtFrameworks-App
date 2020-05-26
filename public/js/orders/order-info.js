$(document).ready(function () {
  console.log("page is ready :)");

  // To get the temp order ID from URL
  var full_url = document.URL;
  var url_array = full_url.split("/");
  var temp_id = url_array[url_array.length - 1];

  // Display today's date in #date-today <span>
  var dateToday = moment().format("l");
  $("#date-today").text(dateToday);

  // Set calendar input's min = one week from today
  $("#date-due").attr('min', moment().add(7, "days").format("YYYY-MM-DD"));

  // Automatically update the radio selections for rush_status if date_due is within one or two weeks
  $("#date-due").change(function () {

    dateToday = moment().format("YYYY-MM-DD");

    var dateDue = $("#date-due").val();
    dateDue = moment(dateDue).format("YYYY-MM-DD");
    var oneWeek = moment(dateToday).add(7, "days").format("YYYY-MM-DD");
    var twoWeeks = moment(dateToday).add(14, "days").format("YYYY-MM-DD");

    if (moment(dateDue).isSameOrAfter(oneWeek) && moment(dateDue).isBefore(twoWeeks)) {
      console.log(dateToday);
      console.log(dateDue);
      console.log("order is rush one week");
      $("#rush-one").prop('checked', true);
    } else if (dateDue === twoWeeks) {
      console.log(dateToday);
      console.log(dateDue);
      console.log("order is rush two weeks");
      $("#rush-two").prop('checked', true);
    } else {
      console.log("not a rush order!");
      $("#rush-none").prop('checked', true);
    };
  });

  // Enabling discount input if discount is checked yes

  $(".discount").change(function () {
    var discountAnswer = $("input[name='discount-answer']:checked").val();
    console.log(discountAnswer);

    var enableDiscount = function (discountAnswer) {
      if (discountAnswer === "yes") {
        $("#discount-input").attr("disabled", false);
        $("#discount-input").attr("required", true);
      } else if (discountAnswer === "no") {
        $("#discount-input").attr("disabled", true);
        $("#discount-input").attr("required", false);
      }
    }

    enableDiscount(discountAnswer);


  });

  // On Click event to go back to the create new client page if the #new-client-button is selected
  $("#back-button").click(function () {
    window.history.back();
  });

  // On Click event to PUT / update temporary order and then go to the next page
  $("#order-info-form").submit(function (event) {
    event.preventDefault();

    var frame_quantity = $("#frame-quantity").val();
    var date_due = $("#date-due").val();
    var rush_status = $("input[name='rush-answer']:checked").val();
    var storage_location = $("#storage-location").val().trim();
    var sales_tax = $("input[name='tax-answer']:checked").val();
    var discount = $("input[name='discount-answer']:checked").val();
    var discountAmt = $("#discount-input").val();

    // reformatting the date using momentJS
    date_due = moment(date_due).format('l');

    // converting temp_id from string to integer
    temp_id = parseInt(temp_id);

    // check for if discount is no to keep discount percent set to 1%
    if (discount === "no") {
      discountAmt = 1
    }

    $.ajax({
      url: "/api/temp/orders/",
      type: "PUT",
      data: {
        id: temp_id,
        order_quantity: frame_quantity,
        rush_status: rush_status,
        storage_location: storage_location,
        tax_exempt: sales_tax,
        discount_percent: discountAmt,
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