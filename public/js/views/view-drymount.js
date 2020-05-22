$(document).ready(function () {

    $.ajax({
        url: "/api/drymounts",
        method: "GET"
    }).done(function (response) {
        $(".drymount-body").empty();

        for (i = 1; i < response.length; i++) {
            var tableRow = $("<tr class='drymount-row'>");
            var drymount = $("<td class='drymount-material'>");
            var cost = $("<td class='cost'>");
            var costType = $("<td class='cost-type'>")
            var drymountEdit = $("<td class='drymount-edit'>");
            var edit = $("<a>Edit</a>");
            var cost_type = response[i].cost_type;
            var cost_type_text = "";

            if (cost_type === "per foot") {
                cost_type_text = "per foot";
            } else {
                cost_type_text = "per frame with a max size of " + response[i].cost_type;
            }

            drymount.attr("data-drymount-id", response[i].id);
            drymount.text(response[i].name.charAt(0).toUpperCase() + response[i].name.slice(1));

            cost.attr("data-drymount-id", response[i].id);
            cost.text("$" + response[i].cost.toFixed(2));

            costType.attr("data-drymount-id", response[i.id]);
            costType.text(cost_type_text);

            edit.attr("href", "/view/drymount/" + response[i].id);
            drymountEdit.append(edit);

            tableRow.append(drymount);
            tableRow.append(cost);
            tableRow.append(costType);
            tableRow.append(drymountEdit);

            $(".drymount-body").append(tableRow);

        };

        // On Keyup event to filter results from existing drymounts db table using search bar 
        $("#view-drymount-search").keyup(function () {
            var value = $(this).val().toLowerCase();
            console.log(value)
            $("#drymount-body tr").filter(function () {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
        });

    });

});