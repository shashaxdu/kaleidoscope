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

    

   
    $("#Me_Nav_Icon").hover(function(){
        $("#Me_Nav_Icon").animate({width:"45px"}, 400);

        }, function(){
        $("#Me_Nav_Icon").animate({width:"50px"}, 400);
        }
    );

     $("#Earth_Nav_Icon").hover(function(){
        $("#Earth_Nav_Icon").animate({width:"45px"}, 400);

        }, function(){
        $("#Earth_Nav_Icon").animate({width:"50px"}, 400);
        }
    );

    //   $("#SolarSystem_Nav_Icon").hover(function(){
    //     $("#SolarSystem_Nav_Icon").animate({width:"45px"}, 400);

    //     }, function(){
    //     $("#SolarSystem_Nav_Icon").animate({width:"50px"}, 400);
    //     }
    // );

       $("#MilkyWay_Nav_Icon").hover(function(){
        $("#MilkyWay_Nav_Icon").animate({width:"45px"}, 400);

        }, function(){
        $("#MilkyWay_Nav_Icon").animate({width:"50px"}, 400);
        }
    );

        $("#ObUniv_Nav_Icon").hover(function(){
        $("#ObUniv_Nav_Icon").animate({width:"45px"}, 400);

        }, function(){
        $("#ObUniv_Nav_Icon").animate({width:"50px"}, 400);
        }
    );

         $("#Infinity_Nav_Icon").hover(function(){
        $("#Infinity_Nav_Icon").animate({width:"45px"}, 400);

        }, function(){
        $("#Infinity_Nav_Icon").animate({width:"50px"}, 400);
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

 