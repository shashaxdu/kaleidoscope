$(document).ready(function(){


   
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

      $("#SolarSystem_Nav_Icon").hover(function(){
        $("#SolarSystem_Nav_Icon").animate({width:"45px"}, 400);

        }, function(){
        $("#SolarSystem_Nav_Icon").animate({width:"50px"}, 400);
        }
    );

    //    $("#MilkyWay_Nav_Icon").hover(function(){
    //     $("#MilkyWay_Nav_Icon").animate({width:"45px"}, 400);

    //     }, function(){
    //     $("#MilkyWay_Nav_Icon").animate({width:"50px"}, 400);
    //     }
    // );

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


   
