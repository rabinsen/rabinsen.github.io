$(document).ready(function () {
    var start = 0;
    var end = 0;
    $("#start").click(function () {
        start = 1;
        end = 0;
        $(".boundary").removeClass("youlose");
        $("#status").text("Game started!").css("color", "green");
    });

    $(".boundary").mouseover(function () {
        loose();
    });

    $("#maze").mouseleave(function () {
        loose();
    });

    $("#end").mouseover(function () {
        if (end == 0) {
            $("#status").text("Hurray! You Win").css("color", "green");
            end = 1;
        }
    });

    function loose() {
        if (start == 1 && end == 0) {
            $("div .boundary").addClass("youlose");
            $("#status").text("Sorry, you lost!").css("color", "red");
            end = 1;
        }
    }


});

