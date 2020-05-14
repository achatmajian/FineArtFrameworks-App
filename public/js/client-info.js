$(function () {

    $(".new-client-button").on("click", function (event) {
        event.preventDefault();
        console.log("You clicked a button!");
        window.location.href ="/order/details"

    });

    $(".existing-client-button").on("click", function (event) {
        event.preventDefault();
        console.log("You clicked a different button!");
        window.location.href="/order/client"
    });
});