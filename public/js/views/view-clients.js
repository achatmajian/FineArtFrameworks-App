$(document).ready(function() {
    console.log("page is ready!");

    $.ajax({
        url: "/api/clients",
        method: "GET"
    }).done(function(response) {
        $(".client-body").empty();
        for (i = 0; i < response.length; i ++) {
            var tableRow = $("<tr class='client-row'>");
            var clientFirstName = $("<td class='client-first-name'>");
            var clientLastName = $("<td class='client-last-name'>");
            var clientEmail = $("<td class='client-email'>");
            var clientPhone = $("<td class='client-phone'>");
            var clientAddressOne = $("<td class='client-address-one'>");
            var clientAddressTwo = $("<td class='client-address-two'>");
            var clientCity = $("<td class='client-city'>");
            var clientState = $("<td class='client-state'>");
            var clientZip = $("<td class='client-zip'>");
            var clientEdit = $("<td class='client-edit'>");
            var edit = $("<a>Edit</a>");

            clientFirstName.attr("data-client-id", response[i].id);
            clientFirstName.text(response[i].first_name);

            clientLastName.attr("data-client-id", response[i].id);
            clientLastName.text(response[i].last_name);

            clientEmail.attr("data-client-id", response[i].id);
            clientEmail.text(response[i].email);

            clientPhone.attr("data-client-id", response[i].id);
            clientPhone.text(response[i].phone);

            clientAddressOne.attr("data-client-id", response[i].id);
            clientAddressOne.text(response[i].address_one);

            clientAddressTwo.attr("data-client-id", response[i].id);
            clientAddressTwo.text(response[i].address_two);

            clientCity.attr("data-client-id", response[i].id);
            clientCity.text(response[i].city);

            clientState.attr("data-client-id", response[i].id);
            clientState.text(response[i].state);

            clientZip.attr("data-client-id", response[i].id);
            clientZip.text(response[i].zip_code);

            edit.attr("href", "/view/clients/" + response[i].id);
            clientEdit.append(edit);

            tableRow.append(clientFirstName);
            tableRow.append(clientLastName);
            tableRow.append(clientEmail);
            tableRow.append(clientPhone);
            tableRow.append(clientAddressOne);
            tableRow.append(clientAddressTwo);
            tableRow.append(clientCity);
            tableRow.append(clientState);
            tableRow.append(clientZip);
            tableRow.append(clientEdit);

            $(".client-body").append(tableRow);

        };

            // On Keyup event to filter results from existing clients db table using search bar 
            $("#view-clients-search").keyup(function() {
                var value = $(this).val().toLowerCase();
                console.log(value)
                $("#client-body tr").filter(function() {
                    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
                });
                });

    });

});