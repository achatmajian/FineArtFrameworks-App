$(function () {

    $(".new-client-button").on("click", function (event) {
        event.preventDefault();
        console.log("You clicked a button!");
        window.location.href ="/order/details";
        return false;

    });

    $(".existing-client-button").on("click", function (event) {
        event.preventDefault();
        console.log("You clicked a different button!");
        window.location.href="/order/client";
        return false;
    });
    
});