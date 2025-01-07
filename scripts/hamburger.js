$("#hamburger").on("click", function () {
    if ($("#navigation").hasClass("accessible-hidden")) {
        $("#navigation").removeClass("accessible-hidden");
        $("#hamburger").addClass("accessible-hidden");
        $("#x-button").removeClass("accessible-hidden");
    } else {
        $("#navigation").addClass("accessible-hidden");
        $("#x-button").addClass("accessible-hidden");
        $("#hamburger").removeClass("accessible-hidden");
    }
});


$("#x-button").on("click", function () {
    if (!$("#navigation").hasClass("accessible-hidden")) {
        $("#navigation").addClass("accessible-hidden");
        $("#hamburger").removeClass("accessible-hidden");
        $("#x-button").addClass("accessible-hidden");
    } else {
        $("#navigation").removeClass("accessible-hidden");
        $("#x-button").removeClass("accessible-hidden");
        $("#hamburger").addClass("accessible-hidden");
    }
});


$(document).ready(function () {
    if (window.matchMedia("(max-width: 850px)").matches) {
        $("#hamburger").removeClass("accessible-hidden");
        $("#navigation").addClass("accessible-hidden");
        $("#x-button").addClass("accessible-hidden");
    } else {
        $("#hamburger").addClass("accessible-hidden");
        $("#navigation").removeClass("accessible-hidden");
        $("#x-button").addClass("accessible-hidden");
    }
});


$(window).on("resize", function () {
    if (window.matchMedia("(max-width: 850px)").matches) {
        $("#hamburger").removeClass("accessible-hidden");
        $("#x-button").addClass("accessible-hidden");
        $("#navigation").addClass("accessible-hidden");
    } else {
        $("#hamburger").addClass("accessible-hidden");
        $("#x-button").addClass("accessible-hidden");
        $("#navigation").removeClass("accessible-hidden");
    }
});
