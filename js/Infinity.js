$(document).ready(function () {

    var rocket = 0;

    $("#earth").click(function () {
        rocket += 1;
        $("iframe").css("width", "20px");
        $("iframe").css("visibility", "visible");
        $("#X").css("visibility", "visible");
        $("iframe").animate({ "width": "720" }, 900);
        $("#site").css("visibility", "visible");
    }
    );

    $("#X").click(function () {
        $("iframe").animate({ "width": "20px" }, 900);
        rocket += 1;
        $("#X").css("visibility", "hidden");
        $("iframe").css("visibility", "hidden");
        $("#site").css("visibility", "hidden");

    }
    );

    var infinity = 0;

    $("#infinity").click(function () {
        if (infinity < 1) {
            rocket += 1;
            infinity += 1;
            $("#infinitytext").css("visibility", "visible");
        }

        else {
            infinity -= 1;
            rocket += 1;
            $("#infinitytext").css("visibility", "hidden");
        }
    }
    );

    $("body").mousemove(function () {
        if (rocket > 2) {
            $("#rocketship").css("visibility", "visible");
            $("#rocketship").animate({ bottom: "650px" }, 4000);


        }
    });

});
