$(document).ready(function(){


   
    $("#Me_Nav_Icon").hover(function(){
        $("#Me_Nav_Icon").animate({width:"45px"}, 400);

        }, function(){
        $("#Me_Nav_Icon").animate({width:"50px"}, 400);
        }
    );

    //  $("#Earth_Nav_Icon").hover(function(){
    //     $("#Earth_Nav_Icon").animate({width:"45px"}, 400);

    //     }, function(){
    //     $("#Earth_Nav_Icon").animate({width:"50px"}, 400);
    //     }
    // );

      $("#SolarSystem_Nav_Icon").hover(function(){
        $("#SolarSystem_Nav_Icon").animate({width:"45px"}, 400);

        }, function(){
        $("#SolarSystem_Nav_Icon").animate({width:"50px"}, 400);
        }
    );

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


   
