$(document).ready(function() {
    console.log("page is ready!");

    $.ajax({
        url: "/api/spacers",
        method: "GET"
    }).done(function(response) {
        $(".spacers-body").empty();
        console.log(response);
        for (i = 1; i < response.length; i ++) {
            var tableRow = $("<tr class='spacer-row'>");
            var spacerMaterial = $("<td class='spacer-material'>");
            var costPerFoot = $("<td class='cost-per-foot'>");
            var spacerEdit = $("<td class='spacers-edit'>");
            var edit = $("<a>Edit</a>");

            spacerMaterial.attr("data-spacer-id", response[i].id);
            spacerMaterial.text(response[i].name.charAt(0).toUpperCase() + response[i].name.slice(1));

            costPerFoot.attr("data-spacer-id", response[i].id);
            costPerFoot.text("$" + response[i].cost.toFixed(2));

            edit.attr("href", "/view/spacers/" + response[i].id);
            spacerEdit.append(edit);

            tableRow.append(spacerMaterial);
            tableRow.append(costPerFoot);
            tableRow.append(spacerEdit);

            $(".spacer-body").append(tableRow);

        };

            // On Keyup event to filter results from existing clients db table using search bar 
            $("#view-spacers-search").keyup(function() {
                var value = $(this).val().toLowerCase();
                console.log(value)
                $("#spacer-body tr").filter(function() {
                    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
                });
                });

    });

});