$(document).ready(function() {
    console.log("page is ready!");

    $.ajax({
        url: "/api/spacers",
        method: "GET"
    }).done(function(response) {
        $(".spacers-body").empty();
        for (i = 0; i < response.length; i ++) {
            var tableRow = $("<tr class='spacer-row'>");
            var spacerMaterial = $("<td class='spacer-material'>");
            var costPerFoot = $("<td class='cost-per-foot'>");
            var edit = $("<a>Edit</a>");

            spacerMaterial.attr("data-spacer-id", response[i].id);
            spacerMaterial.text(response[i].material);

            costPerFoot.attr("data-spacer-id", response[i].id);
            costPerFoot.text(response[i].cost);

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