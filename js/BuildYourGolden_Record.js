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




var greeting = 0;
var sound = 0;
var music = 0;
var image = 0;
var brainwave = 0;

    $("#greetingicon").click(function(){
        greeting += 2;
        $("#greetingdiv").css("visibility", "visible");
        $(".create").css("visibility", "visible");
        $(".create").css("height", "560px");
        }
    );

     $("#greetingsave").click(function(){
        greeting -= 1;
        $("#greetingdiv").css("visibility", "hidden");
        $(".create").css("visibility", "hidden");
        }
    );



   $("#soundicon").click(function(){
        sound += 2;
        $("#sounddiv").css("visibility", "visible");
       $(".create").css("visibility", "visible");
         $(".create").css("height", "490px");
       $("#soundiframe").css("visibility", "visible");
        }
    );

  $("#soundsave").click(function(){
        sound -= 1;
        $("#sounddiv").css("visibility", "hidden");
        $(".create").css("visibility", "hidden");
        $("#soundiframe").css("visibility", "hidden");
        }
    );

    $("#musicicon").click(function(){
        music += 2;
        $("#musicdiv").css("visibility", "visible");
        $("iframe").css("visibility", "visible");
          $(".create").css("height", "630px");
        $(".create").css("visibility", "visible");
        }
    );


  $("#musicsave").click(function(){
        music -= 1;
        $("#musicdiv").css("visibility", "hidden");
        $(".create").css("visibility", "hidden");
        $("#musiciframe").css("visibility", "hidden");
        }
    );

    $("#imageicon").click(function(){
        image += 2;
        $("#imagediv").css("visibility", "visible");
        $(".create").css("visibility", "visible");
          $(".create").css("height", "550px");
        }
    );

  $("#imagesave").click(function(){
        image -= 1;
        $("#imagediv").css("visibility", "hidden");
        $(".create").css("visibility", "hidden");
        $("#imageiframe").css("visibility", "hidden");
        }
    );

    function readURL(input) {
        if (image > 0 ){
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                
                reader.onload = function (e) {
                    $('#blah').attr('src', e.target.result);
                }
                
                reader.readAsDataURL(input.files[0]);
            }
        }
    }
    
    $("#imgInp").change(function(){
        readURL(this);
    });



    $("#brainwaveicon").click(function(){
        brainwave +=2;
        $("#brainwavediv").css("visibility", "visible");
        $(".create").css("visibility", "visible");
          $(".create").css("height", "580px");
        }
    );

// //interaction in choosing the brainwave activity

//     $("#delta").hover(function(){
//         $("#delta").css("background-color", "rgba(255, 255, 255, 0.6)");
//         },function(){
//         $("#delta").css("background-color", "rgba(255, 255, 255, 0)");
//         }
//     );

//     $("#theta").hover(function(){
//         $("#theta").css("background-color", "rgba(255, 255, 255, 0.6)");
//         },function(){
//         $("#theta").css("background-color", "rgba(255, 255, 255, 0)");
//         }
//     );

//     $("#alpha").hover(function(){
//         $("#alpha").css("background-color", "rgba(255, 255, 255, 0.6)");
//         },function(){
//         $("#alpha").css("background-color", "rgba(255, 255, 255, 0)");
//         }
//     );

//     $("#beta").hover(function(){
//         $("#beta").css("background-color", "rgba(255, 255, 255, 0.6)");
//         },function(){
//         $("#beta").css("background-color", "rgba(255, 255, 255, 0)");
//         }
//     );

//     $("#gamma").hover(function(){
//         $("#gamma").css("background-color", "rgba(255, 255, 255, 0.6)");
//         },function(){
//         $("#gamma").css("background-color", "rgba(255, 255, 255, 0)");
//         }
//     );


    //clicking

    var delta = 0;
    var theta =0;
    var alpha = 0;
    var beta = 0;
    var gamma = 0;

    $("#delta").click(function(){
        if (delta < 1) {
            $("#delta").css("background-color", "rgba(255, 255, 255, 0.6)");
            $("#delta").css("border-color", "white");
            $("#delta").css("border-width", "1px");
            $("#delta").css("border-style", "solid");
            delta = 1;    
            }
        else{
            $("#delta").css("background-color", "rgba(255, 255, 255, 0)");
            $("#delta").css("border-width", "0px");
            delta = 0;  
        }
    });


    $("#theta").click(function(){
        if (theta < 1) {
            $("#theta").css("background-color", "rgba(255, 255, 255, 0.6)");
            $("#theta").css("border-color", "white");
            $("#theta").css("border-width", "1px");
            $("#theta").css("border-style", "solid");
            theta = 1;    
            }
        else{
            $("#theta").css("background-color", "rgba(255, 255, 255, 0)");
            $("#theta").css("border-width", "0px");
            theta = 0;  
        }
    });

    $("#alpha").click(function(){
        if (alpha < 1) {
            $("#alpha").css("background-color", "rgba(255, 255, 255, 0.6)");
            $("#alpha").css("border-color", "white");
            $("#alpha").css("border-width", "1px");
            $("#alpha").css("border-style", "solid");
            alpha = 1;    
            }
        else{
            $("#alpha").css("background-color", "rgba(255, 255, 255, 0)");
            $("#alpha").css("border-width", "0px");
            alpha = 0;  
        }
    });

    $("#beta").click(function(){
        if (beta < 1) {
            $("#beta").css("background-color", "rgba(255, 255, 255, 0.6)");
            $("#beta").css("border-color", "white");
            $("#beta").css("border-width", "1px");
            $("#beta").css("border-style", "solid");
            beta = 1;    
            }
        else{
            $("#beta").css("background-color", "rgba(255, 255, 255, 0)");
            $("#beta").css("border-width", "0px");
            beta = 0;  
        }
    });

    $("#gamma").click(function(){
        if (gamma < 1) {
            $("#gamma").css("background-color", "rgba(255, 255, 255, 0.6)");
            $("#gamma").css("border-color", "white");
            $("#gamma").css("border-width", "1px");
            $("#gamma").css("border-style", "solid");
            gamma = 1;    
            }
        else{
            $("#gamma").css("background-color", "rgba(255, 255, 255, 0)");
            $("#gamma").css("border-width", "0px");
            gamma = 0;  
        }
    });


     $("#brainwavesave").click(function(){
        brainwave -= 1;
        $("#brainwavediv").css("visibility", "hidden");
        $(".create").css("visibility", "hidden");
        }
    );

    $("button").click(function(){
        if((greeting > 0) && (sound > 0) && (music > 0) && (image > 0) && (brainwave > 0)){
            // $("#rocketship").css("visibility", "visible");
            // $("#rocketship").animate({height:"160px"}, 400);
            // $("#rocketship").animate({height:"150px"}, 400);

            $(".endanimation").css("visibility", "visible");
            $(".endanimation").css("cursor", "pointer");    
            setTimeout( function(){ $(".endanimation").animate({top: "20px"}, 4000)}, 1200);
        }
    });

   
});
