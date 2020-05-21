$(document).ready(function () {

    $.ajax({
        url: "/api/orders",
        method: "GET"
    }).done(function (response) {
        $(".order-body").empty();

        var firstName;
        var lastName;
        var dateCreated;
        var dateDue;

        for (i = 0; i < response.length; i++) {
            var tableRow = $("<tr class='order-row'>");
            var orderFirstName = $("<td class='order-first-name'>");
            var orderLastName = $("<td class='order-last-name'>");
            var orderFrameQuantity = $("<td class='order-frame-quantity'>");
            var orderDateReceived = $("<td class='order-date-received'>");
            var orderDateDue = $("<td class='order-date-due'>");
            var orderDetails = $("<td class='order-details'>");
            var details = $("<a>Details</a>");

            orderFirstName.attr("data-order-id", response[i].id);
            orderFirstName.attr("first-client-id-" + response[i].client_id);

            orderLastName.attr("data-order-id", response[i].id);
            orderLastName.attr("id", "last-client-id" + response[i].client_id);

            orderFrameQuantity.attr("data-order-id", response[i].id);
            if (response[i].order_quantity != null) {
                orderFrameQuantity.text(response[i].order_quantity);
            } else {
                orderFrameQuantity.text("0");
            };

            dateCreated = moment(response[i].createdAt).format('l');

            orderDateReceived.attr("data-order-id", response[i].id);
            orderDateReceived.text(dateCreated);

            if (response[i].date_due != null) {
               dateDue = moment(response[i].date_due).format('l');
            } else {
                dateDue = "n/a"
            };

            orderDateDue.attr("data-order-id", response[i].id);
            orderDateDue.text(dateDue);

            details.attr("href", "/view/orders/" + response[i].id);
            orderDetails.append(details);

            function getName(response) {
                $.ajax({
                    url: "/api/clients/" + response.client_id,
                    method: "GET",
                    async: false
                }).done(function (res) {
                    firstName = res.first_name;
                    lastName = res.last_name;
                });

                orderFirstName.text(firstName);
                orderLastName.text(lastName);
            };

            getName(response[i]);

            tableRow.append(orderFirstName);
            tableRow.append(orderLastName);
            tableRow.append(orderFrameQuantity);
            tableRow.append(orderDateReceived);
            tableRow.append(orderDateDue);
            tableRow.append(orderDetails);

            $(".order-body").append(tableRow);
        };
    });

    // On Keyup event to filter results from existing clients db table using search bar 
    $("#view-orders-search").keyup(function () {
        var value = $(this).val().toLowerCase();
        $("#order-body tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});