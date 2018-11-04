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
   

   var ufo = 0;

     $("#milkyway").hover(function(){
        ufo += 1;
        $("#text").css("visibility", "visible");
         }, function(){
        }
         );

    $("#ssimg").hover(function(){
        ufo +=1;

        $("#ssarrow").css("visibility", "visible");
        $("#sstext").css("visibility", "visible");
        $("#trappisttext").css("visibility", "visible");
         }, function(){
        }
    );

     $("#trappistimg").hover(function(){
        ufo +=1;
        $("#ssarrow").css("visibility", "visible");
        $("#sstext").css("visibility", "visible");
        $("#trappisttext").css("visibility", "visible");
        $("#trappistimg").animate({width: "50px"}, 200);
        }, function(){
        $("#trappistimg").animate({width: "35px"}, 200);
        }
    );

     $("#trappistimg").click(function(){
        ufo +=1;
        
  
            if( ufo>4){
                $("#ufo").css("visibility", "visible");
                setTimeout( function(){$("#ufo").animate({bottom: "650px"}, 1200), 3600}); 
            }
    });




});
