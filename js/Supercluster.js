$(document).ready(function () {


    $("#milkywayimg").hover(function () {

        $("#ssarrow").css("visibility", "visible");
        $("#milkywaytext").css("visibility", "visible");
        $("#andromedatext").css("visibility", "hidden");
    }, function () {
    }
    );

    $("#andromedaimg").hover(function () {
        $("#ssarrow").css("visibility", "hidden");
        $("#milkywaytext").css("visibility", "hidden");
        $("#andromedatext").css("visibility", "visible");
    }, function () {
    }
    );

});
