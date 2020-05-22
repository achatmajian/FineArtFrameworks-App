$(document).ready(function () {

    $.ajax({
        url: "/api/glazings",
        method: "GET"
    }).done(function (response) {
        $(".glazing-body").empty();

        for (i = 1; i < response.length; i++) {
            var tableRow = $("<tr class='glazing-row'>");
            var glazing = $("<td class='glazing-option'>");
            var glazingType = $("<td class='glazing-type'>")
            var cost = $("<td class='cost'>");
            var costType = $("<td class='cost-type'>")
            var glazingEdit = $("<td class='glazing-edit'>");
            var edit = $("<a>Edit</a>");
            var cost_type = response[i].cost_type;
            var cost_type_text = "";

            if (cost_type === "per foot") {
                cost_type_text = "per foot";
            } else {
                cost_type_text = "per frame with a max size of " + response[i].cost_type;
            }

            glazingType.attr("data-glazing-id", response[i].id);
            glazingType.text(response[i].glazing_type.charAt(0).toUpperCase() + response[i].glazing_type.slice(1));

            glazing.attr("data-glazing-id", response[i].id);
            glazing.text(response[i].name.charAt(0).toUpperCase() + response[i].name.slice(1));

            cost.attr("data-glazing-id", response[i].id);
            cost.text("$" + response[i].cost.toFixed(2));

            costType.attr("data-glazing-id", response[i.id]);
            costType.text(cost_type_text);

            edit.attr("href", "/view/glazing/" + response[i].id);
            glazingEdit.append(edit);

            tableRow.append(glazingType);
            tableRow.append(glazing);
            tableRow.append(cost);
            tableRow.append(costType);
            tableRow.append(glazingEdit);

            $(".glazing-body").append(tableRow);

        };

        // On Keyup event to filter results from existing glazings db table using search bar 
        $("#view-glazing-search").keyup(function () {
            var value = $(this).val().toLowerCase();
            console.log(value)
            $("#glazing-body tr").filter(function () {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
        });

    });

});