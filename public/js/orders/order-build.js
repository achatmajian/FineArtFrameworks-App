$(document).ready(function () {
    console.log("page is ready :)");

    var full_url = document.URL;
    var url_array = full_url.split("/");
    var temp_id = url_array[url_array.length - 1];
    var frameQuantity;

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
    console.log('2 ', toDeci("5/8"));
    console.log('3 ', toDeci("3 3/16"));
    console.log('4 ', toDeci("12"));
    console.log('5 ', toDeci("12.2"));

    $.ajax({
        url: "/api/temp/orders/" + temp_id,
        method: "GET"
    }).done(function (response) {
        frameQuantity = response.order_quantity

        console.log(frameQuantity);

        for (i = 0; i < frameQuantity; i++) {
            $("#carousel-ol").empty();


            var carouselLi = $("<li data-target='carouselIndicators' data-slide-to='" + i + "'>");

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