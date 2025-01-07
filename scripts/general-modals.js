$("#core-button").on("click", function () {
    $("#modal-core").removeClass("hidden");
});

$("#core-x").on("click", function () {
    $("#modal-core").addClass("hidden");
});

$("#math-button").on("click", function() {
    $("#modal-math").removeClass("hidden");
});

$("#math-x").on("click", function() {
    $("#modal-math").addClass("hidden");
});


$(document).ready(function () {
    if (window.matchMedia("(max-width: 850px)").matches) {
        $("#core-button").addClass("disabled");
        $("#math-button").addClass("disabled");
    } else {
        $("#core-button").removeClass("disabled");
        $("#math-button").removeClass("disabled");
    }
});

$(window).on("resize", function () {
    if (window.matchMedia("(max-width: 850px)").matches) {
        $("#modal-core").addClass("hidden");
        $("#modal-math").addClass("hidden");
        $("#core-button").addClass("disabled");
        $("#math-button").addClass("disabled");
    } else {
        $("#core-button").removeClass("disabled");
        $("#math-button").removeClass("disabled");
    }
});
