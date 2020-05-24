$(document).ready(function () {
    console.log("page is ready :)");

    var full_url = document.URL;
    var url_array = full_url.split("/");
    var temp_id = url_array[url_array.length - 1];

    

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