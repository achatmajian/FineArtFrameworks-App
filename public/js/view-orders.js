$(document).ready(function() {
    console.log("page is ready!");

    $.ajax({
        url: "/api/orders",
        method: "GET"
    }).done(function(response) {
        $(".order-body").empty();

        for (i = 0; i < response.length; i ++) {
            var tableRow = $("<tr class='order-row'>");
            var orderId = $("<td class='order-id'>");
            var orderFirstName = $("<td class='order-first-name'>");
            var orderLastName = $("<td class='order-last-name'>");
            var orderFrameQuantity = $("<td class='order-frame-quantity'>");
            var orderDateReceived = $("<td class='order-date-received'>");
            var orderDateDue = $("<td class='order-date-due'>");
            var orderDetails = $("<td class='order-details'>");
            var details = $("<a>order details</a>");

            orderId.attr("data-order-id", response[i].id);
            orderId.text(response[i].id);

            orderFirstName.attr("data-order-id", response[i].id);
            orderFirstName.text("customer first name goes here");

            orderLastName.attr("data-order-id", response[i].id);
            orderLastName.text("customer second name goes here");

            orderFrameQuantity.attr("data-order-id", response[i].id);
            orderEmail.text(response[i].frame_id.length);

            orderDateReceived.attr("data-order-id", response[i].id);
            orderDateReceived.text(response[i].created_at);

            orderDateDue.attr("data-order-id", response[i].id);
            orderDateDue.text(response[i].date_due);

            details.attr("href", "/view/orders/" + response[i].id);
            orderDetails.append(details);

            tableRow.append(orderId);
            tableRow.append(orderFirstName);
            tableRow.append(orderLastName);
            tableRow.append(orderQuantity);
            tableRow.append(orderDateReceived);
            tableRow.append(orderDateDue);
            tableRow.append(orderDetails);

            $(".order-body").append(tableRow);

        };

    });

});