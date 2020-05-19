$(function () {

    $(".log-in-button").on("click", function (event) {
        event.preventDefault();
        console.log("You clicked a button!");

        $.ajax("/login", {
            type: "POST",
            dataType: "json",
            data: {
                username: $("#user-email").val().trim(),
                password: $("#user-password").val().trim(),
                url: "/rest/login/?format=json",
                success: function(data) {
                    window.location.href="/"
                }
            }
        }).then(
            function() {
                console.log("You logged in!");
            }
        )
    })

});