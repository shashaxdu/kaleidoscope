$(document).ready(function(){

     $("#mercuryimg").hover(function(){

        $("#mercuryimg").animate({width: "100px"}, 400);
        $("#mercurytext").css("visibility", "visible");
        $("#venustext").css("visibility", "hidden");
        $("#earthtext").css("visibility", "hidden");
        $("#marstext").css("visibility", "hidden");
        $("#jupitertext").css("visibility", "hidden");
        $("#saturntext").css("visibility", "hidden");
        $("#uranustext").css("visibility", "hidden");
        $("#neptunetext").css("visibility", "hidden");
    }, function(){
        $("#mercurytext").css("visibility", "hidden");
        $("#mercuryimg").animate({width: "10px"}, 200);
        }
    );

    $("#venusimg").hover(function(){

        $("#venusimg").animate({width: "120px"}, 400);
        $("#mercurytext").css("visibility", "hidden");
        $("#venustext").css("visibility", "visible");
        $("#earthtext").css("visibility", "hidden");
        $("#marstext").css("visibility", "hidden");
        $("#jupitertext").css("visibility", "hidden");
        $("#saturntext").css("visibility", "hidden");
        $("#uranustext").css("visibility", "hidden");
        $("#neptunetext").css("visibility", "hidden");
    }, function(){
        $("#venustext").css("visibility", "hidden");
        $("#venusimg").animate({width: "26px"}, 200);
        }
    );

    $("#earthimg").hover(function(){

        $("#earthimg").animate({width: "120px"}, 400);
        $("#mercurytext").css("visibility", "hidden");
        $("#venustext").css("visibility", "hidden");
        $("#earthtext").css("visibility", "visible");
        $("#marstext").css("visibility", "hidden");
        $("#jupitertext").css("visibility", "hidden");
        $("#saturntext").css("visibility", "hidden");
        $("#uranustext").css("visibility", "hidden");
        $("#neptunetext").css("visibility", "hidden");
    }, function(){
        $("#earthtext").css("visibility", "hidden");
        $("#earthimg").animate({width: "30px"}, 200);
        }
    );

    $("#marsimg").hover(function(){

        $("#marsimg").animate({width: "80px"}, 400);
        $("#mercurytext").css("visibility", "hidden");
        $("#venustext").css("visibility", "hidden");
        $("#earthtext").css("visibility", "hidden");
        $("#marstext").css("visibility", "visible");
        $("#jupitertext").css("visibility", "hidden");
        $("#saturntext").css("visibility", "hidden");
        $("#uranustext").css("visibility", "hidden");
        $("#neptunetext").css("visibility", "hidden");
    }, function(){
        $("#marstext").css("visibility", "hidden");
        $("#marsimg").animate({width: "14px"}, 200);
        }
    );

    $("#jupiterimg").hover(function(){

        $("#jupiterimg").animate({width: "350px"}, 400);
        $("#mercurytext").css("visibility", "hidden");
        $("#venustext").css("visibility", "hidden");
        $("#earthtext").css("visibility", "hidden");
        $("#marstext").css("visibility", "hidden");
        $("#jupitertext").css("visibility", "visible");
        $("#saturntext").css("visibility", "hidden");
        $("#uranustext").css("visibility", "hidden");
        $("#neptunetext").css("visibility", "hidden");
    }, function(){
        $("#jupitertext").css("visibility", "hidden");
        $("#jupiterimg").animate({width: "300px"}, 200);
        }
    );

    $("#saturnimg").hover(function(){

        $("#saturnimg").animate({width: "360px"}, 400);
        $("#mercurytext").css("visibility", "hidden");
        $("#venustext").css("visibility", "hidden");
        $("#earthtext").css("visibility", "hidden");
        $("#marstext").css("visibility", "hidden");
        $("#jupitertext").css("visibility", "hidden");
        $("#saturntext").css("visibility", "visible");
        $("#uranustext").css("visibility", "hidden");
        $("#neptunetext").css("visibility", "hidden");
    }, function(){
        $("#saturntext").css("visibility", "hidden");
        $("#saturnimg").animate({width: "310px"}, 200);
        }
    );

    $("#uranusimg").hover(function(){

        $("#uranusimg").animate({width: "200px"}, 400);
        $("#mercurytext").css("visibility", "hidden");
        $("#venustext").css("visibility", "hidden");
        $("#earthtext").css("visibility", "hidden");
        $("#marstext").css("visibility", "hidden");
        $("#jupitertext").css("visibility", "hidden");
        $("#saturntext").css("visibility", "hidden");
        $("#uranustext").css("visibility", "visible");
        $("#neptunetext").css("visibility", "hidden");
    }, function(){
        $("#uranustext").css("visibility", "hidden");
        $("#uranusimg").animate({width: "160px"}, 200);
        }
    );

    $("#neptuneimg").hover(function(){

        $("#neptuneimg").animate({width: "130px"}, 400);
        $("#mercurytext").css("visibility", "hidden");
        $("#venustext").css("visibility", "hidden");
        $("#earthtext").css("visibility", "hidden");
        $("#marstext").css("visibility", "hidden");
        $("#jupitertext").css("visibility", "hidden");
        $("#saturntext").css("visibility", "hidden");
        $("#uranustext").css("visibility", "hidden");
        $("#neptunetext").css("visibility", "visible");
    }, function(){
        $("#neptunetext").css("visibility", "hidden");
        $("#neptuneimg").animate({width: "100px"}, 200);
        }
    );

    $("#mercuryimg").hover(function(){

        $("#mercuryimg").animate({width: "100px"}, 400);
        $("#mercurytext").css("visibility", "visible");
        $("#venustext").css("visibility", "hidden");
        $("#earthtext").css("visibility", "hidden");
        $("#marstext").css("visibility", "hidden");
        $("#jupitertext").css("visibility", "hidden");
        $("#saturntext").css("visibility", "hidden");
        $("#uranustext").css("visibility", "hidden");
        $("#neptunetext").css("visibility", "hidden");
    }, function(){
        $("#mercurytext").css("visibility", "hidden");
        $("#mercuryimg").animate({width: "10px"}, 200);
        }
    );



$("#marsimg").hover(function(){
        $("#t2").css("visibility", "hidden");
        $("#t3").css("visibility", "hidden");
        
        $("#t1").css("visibility", "visible");
 }, function(){
        $("#t2").css("visibility", "hidden");
        $("#t3").css("visibility", "hidden");
        }
    );

$("#jupiterimg").hover(function(){
        $("#t1").css("visibility", "hidden");
        $("#t3").css("visibility", "hidden");
        
        $("#t2").css("visibility", "visible");
 }, function(){
        $("#t1").css("visibility", "hidden");
        $("#t3").css("visibility", "hidden");
        }
    );

   $("#neptuneimg").hover(function(){
        $("#t2").css("visibility", "hidden");
        $("#t1").css("visibility", "hidden");
        
        $("#t3").css("visibility", "visible");
 }, function(){
        $("#t2").css("visibility", "hidden");
        $("#t1").css("visibility", "hidden");
        }
    );
});
