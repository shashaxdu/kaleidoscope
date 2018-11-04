$(document).ready(function(){

     $("#earthimg").hover(function(){

        $("#earthtext").css("visibility", "visible");
        $("#suntext").css("visibility", "hidden");
        $("#moontext").css("visibility", "hidden");
        $("#earthimg").animate({width: "600px"}, 200);
    }, function(){
        $("#earthtext").css("visibility", "hidden");
        $("#suntext").css("visibility", "hidden");
        $("#moontext").css("visibility", "hidden");
        $("#earthimg").animate({width: "500px"}, 200);
        }
    );

          $("#sunimg").hover(function(){

        $("#earthtext").css("visibility", "hidden");
        $("#suntext").css("visibility", "visible");
        $("#moontext").css("visibility", "hidden");
        $("#sunimg").animate({width: "180px"}, 200);
    }, function(){
        $("#earthtext").css("visibility", "hidden");
        $("#suntext").css("visibility", "hidden");
        $("#moontext").css("visibility", "hidden");
        $("#sunimg").animate({width: "140px"}, 200);
        }
    );

               $("#moonimg").hover(function(){

        $("#earthtext").css("visibility", "hidden");
        $("#suntext").css("visibility", "hidden");
        $("#moontext").css("visibility", "visible");
        $("#moonimg").animate({width: "205px"}, 200);
    }, function(){
        $("#earthtext").css("visibility", "hidden");
        $("#suntext").css("visibility", "hidden");
        $("#moontext").css("visibility", "hidden");
        $("#moonimg").animate({width: "165px"}, 200);
        }
    );

});


   
