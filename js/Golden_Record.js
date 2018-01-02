$(document).ready(function(){


	$("#imagerecord").click(function(){

        $("iframe").css("width", "20px");
        $("iframe").css("visibility", "visible");
         $("#X").css("visibility", "visible");
        $("iframe").animate({width: "60%"}, 900);
        
         $("#site").css("visibility", "visible");
    }
    );

    $("#X").click(function(){
         $("iframe").animate({width: "20px"}, 900);
        
        $("#X").css("visibility", "hidden");
        $("iframe").css("visibility", "hidden");
        $("#site").css("visibility", "hidden");

    }
    );

    $("#voyagerimg").hover(function(){

        $("#earthtext").css("visibility", "hidden");
        $("#suntext").css("visibility", "hidden");
        $("#moontext").css("visibility", "visible");
        $("#moonimg").animate({width: "225px"}, 200);
    }, function(){
        $("#earthtext").css("visibility", "hidden");
        $("#suntext").css("visibility", "hidden");
        $("#moontext").css("visibility", "hidden");
        $("#moonimg").animate({width: "185px"}, 200);
        }
    );

   
});

 