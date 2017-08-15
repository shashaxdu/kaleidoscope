$(document).ready(function(){


    $("#milkywayimg").hover(function(){

        $("#ssarrow").css("visibility", "visible");
        $("#milkywaytext").css("visibility", "visible");
        $("#andromedatext").css("visibility", "hidden");
         }, function(){
        }
    );

     $("#andromedaimg").hover(function(){
        $("#ssarrow").css("visibility", "hidden");
        $("#milkywaytext").css("visibility", "hidden");
        $("#andromedatext").css("visibility", "visible");
        }, function(){
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

    //     $("#ObUniv_Nav_Icon").hover(function(){
    //     $("#ObUniv_Nav_Icon").animate({width:"45px"}, 400);

    //     }, function(){
    //     $("#ObUniv_Nav_Icon").animate({width:"50px"}, 400);
    //     }
    // );

         $("#Infinity_Nav_Icon").hover(function(){
        $("#Infinity_Nav_Icon").animate({width:"45px"}, 400);

        }, function(){
        $("#Infinity_Nav_Icon").animate({width:"50px"}, 400);
        }
    );
   
});
