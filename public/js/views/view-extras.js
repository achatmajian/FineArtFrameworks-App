$(document).ready(function () {

    $.ajax({
        url: "/api/extras",
        method: "GET"
    }).done(function (response) {
        $(".extras-body").empty();

        for (i = 1; i < response.length; i++) {
            var tableRow = $("<tr class='extras-row'>");
            var extras = $("<td class='extras-option'>");
            var cost = $("<td class='cost'>");
            var extrasEdit = $("<td class='extras-edit'>");
            var edit = $("<a>Edit</a>");

            extras.attr("data-extras-id", response[i].id);
            extras.text(response[i].name.charAt(0).toUpperCase() + response[i].name.slice(1));

            cost.attr("data-extras-id", response[i].id);
            cost.text("$" + response[i].cost.toFixed(2));

            edit.attr("href", "/view/extras/" + response[i].id);
            extrasEdit.append(edit);

            tableRow.append(extras);
            tableRow.append(cost);
            tableRow.append(extrasEdit);

            $(".extras-body").append(tableRow);
        };

        // On Keyup event to filter results from existing extrass db table using search bar 
        $("#view-extras-search").keyup(function () {
            var value = $(this).val().toLowerCase();
            console.log(value)
            $("#extras-body tr").filter(function () {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
        });
    });
});