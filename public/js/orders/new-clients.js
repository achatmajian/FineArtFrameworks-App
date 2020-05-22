$(document).ready(function () {

    // var user_id; // Need to assign user_id value once sessions/log-in authentication is up and running
    var client_id; // Will assign value in the client POST response

    // On Click event to go back to the create new client page if the #new-client-button is selected
    $("#existing-client-button").click(function () {
        window.location.href = "/order/client/existing"
    });

    $("#new-client-button").click(function () {

        var email = $("#client-email").val().trim();
        var phone = $("#client-phone").val().trim();
        var first_name = $("#client-first-name").val().trim();
        var last_name = $("#client-last-name").val().trim();
        var address_one = $("#client-address-one").val().trim();
        var address_two = $("#client-address-two").val().trim();
        var city = $("#client-city").val().trim();;
        var state = $("#client-state").find(":selected").text();
        var zip_code = $("#client-zip-code").val().trim();;
        var client_type = $("input[name='client-type-answer']:checked").val();

        $.ajax({
            url: "/api/clients",
            type: "POST",
            data: {
                email: email,
                phone: phone,
                first_name: first_name,
                last_name: last_name,
                address_one: address_one,
                address_two: address_two,
                city: city,
                state: state,
                zip_code: zip_code,
                client_type: client_type
            },
            dataType: "json",
            beforeSend: function (x) {
                if (x && x.overrideMimeType) {
                    x.overrideMimeType("application/j-son;charset=UTF-8");
                }
            }
        }).done(function (response) {
            console.log(response);
            client_id = response.id;

            $.ajax({
                url: "/api/temp/orders",
                type: "POST",
                async: false,
                data: {
                    client_id: client_id
                },
                dataType: "json",
                beforeSend: function (x) {
                    if (x && x.overrideMimeType) {
                        x.overrideMimeType("application/j-son;charset=UTF-8");
                    }
                },
                success: function (res) {
                    console.log(res);
                    window.location.href = "/order/details/" + res.id;
                }
            });
        });
        return client_id;
    });
});

