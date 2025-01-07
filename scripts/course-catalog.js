$("#course-level-subcontainer-1").on("click", function () {
    if ($("#course-content-1").hasClass("accessible-hidden")) {
        $("#course-content-1").removeClass("accessible-hidden");
        $("#right-pointing-1").addClass("hidden")
        $("#down-pointing-1").removeClass("hidden");
    } else {
        $("#course-content-1").addClass("accessible-hidden")
        $("#right-pointing-1").removeClass("hidden");
        $("#down-pointing-1").addClass("hidden")

    }
});

$("#course-level-subcontainer-2").on("click", function () {
    if ($("#course-content-2").hasClass("accessible-hidden")) {
        $("#course-content-2").removeClass("accessible-hidden");
        $("#right-pointing-2").addClass("hidden")
        $("#down-pointing-2").removeClass("hidden");
    } else {
        $("#course-content-2").addClass("accessible-hidden")
        $("#right-pointing-2").removeClass("hidden");
        $("#down-pointing-2").addClass("hidden")

    }
});

$("#course-level-subcontainer-3").on("click", function () {
    if ($("#course-content-3").hasClass("accessible-hidden")) {
        $("#course-content-3").removeClass("accessible-hidden");
        $("#right-pointing-3").addClass("hidden")
        $("#down-pointing-3").removeClass("hidden");
    } else {
        $("#course-content-3").addClass("accessible-hidden")
        $("#right-pointing-3").removeClass("hidden");
        $("#down-pointing-3").addClass("hidden")

    }
});


$("#course-level-subcontainer-4").on("click", function () {
    if ($("#course-content-4").hasClass("accessible-hidden")) {
        $("#course-content-4").removeClass("accessible-hidden");
        $("#right-pointing-4").addClass("hidden")
        $("#down-pointing-4").removeClass("hidden");
    } else {
        $("#course-content-4").addClass("accessible-hidden")
        $("#right-pointing-4").removeClass("hidden");
        $("#down-pointing-4").addClass("hidden")

    }
});

$("#course-level-subcontainer-5").on("click", function () {
    if ($("#course-content-5").hasClass("accessible-hidden")) {
        $("#course-content-5").removeClass("accessible-hidden");
        $("#right-pointing-5").addClass("hidden")
        $("#down-pointing-5").removeClass("hidden");
    } else {
        $("#course-content-5").addClass("accessible-hidden")
        $("#right-pointing-5").removeClass("hidden");
        $("#down-pointing-5").addClass("hidden")

    }
});

$("#course-level-subcontainer-6").on("click", function () {
    if ($("#course-content-6").hasClass("accessible-hidden")) {
        $("#course-content-6").removeClass("accessible-hidden");
        $("#right-pointing-6").addClass("hidden")
        $("#down-pointing-6").removeClass("hidden");
    } else {
        $("#course-content-6").addClass("accessible-hidden")
        $("#right-pointing-6").removeClass("hidden");
        $("#down-pointing-6").addClass("hidden")

    }
});

$("#course-level-subcontainer-7").on("click", function () {
    if ($("#course-content-7").hasClass("accessible-hidden")) {
        $("#course-content-7").removeClass("accessible-hidden");
        $("#right-pointing-7").addClass("hidden")
        $("#down-pointing-7").removeClass("hidden");
    } else {
        $("#course-content-7").addClass("accessible-hidden")
        $("#right-pointing-7").removeClass("hidden");
        $("#down-pointing-7").addClass("hidden")

    }
});

$("#course-level-subcontainer-8").on("click", function () {
    if ($("#course-content-8").hasClass("accessible-hidden")) {
        $("#course-content-8").removeClass("accessible-hidden");
        $("#right-pointing-8").addClass("hidden")
        $("#down-pointing-8").removeClass("hidden");
    } else {
        $("#course-content-8").addClass("accessible-hidden")
        $("#right-pointing-8").removeClass("hidden");
        $("#down-pointing-8").addClass("hidden")

    }
});



$(document).ready(function () {
    if (window.matchMedia("(max-width: 850px)").matches) {
        $("#right-pointing").removeClass("hidden");
        $("#down-pointing").addClass("hidden");
        $("#course-content").addClass("accessible-hidden");
    } else {
        $("#right-pointing").removeClass("hidden");
        $("#down-pointing").addClass("hidden");
        $("#course-content").addClass("accessible-hidden");
    }
});
