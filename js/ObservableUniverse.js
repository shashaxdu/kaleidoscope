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

var nav= 0;

        $("#magnify").click(function(){

                if (nav == 0){
                    nav +=1;
                                
                    $("#text").css("visibility", "visible");
                    $("#textrightbutton").css("visibility", "visible");
                    $("#t1").css("visibility", "visible");
                }
                else if (nav > 0) {
                     nav = 0;
                    $("#text").css("visibility", "hidden");
                    $("#textrightbutton").css("visibility", "hidden");
                    $("#textlefttbutton").css("visibility", "hidden");
                    $("#t1").css("visibility", "hidden");
                    $("#t2").css("visibility", "hidden");
                    $("#t3").css("visibility", "hidden");
                }
        });

        $("#textrightbutton").click(function(){
                
                if (nav == 1){
                       nav +=1;
                    $("#textrightbutton").css("visibility", "visible");
                    $("#textleftbutton").css("visibility", "visible");
                    $("#t1").css("visibility", "hidden");
                    $("#t2").css("visibility", "visible");
                }
                else if (nav == 2){
                       nav +=1;
                    $("#textrightbutton").css("visibility", "hidden");
                    $("#textleftbutton").css("visibility", "visible");
                    $("#t1").css("visibility", "hidden");
                     $("#t2").css("visibility", "hidden");
                    $("#t3").css("visibility", "visible");
                        };
         });        
   
            $("#textleftbutton").click(function(){
            
                
                if (nav == 2){
                    nav -=1;
                    $("#textrightbutton").css("visibility", "visible");
                    $("#textleftbutton").css("visibility", "hidden");
                    $("#t1").css("visibility", "visible");
                    $("#t2").css("visibility", "hidden");
                     $("#t3").css("visibility", "hidden");
                }
                else if (nav == 3){
                    nav -=1;
                    $("#textrightbutton").css("visibility", "hidden");
                    $("#textleftbutton").css("visibility", "visible");
                    $("#t1").css("visibility", "hidden");
                     $("#t2").css("visibility", "visible");
                    $("#t3").css("visibility", "hidden");
                        };
         });    

});
