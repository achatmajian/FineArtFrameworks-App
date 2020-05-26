$(document).ready(function () {
    console.log("page is ready :)");

    var full_url = document.URL;
    var url_array = full_url.split("/");
    var temp_id = url_array[url_array.length - 1];
    var frameQuantity;

    $.ajax({
        url: "/api/temp/orders/" + temp_id,
        method: "GET"
    }).done(function (response) {
        frameQuantity = response.order_quantity

        console.log(frameQuantity);

        for (i = 0; i < frameQuantity; i++) {
            $("#carousel-ol").empty();
            

            var carouselLi = $("<li data-target='carouselIndicators' data-slide-to='" + i +"'>");

            $("#carousel-ol").append(carouselLi);

            $(".carousel-inner").empty();

            var carouselItem = $("<div>");
            var itemHeader = $("<h1>");

            itemHeader.text(i);

            carouselItem.append(itemHeader);
            $(".carousel-inner").append(carouselItem);
        }




        // $("#formIdGoesHere").submit(function () {

        //     console.log(temp_id);

        //     $.ajax({
        //         url: "/api/temp/orders/" + temp_id,
        //         method: "PUT",
        //         async: false,
        //         data: {

        //         },
        //         dataType: "json",
        //         beforeSend: function (x) {
        //             if (x && x.overrideMimeType) {
        //                 x.overrideMimeType("application/j-son;charset=UTF-8");
        //             }
        //         }
        //     }).done(function (response) {
        //         console.log(response)
        //     });
        // });
    });
});