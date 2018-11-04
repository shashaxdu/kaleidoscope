$(document).ready(function () {

    var ufo = 0;

    $("#milkyway").hover(function () {
        ufo += 1;
        $("#text").css("visibility", "visible");
    }, function () {
    }
    );

    $("#ssimg").hover(function () {
        ufo += 1;

        $("#ssarrow").css("visibility", "visible");
        $("#sstext").css("visibility", "visible");
        $("#trappisttext").css("visibility", "visible");
    }, function () {
    }
    );

    $("#trappistimg").hover(function () {
        ufo += 1;
        $("#ssarrow").css("visibility", "visible");
        $("#sstext").css("visibility", "visible");
        $("#trappisttext").css("visibility", "visible");
        $("#trappistimg").animate({ width: "50px" }, 200);
    }, function () {
        $("#trappistimg").animate({ width: "35px" }, 200);
    }
    );

    $("#trappistimg").click(function () {
        ufo += 1;


        if (ufo > 4) {
            $("#ufo").css("visibility", "visible");
            setTimeout(function () { $("#ufo").animate({ bottom: "650px" }, 1200), 3600 });
        }
    });




});
