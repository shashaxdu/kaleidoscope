$(document).ready(function(){

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
