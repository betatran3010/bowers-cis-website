$(document).ready(function() {
    $("#behavioral-courses").addClass("accessible-hidden");
    $("#data-courses").addClass("accessible-hidden");
    $("#digital-courses").addClass("accessible-hidden");
    $("#information-courses").addClass("accessible-hidden");
    $("#interactive-courses").addClass("accessible-hidden");
    $("#networks-courses").addClass("accessible-hidden");
    $("#ux-courses").addClass("accessible-hidden");

    $("#behavioral-butt-s").removeClass("hidden");
    $("#behavioral-butt-h").addClass("hidden");

    $("#data-butt-s").removeClass("hidden");
    $("#data-butt-h").addClass("hidden");

    $("#digital-butt-s").removeClass("hidden");
    $("#digital-butt-h").addClass("hidden");

    $("#information-butt-s").removeClass("hidden");
    $("#information-butt-h").addClass("hidden");

    $("#interactive-butt-s").removeClass("hidden");
    $("#interactive-butt-h").addClass("hidden");

    $("#networks-butt-s").removeClass("hidden");
    $("#networks-butt-h").addClass("hidden");

    $("#ux-butt-s").removeClass("hidden");
    $("#ux-butt-h").addClass("hidden");
});

$("#behavioral-butt-s").on("click", function() {
    $("#behavioral-butt-s").addClass("hidden");
    $("#behavioral-butt-h").removeClass("hidden");
    $("#behavioral-courses").removeClass("accessible-hidden");
});

$("#behavioral-butt-h").on("click", function() {
    $("#behavioral-butt-h").addClass("hidden");
    $("#behavioral-butt-s").removeClass("hidden");
    $("#behavioral-courses").addClass("accessible-hidden");
});

$("#data-butt-s").on("click", function() {
    $("#data-butt-s").addClass("hidden");
    $("#data-butt-h").removeClass("hidden");
    $("#data-courses").removeClass("accessible-hidden");
});

$("#data-butt-h").on("click", function() {
    $("#data-butt-h").addClass("hidden");
    $("#data-butt-s").removeClass("hidden");
    $("#data-courses").addClass("accessible-hidden");
});

$("#digital-butt-s").on("click", function() {
    $("#digital-butt-s").addClass("hidden");
    $("#digital-butt-h").removeClass("hidden");
    $("#digital-courses").removeClass("accessible-hidden");
});

$("#digital-butt-h").on("click", function() {
    $("#digital-butt-h").addClass("hidden");
    $("#digital-butt-s").removeClass("hidden");
    $("#digital-courses").addClass("accessible-hidden");
});

$("#information-butt-s").on("click", function() {
    $("#information-butt-s").addClass("hidden");
    $("#information-butt-h").removeClass("hidden");
    $("#information-courses").removeClass("accessible-hidden");
});

$("#information-butt-h").on("click", function() {
    $("#information-butt-h").addClass("hidden");
    $("#information-butt-s").removeClass("hidden");
    $("#information-courses").addClass("accessible-hidden");
});

$("#interactive-butt-s").on("click", function() {
    $("#interactive-butt-s").addClass("hidden");
    $("#interactive-butt-h").removeClass("hidden");
    $("#interactive-courses").removeClass("accessible-hidden");
});

$("#interactive-butt-h").on("click", function() {
    $("#interactive-butt-h").addClass("hidden");
    $("#interactive-butt-s").removeClass("hidden");
    $("#interactive-courses").addClass("accessible-hidden");
});

$("#networks-butt-s").on("click", function() {
    $("#networks-butt-s").addClass("hidden");
    $("#networks-butt-h").removeClass("hidden");
    $("#networks-courses").removeClass("accessible-hidden");
});

$("#networks-butt-h").on("click", function() {
    $("#networks-butt-h").addClass("hidden");
    $("#networks-butt-s").removeClass("hidden");
    $("#networks-courses").addClass("accessible-hidden");
});

$("#ux-butt-s").on("click", function() {
    $("#ux-butt-s").addClass("hidden");
    $("#ux-butt-h").removeClass("hidden");
    $("#ux-courses").removeClass("accessible-hidden");
});

$("#ux-butt-h").on("click", function() {
    $("#ux-butt-h").addClass("hidden");
    $("#ux-butt-s").removeClass("hidden");
    $("#ux-courses").addClass("accessible-hidden");
});
