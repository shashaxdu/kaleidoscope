$(document).ready(function(){

     $("#proximaimg").hover(function(){

        $("#proximatext").css("visibility", "visible");
        $("#proxsuntext").css("visibility", "visible");
        $("#sirsuntext").css("visibility", "hidden");
        $("#siriustext").css("visibility", "hidden");
        $("#proximaimg").animate({width: "50px"}, 200);
    }, function(){

        $("#proximaimg").animate({width: "35px"}, 200);
        $("#sirsuntext").css("visibility", "hidden");
        $("#siriustext").css("visibility", "hidden");
        }
    );



     $("#siriusimg").hover(function(){


        $("#sirsuntext").css("visibility", "visible");
        $("#siriustext").css("visibility", "visible");
        $("#siriusimg").animate({width: "105px"}, 200);
        $("#proxsuntext").css("visibility", "hidden");
        $("#proximatext").css("visibility", "hidden");
    }, function(){

        $("#siriusimg").animate({width: "90px"}, 200);
        $("#proxsuntext").css("visibility", "hidden");
        $("#proximatext").css("visibility", "hidden");

        }
    );

});


   
