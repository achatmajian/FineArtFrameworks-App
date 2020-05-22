$(document).ready(function () {
    console.log("page is ready!");

    $.ajax({
        url: "/api/materials",
        method: "GET"
    }).done(function (response) {
        $(".lumber-body").empty();

        for (i = 0; i < response.length; i++) {
            var tableRow = $("<tr class='lumber-row'>");
            var lumberMaterial = $("<td class='lumber-material'>");
            var lumberFinish = $("<td class='lumber-finish'>");
            var lumberFinishDetail = $("<td class='lumber-finish-detail'>");
            var lumberFaceWidth = $("<td class='lumber-face-width'>");
            var lumberFrameDepth = $("<td class='lumber-frame-depth'>");
            var faceWidthSize;
            var frameDepthSize;
            var costPerFoot = $("<td class='cost-per-foot'>");
            var lumberEdit = $("<td class='lumber-edit'>");
            var edit = $("<a>Edit</a>");

    
            if (response[i].face_width === "0.375") {
                faceWidthSize = '3/8"';
            } else if (response[i].face_width === "0.50") {
                faceWidthSize = '1/2"';
            } else if (response[i].face_width === "0.625") {
                faceWidthSize = '5/8"';
            } else if (response[i].face_width === "0.75") {
                faceWidthSize = '3/4"';
            }  else if (response[i].face_width === "1") {
                faceWidthSize = '1"';
            } else if (response[i].face_width === "1.25") {
                faceWidthSize = " 1 1/4";
            };

            if (response[i].frame_depth === "1.50") {
                frameDepthSize = '1 1/2"';
            } else if (response[i].frame_depth === "2") {
                frameDepthSize = '2"';
            } else if (response[i].frame_depth === "2.25") {
                frameDepthSizesize = '2 1/4"';
            } else {
                frameDepthSize = response[i].frame_depth;
            };
    

            lumberMaterial.attr("data-order-id", response[i].id);
            lumberMaterial.text(response[i].material.charAt(0).toUpperCase() + response[i].material.slice(1));

            lumberFinish.attr("data-order-id", response[i].id);
            lumberFinish.text(response[i].finish.charAt(0).toUpperCase() + response[i].finish.slice(1));

            lumberFinishDetail.attr("data-order-id", response[i].id);
            lumberFinishDetail.text(response[i].detail.charAt(0).toUpperCase() + response[i].detail.slice(1));

            lumberFaceWidth.attr("data-order-id", response[i].id);
            lumberFaceWidth.text(faceWidthSize);

            lumberFrameDepth.attr("data-order-id", response[i].id);
            lumberFrameDepth.text(frameDepthSize);

            costPerFoot.attr("data-order-id", response[i].id);
            costPerFoot.text("$" + response[i].cost.toFixed(2));

            edit.attr("href", "/view/orders/" + response[i].id);
            lumberEdit.append(edit);

            tableRow.append(lumberMaterial);
            tableRow.append(lumberFinish);
            tableRow.append(lumberFinishDetail);
            tableRow.append(lumberFaceWidth);
            tableRow.append(lumberFrameDepth);
            tableRow.append(costPerFoot);
            tableRow.append(lumberEdit);

            $(".lumber-body").append(tableRow);

        };

            // On Keyup event to filter results from existing clients db table using search bar 
            $("#view-lumber-search").keyup(function() {
                var value = $(this).val().toLowerCase();
                console.log(value)
                $("#lumber-body tr").filter(function() {
                    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
                });
                });

    });

});