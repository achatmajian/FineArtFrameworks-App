$(document).ready(function () {
  console.log("page is ready :)");

  var full_url = document.URL;
  var url_array = full_url.split("/");
  var temp_id = url_array[url_array.length - 1];

  // converting fraction strings to floats for math calculations :D
  function toDeci(fraction) {
    fraction = fraction.toString();
    var result, wholeNum = 0, frac, deci = 0;
    if (fraction.search('/') >= 0) {
      if (fraction.search(' ') >= 0) {
        wholeNum = fraction.split('-');
        frac = wholeNum[1];
        wholeNum = parseInt(wholeNum, 10);
      } else {
        frac = fraction;
      }
      if (fraction.search('/') >= 0) {
        frac = fraction.split('/');
        deci = parseInt(frac[0], 10) / parseInt(frac[1], 10);
      }
      result = wholeNum + deci;
    } else {
      result = fraction
    }
    return result;
  };

  /* Testing values / examples */
  console.log('1 ', toDeci("1 7/16"));
  console.log('2 ', toDeci("5 8"));
  console.log('3 ', toDeci("3 3/16"));
  console.log('4 ', toDeci("12"));
  console.log('5 ', toDeci("12.2"));

  $("#submit-order-details-button").click(function () {

    console.log(temp_id);

    // $.ajax({
    //     url: "/api/temp/orders/" + temp_id,
    //     type: "PUT",
    //     data: {

    //     },
    //     dataType: "json",
    //     beforeSend: function (x) {
    //         if (x && x.overrideMimeType) {
    //             x.overrideMimeType("application/j-son;charset=UTF-8");
    //         }
    //     }
    // }).done(function(response) {
    //     console.log(response)
    // })

  });
});