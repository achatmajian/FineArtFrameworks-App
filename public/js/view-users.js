$(document).ready(function() {
    console.log("page is ready!");

    $.ajax({
        url: "/api/users",
        method: "GET"
    }).done(function(response) {
        $(".user-body").empty();

        for (i = 0; i < response.length; i ++) {
            var tableRow = $("<tr class='user-row'>");
            var userId = $("<td class='user-id'>");
            var userFirstName = $("<td class='user-first-name'>");
            var userLastName = $("<td class='user-last-name'>");
            var userEmail = $("<td class='user-email'>");
            var userPassword = $("<td class='user-password'>");
            var userEdit = $("<td class='user-edit'>");
            var edit = $("<a>edit</a>");

            userId.attr("data-user-id", response[i].id);
            userId.text(response[i].id);

            userFirstName.attr("data-user-id", response[i].id);
            userFirstName.text(response[i].first_name);

            userLastName.attr("data-user-id", response[i].id);
            userLastName.text(response[i].last_name);

            userEmail.attr("data-user-id", response[i].id);
            userEmail.text(response[i].email);

            userPassword.attr("data-user-id", response[i].id);
            userPassword.text("********");

            edit.attr("href", "/view/users/" + response[i].id);
            userEdit.append(edit);

            tableRow.append(userId);
            tableRow.append(userFirstName);
            tableRow.append(userLastName);
            tableRow.append(userEmail);
            tableRow.append(userPassword);
            tableRow.append(userEdit);

            $(".user-body").append(tableRow);

        };

    });

});