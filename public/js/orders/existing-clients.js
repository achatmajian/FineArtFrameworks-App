$(document).ready(function () {

    var clientId = "";

    // AJAX call to get all clients and display in table on html page
    $.ajax({
        url: "/api/clients",
        method: "GET"
    }).done(function (response) {
        $(".client-body").empty();

        for (i = 0; i < response.length; i++) {
            var tableRow = $("<tr class='client-row'>");
            var selectClient = $("<input class='select-client' type='radio' required>");
            var clientFirstName = $("<td class='client-first-name'>");
            var clientLastName = $("<td class='client-last-name'>");
            var clientEmail = $("<td class='client-email'>");
            var clientPhone = $("<td class='client-phone'>");

            selectClient.attr("data-client-id", response[i].id);
            selectClient.attr("name", "client-id")
            selectClient.attr("value", response[i].id);

            clientFirstName.attr("data-client-id", response[i].id);
            clientFirstName.text(response[i].first_name);

            clientLastName.attr("data-client-id", response[i].id);
            clientLastName.text(response[i].last_name);

            clientEmail.attr("data-client-id", response[i].id);
            clientEmail.text(response[i].email);

            clientPhone.attr("data-client-id", response[i].id);
            clientPhone.text(response[i].phone);

            tableRow.append(selectClient);
            tableRow.append(clientFirstName);
            tableRow.append(clientLastName);
            tableRow.append(clientEmail);
            tableRow.append(clientPhone);

            $(".client-body").append(tableRow);
        };


        // On Keyup event to filter results from existing clients db table using search bar 
        $("#existing-client-search").keyup(function () {
            var value = $(this).val().toLowerCase();
            $("#client-body tr").filter(function () {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
        });

        // On Click event to go back to the create new client page if the #new-client-button is selected
        $("#existing-client-form").submit(function () {
            window.history.back();
        });

        // On Click event to assign cliendId variable to selected client
        $(".select-client").click(function () {
            var radioValue = $("input[name='client-id']:checked").val();
            if (radioValue) {
                clientId = radioValue;
            };

            // On Click event to PUT new order in the DB and save the client_id as the selected clientId before going to the next page
            $("#existing-client-button").click(function (event) {
                event.preventDefault();

                $.ajax({
                    url: "/api/temp/orders",
                    type: "POST",
                    data: {
                        client_id: clientId
                    },
                    dataType: "json",
                    beforeSend: function (x) {
                        if (x && x.overrideMimeType) {
                            x.overrideMimeType("application/j-son;charset=UTF-8");
                        }
                    },
                    success: function (res) {
                        console.log(res);
                        window.location.href = "/order/details/" + + res.id
                    }
                });
            });
        });
    });
});