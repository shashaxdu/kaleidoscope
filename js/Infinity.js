$(document).ready(function(){

var rocket=0;

	$("#earth").click(function(){
        rocket +=1;
        $("iframe").css("width", "20px");
        $("iframe").css("visibility", "visible");
        $("#X").css("visibility", "visible");
        $("iframe").animate({"width": "720"}, 900);
        $("#site").css("visibility", "visible");
    }
    );

    $("#X").click(function(){
         $("iframe").animate({"width": "20px"}, 900);
        rocket +=1;
        $("#X").css("visibility", "hidden");
        $("iframe").css("visibility", "hidden");
        $("#site").css("visibility", "hidden");

    }
    );

var infinity =0;

    $("#infinity").click(function(){
        if (infinity <1){
        rocket +=1;
        infinity +=1;
        $("#infinitytext").css("visibility", "visible");}
        
        else {
        infinity -=1;
        rocket +=1;
         $("#infinitytext").css("visibility", "hidden");   
        }
    }
    );

  $("body").mousemove(function(){
    if (rocket >2){
        $("#rocketship").css("visibility", "visible");
        $("#rocketship").animate({bottom:"650px"}, 4000);


            }
        });


   
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

    //      $("#Infinity_Nav_Icon").hover(function(){
    //     $("#Infinity_Nav_Icon").animate({width:"45px"}, 400);

    //     }, function(){
    //     $("#Infinity_Nav_Icon").animate({width:"50px"}, 400);
    //     }
    // );
   
});
