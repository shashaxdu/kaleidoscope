$(document).ready(function(){


  
    $("#person").hover(function(){
        $("#person").animate({width:"180px"}, 400);

        }, function(){
        $("#person").animate({width:"200px"}, 400);
        }
    );


  
    $("#infinity").hover(function(){
        $("#infinity").animate({width:"180px"}, 400);

        }, function(){
        $("#infinity").animate({width:"200px"}, 400);
        }
    );
});
