$(document).ready(function() {
    console.log("page is ready!");

    $.ajax({
        url: "/api/users",
        method: "GET"
    }).done(function(response) {
        $(".user-body").empty();

        for (i = 0; i < response.length; i ++) {
            var tableRow = $("<tr class='user-row'>");
            var userFirstName = $("<td class='user-first-name'>");
            var userLastName = $("<td class='user-last-name'>");
            var userEmail = $("<td class='user-email'>");
            var userRole = $("<td class='user-role'>");
            var userEdit = $("<td class='user-edit'>");
            var edit = $("<a>Edit</a>");

            userFirstName.attr("data-user-id", response[i].id);
            userFirstName.text(response[i].first_name);

            userLastName.attr("data-user-id", response[i].id);
            userLastName.text(response[i].last_name);

            userEmail.attr("data-user-id", response[i].id);
            userEmail.text(response[i].email);

            userRole.attr("data-user-id", response[i].id);
            userRole.text(response[i].role.charAt(0).toUpperCase() + response[i].role.slice(1));

            edit.attr("href", "/view/users/" + response[i].id);
            userEdit.append(edit);
            tableRow.append(userFirstName);
            tableRow.append(userLastName);
            tableRow.append(userEmail);
            tableRow.append(userRole);
            tableRow.append(userEdit);

            $(".user-body").append(tableRow);

        };

        // On Keyup event to filter results from existing clients db table using search bar 
        $("#view-users-search").keyup(function() {
            var value = $(this).val().toLowerCase();
            console.log(value)
            $("#user-body tr").filter(function() {
              $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
          });
        
    });

});