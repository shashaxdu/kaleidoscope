// JavaScript Document
$(document).ready(function(){

	
		//when BuildAvatar is clicked
			$(".buildavatar").click(function(){
				// remove click function so can't be clicked again
				$(".buildavatar").unbind("click");
				// remove cursor
				$(".buildavatar").css({ "cursor" : "default"});
				// move targjeta
			$("#tarjeta").animate({width: "300px"},400);
			$("#tarjeta").animate({left: "9%"},400);
			$("#tarjeta").animate({top: "225px"},400);
			//edit css of tarjeta
			$("#tarjeta").css("height", "25%");
			$("input").css("padding", "2px");
			$("input").css("margin" , "1px");
			$("select").css("margin" , "1px");
			$("button").css("margin" , "2.8% 1% 0 1%");
			$("button").removeClass("col-xs-3");
			$("button").addClass("col-xs-5");
			$("#textbuildavatar").hide();
			$("#savebutton").css("visibility" , "visible");
			// now show make the content for the next page visible - use setTimeout to time it after tarjeta moves
			setTimeout( function(){ $("#page2_avatarcreator").css({ "visibility" : "visible"}) }, 1200);
			setTimeout( function(){ $("#AvatarProfBadge").css({ "visibility" : "visible"}) }, 1200);
					});
	
	
	
			//when hovering over the avatar icon
			 $(".buildavatar").hover(function(){
				$("h3#textbuildavatar").css("color", "Purple");
				$("h3#textbuildavatar").css("text-decoration", "underline");
					}, function(){
				$("h3#textbuildavatar").css("color", "black");
				$("h3#textbuildavatar").css("text-decoration", "none");
	
					});
		 
			//when hovering over the button
			 $("button[type=submit]").hover(function(){
				$("button[type=submit]").css("color", "Purple");
				$("button[type=submit]").css("text-decoration", "underline");
					}, function(){
				$("button[type=submit]").css("color", "black");
				$("button[type=submit]").css("text-decoration", "none");
	
					});
	
	//when hovering over the button
			 $("button[type=reset]").hover(function(){
				$("button[type=reset]").css("color", "Purple");
				$("button[type=reset]").css("text-decoration", "underline");
					}, function(){
				$("button[type=reset]").css("color", "black");
				$("button[type=reset]").css("text-decoration", "none");
	
					});
	
	//when hovering over the button
			 $("#saveavatar").hover(function(){
				$("#saveavatar").css("color", "Purple");
				$("#saveavatar]").css("text-decoration", "underline");
					}, function(){
				$("#saveavatar").css("color", "black");
				$("#saveavatar").css("text-decoration", "none");
	
					});
	
			 var blastoff = 0;
	
				 //saving input on form
			$("button#savebutton").click(function saveinput(){
				//typed input
				blastoff +=1;
			var fname = document.getElementById("fname").value;
			var age = document.getElementById("age").value;
			var country = document.getElementById("country").value;
	
			var Badgefname = document.getElementById("Badgefname");
			var Badgeage = document.getElementById("Badgeage");
			var Badgecountry = document.getElementById("Badgecountry");
	
			//select fields
			var planet = document.getElementById("planet");
			var galaxy = document.getElementById("galaxy");
	
	
			if (fname.length < 1) {
				alert("Astronaut, what is your name?");
				} else if (age.length <1) {
					alert("Astronaut, what is your age?");
				} else if (country.length <2){
					alert("Astronaut, what is your home country?");
				} else {
					$("#savebutton").css("visibility" , "hidden");
					$("form").css({ "visibility" : "hidden"});
					Badgefname.textContent = fname;
					Badgeage.textContent = age + "  years";
					Badgecountry.textContent = "from " + country;
					Badgeplanet.innerHTML = ("trained on Planet " + planet.options[planet.selectedIndex].text);
					Badgegalaxy.innerHTML = ("going to " + galaxy.options[planet.selectedIndex].text);
						};		
				});
	
	
			var avatarhair = 0;
			var avatareye = 0;
			var avatarbadge = 0;
	
		 
			$("#001").click(function(){
	
	
			 avatarhair +=1;
	
			$("#001").css("background-color", "rgba(255, 255, 255, 0.4)");
			$("#002").css("background-color", "rgba(255, 255, 255, 0)");
			$("#003").css("background-color", "rgba(255, 255, 255, 0)");
			$("#004").css("background-color", "rgba(255, 255, 255, 0)");
			$("#Hair_01").css("visibility", "visible");
			$("#Hair_02").css("visibility", "hidden");
			$("#Hair_03").css("visibility", "hidden");
			$("#Hair_04").css("visibility", "hidden");
	
			$("#013").css("background-color", "rgba(255, 255, 255, 0)");
			$("#014").css("background-color", "rgba(255, 255, 255, 0)");
			$("#015").css("background-color", "rgba(255, 255, 255, 0)");
			$("#Hair_05").css("visibility", "hidden");
			$("#Hair_06").css("visibility", "hidden");
			$("#Hair_07").css("visibility", "hidden");
	
	
	
			});
	
			$("#002").click(function(){
	
				 avatarhair +=1;
	
			$("#001").css("background-color", "rgba(255, 255, 255, 0)");
			$("#002").css("background-color", "rgba(255, 255, 255, 0.4)");
			$("#003").css("background-color", "rgba(255, 255, 255, 0)");
			$("#004").css("background-color", "rgba(255, 255, 255, 0)");
			$("#Hair_01").css("visibility", "hidden");
			$("#Hair_02").css("visibility", "visible");
			$("#Hair_03").css("visibility", "hidden");
			$("#Hair_04").css("visibility", "hidden");
	
			$("#013").css("background-color", "rgba(255, 255, 255, 0)");
			$("#014").css("background-color", "rgba(255, 255, 255, 0)");
			$("#015").css("background-color", "rgba(255, 255, 255, 0)");
			$("#Hair_05").css("visibility", "hidden");
			$("#Hair_06").css("visibility", "hidden");
			$("#Hair_07").css("visibility", "hidden");
			});
	
			$("#003").click(function(){
				avatarhair+=1;
			
			$("#001").css("background-color", "rgba(255, 255, 255, 0)");
			$("#002").css("background-color", "rgba(255, 255, 255, 0)");
			$("#003").css("background-color", "rgba(255, 255, 255, 0.4)");
			$("#004").css("background-color", "rgba(255, 255, 255, 0)");
			$("#Hair_01").css("visibility", "hidden");
			$("#Hair_02").css("visibility", "hidden");
			$("#Hair_03").css("visibility", "visible");
			$("#Hair_04").css("visibility", "hidden");
	
			$("#013").css("background-color", "rgba(255, 255, 255, 0)");
			$("#014").css("background-color", "rgba(255, 255, 255, 0)");
			$("#015").css("background-color", "rgba(255, 255, 255, 0)");
			$("#Hair_05").css("visibility", "hidden");
			$("#Hair_06").css("visibility", "hidden");
			$("#Hair_07").css("visibility", "hidden");
			});
	
			$("#004").click(function(){
				avatarhair+=1;
				
			$("#001").css("background-color", "rgba(255, 255, 255, 0)");
			$("#002").css("background-color", "rgba(255, 255, 255, 0)");
			$("#003").css("background-color", "rgba(255, 255, 255, 0)");
			$("#004").css("background-color", "rgba(255, 255, 255, 0.4)");
			$("#Hair_01").css("visibility", "hidden");
			$("#Hair_02").css("visibility", "hidden");
			$("#Hair_03").css("visibility", "hidden");
			$("#Hair_04").css("visibility", "visible");
	
			$("#013").css("background-color", "rgba(255, 255, 255, 0)");
			$("#014").css("background-color", "rgba(255, 255, 255, 0)");
			$("#015").css("background-color", "rgba(255, 255, 255, 0)");
			$("#Hair_05").css("visibility", "hidden");
			$("#Hair_06").css("visibility", "hidden");
			$("#Hair_07").css("visibility", "hidden");
	
			});
	
		$("#013").click(function(){
			avatarhair +=1;
		 
				$("#001").css("background-color", "rgba(255, 255, 255, 0)");
				$("#002").css("background-color", "rgba(255, 255, 255, 0)");
				$("#003").css("background-color", "rgba(255, 255, 255, 0)");
				$("#004").css("background-color", "rgba(255, 255, 255, 0)");
				$("#Hair_01").css("visibility", "hidden");
				$("#Hair_02").css("visibility", "hidden");
				$("#Hair_03").css("visibility", "hidden");
				$("#Hair_04").css("visibility", "hidden");
	
				$("#013").css("background-color", "rgba(255, 255, 255, 0.4)");
				$("#014").css("background-color", "rgba(255, 255, 255, 0)");
				$("#015").css("background-color", "rgba(255, 255, 255, 0)");
				$("#Hair_05").css("visibility", "visible");
				$("#Hair_06").css("visibility", "hidden");
				$("#Hair_07").css("visibility", "hidden");
				});
	
		$("#014").click(function(){
			avatarhair +=1;
				 $("#001").css("background-color", "rgba(255, 255, 255, 0)");
				$("#002").css("background-color", "rgba(255, 255, 255, 0)");
				$("#003").css("background-color", "rgba(255, 255, 255, 0)");
				$("#004").css("background-color", "rgba(255, 255, 255, 0)");
				$("#Hair_01").css("visibility", "hidden");
				$("#Hair_02").css("visibility", "hidden");
				$("#Hair_03").css("visibility", "hidden");
				$("#Hair_04").css("visibility", "hidden");
	
				 $("#013").css("background-color", "rgba(255, 255, 255, 0)");
				$("#014").css("background-color", "rgba(255, 255, 255, 0.4)");
				$("#015").css("background-color", "rgba(255, 255, 255, 0)");
				$("#Hair_05").css("visibility", "hidden");
				$("#Hair_06").css("visibility", "visible");
				$("#Hair_07").css("visibility", "hidden");
				});
	
		$("#015").click(function(){
			avatarhair +=1;
				 $("#001").css("background-color", "rgba(255, 255, 255, 0)");
				$("#002").css("background-color", "rgba(255, 255, 255, 0)");
				$("#003").css("background-color", "rgba(255, 255, 255, 0)");
				$("#004").css("background-color", "rgba(255, 255, 255, 0)");
				$("#Hair_01").css("visibility", "hidden");
				$("#Hair_02").css("visibility", "hidden");
				$("#Hair_03").css("visibility", "hidden");
				$("#Hair_04").css("visibility", "hidden");
	
				$("#013").css("background-color", "rgba(255, 255, 255, 0)");
				$("#014").css("background-color", "rgba(255, 255, 255, 0)");
				$("#015").css("background-color", "rgba(255, 255, 255, 0.4)");
				$("#Hair_05").css("visibility", "hidden");
				$("#Hair_06").css("visibility", "hidden");
				$("#Hair_07").css("visibility", "visible");
					});
				//Create EDIT BUTTON at the bottom of ID card that can be pressed to show the form again and hide the other text???
	
			$("#005").click(function(){
					avatareye +=1;
	 
			$("#005").css("background-color", "rgba(255, 255, 255, 0.4)");
			$("#006").css("background-color", "rgba(255, 255, 255, 0)");
			$("#007").css("background-color", "rgba(255, 255, 255, 0)");
			$("#008").css("background-color", "rgba(255, 255, 255, 0)");
			$("#016").css("background-color", "rgba(255, 255, 255, 0)");
	
			$("#Eye_05").css("visibility", "visible");
			$("#Eye_06").css("visibility", "hidden");
			$("#Eye_07").css("visibility", "hidden");
			$("#Eye_08").css("visibility", "hidden");
			$("#Eye_09").css("visibility", "hidden");
			});
	
			$("#006").click(function(){
		 
			 avatareye +=1;
	
			$("#005").css("background-color", "rgba(255, 255, 255, 0)");
			$("#006").css("background-color", "rgba(255, 255, 255, 0.4)");
			$("#007").css("background-color", "rgba(255, 255, 255, 0)");
			$("#008").css("background-color", "rgba(255, 255, 255, 0)");
			$("#016").css("background-color", "rgba(255, 255, 255, 0)");
	
			$("#Eye_05").css("visibility", "hidden");
			$("#Eye_06").css("visibility", "visible");
			$("#Eye_07").css("visibility", "hidden");
			$("#Eye_08").css("visibility", "hidden");
			$("#Eye_09").css("visibility", "hidden");
			});
	
		 $("#007").click(function(){
	
				 avatareye +=1;
	 
			$("#005").css("background-color", "rgba(255, 255, 255, 0)");
			$("#006").css("background-color", "rgba(255, 255, 255, 0)");
			$("#007").css("background-color", "rgba(255, 255, 255, 0.4)");
			$("#008").css("background-color", "rgba(255, 255, 255, 0)");
			$("#016").css("background-color", "rgba(255, 255, 255, 0)");
	
			$("#Eye_05").css("visibility", "hidden");
			$("#Eye_06").css("visibility", "hidden");
			$("#Eye_07").css("visibility", "visible");
			$("#Eye_08").css("visibility", "hidden");
			$("#Eye_09").css("visibility", "hidden");
			});
	
			$("#008").click(function(){
			 
			 avatareye +=1;
			$("#005").css("background-color", "rgba(255, 255, 255, 0)");
			$("#006").css("background-color", "rgba(255, 255, 255, 0)");
			$("#007").css("background-color", "rgba(255, 255, 255, 0)");
			$("#008").css("background-color", "rgba(255, 255, 255, 0.4)");
			$("#016").css("background-color", "rgba(255, 255, 255, 0)");
			$("#Eye_05").css("visibility", "hidden");
			$("#Eye_06").css("visibility", "hidden");
			$("#Eye_07").css("visibility", "hidden");
			$("#Eye_08").css("visibility", "visible");
			$("#Eye_09").css("visibility", "hidden");
			});
	
				$("#016").click(function(){
	
					avatareye +=1;
	 
			$("#005").css("background-color", "rgba(255, 255, 255, 0)");
			$("#006").css("background-color", "rgba(255, 255, 255, 0)");
			$("#007").css("background-color", "rgba(255, 255, 255, 0)");
			$("#008").css("background-color", "rgba(255, 255, 255, 0)");
			$("#016").css("background-color", "rgba(255, 255, 255, 0.4)");
			$("#Eye_05").css("visibility", "hidden");
			$("#Eye_06").css("visibility", "hidden");
			$("#Eye_07").css("visibility", "hidden");
			$("#Eye_08").css("visibility", "hidden");
			$("#Eye_09").css("visibility", "visible");
			});
	
			//BADGE SADFJSDFKLJSDFJASDFLASDK
	
			$("#009").click(function(){
	
				avatarbadge +=1;
	 
			$("#009").css("background-color", "rgba(255, 255, 255, 0.4)");
			$("#010").css("background-color", "rgba(255, 255, 255, 0)");
			$("#011").css("background-color", "rgba(255, 255, 255, 0)");
			$("#012").css("background-color", "rgba(255, 255, 255, 0)");
			$("#Badge_09").css("visibility", "visible");
			$("#Badge_10").css("visibility", "hidden");
			$("#Badge_11").css("visibility", "hidden");
			$("#Badge_12").css("visibility", "hidden");
			});
	
	
		$("#010").click(function(){
				 
				 avatarbadge +=1;
	
				$("#009").css("background-color", "rgba(255, 255, 255, 0)");
				$("#010").css("background-color", "rgba(255, 255, 255, 0.4)");
				$("#011").css("background-color", "rgba(255, 255, 255, 0)");
				$("#012").css("background-color", "rgba(255, 255, 255, 0)");
				$("#Badge_09").css("visibility", "hidden");
				$("#Badge_10").css("visibility", "visible");
				$("#Badge_11").css("visibility", "hidden");
				$("#Badge_12").css("visibility", "hidden");
				});
	
		$("#011").click(function(){
		 
				 avatarbadge +=1;
	
				$("#009").css("background-color", "rgba(255, 255, 255, 0)");
				$("#010").css("background-color", "rgba(255, 255, 255, 0)");
				$("#011").css("background-color", "rgba(255, 255, 255, 0.4)");
				$("#012").css("background-color", "rgba(255, 255, 255, 0)");
				$("#Badge_09").css("visibility", "hidden");
				$("#Badge_10").css("visibility", "hidden");
				$("#Badge_11").css("visibility", "visible");
				$("#Badge_12").css("visibility", "hidden");
				});
		
		$("#012").click(function(){
		 
				 avatarbadge +=1 ;
				$("#009").css("background-color", "rgba(255, 255, 255, 0)");
				$("#010").css("background-color", "rgba(255, 255, 255, 0)");
				$("#011").css("background-color", "rgba(255, 255, 255, 0)");
				$("#012").css("background-color", "rgba(255, 255, 255, 0.4)");
				$("#Badge_09").css("visibility", "visible");
				$("#Badge_10").css("visibility", "hidden");
				$("#Badge_11").css("visibility", "hidden");
				$("#Badge_12").css("visibility", "visible");
				});
	
	//OUTSIDE OF ANY FUNCTION OTHER THAN MAIN, TO CONTROL VISIBILITY OF SUBMIT AVATAR (#saveavatar)
	
			$(".container-outer").click(function(){
			if ((avatarhair > 0) && (avatareye > 0) && (avatarbadge > 0)) {
			//if ((avatarhair > 0) && (avatareye > 0) && (avatarbadge > 0) && ($("form").css("visibility") === "hidden")){
			//if (avatarhair > 0 ){
				$("#saveavatar").css("visibility", "visible");
				//$("#saveavatar").fadeIn("slow",);
				//alert("Visible");
				//$("#saveavatar").animate({width: "200px"}, 400);
				$("#saveavatar").animate({width: "60px"}, 900);		
	
			}
			else{
				$("#saveavatar").css("visibility", "hidden");
			}
			});
	
	
	
	//CHANGE FOR DETECTING IF BOTH SAVE BUTTONS HAVE BEEN DETECTD...
				$("#saveavatar").click(function(){
	
					//move avatar created
				$("#Astronaut-Blank").animate({left: "85%"},900);
				//including attributes
				$("#Hair_01").animate({left: "80%"},900);
				$("#Hair_02").animate({left: "85%"},900);
				$("#Hair_03").animate({left: "93%"},900);
				$("#Hair_04").animate({left: "90%"},900);
				$("#Hair_05").animate({left: "90%"},900);
				$("#Hair_06").animate({left: "47%"},900);
				$("#Hair_07").animate({left: "70%"},900);
				$("#Eye_05").animate({left: "107%"},900);
				$("#Eye_06").animate({left: "110%"},900);
				$("#Eye_07").animate({left: "110%"},900);
				$("#Eye_08").animate({left: "103%"},900);
				$("#Eye_09").animate({left: "105%"},900);
				$("#Badge_09").animate({left: "95%"},900);
				$("#Badge_10").animate({left: "95%"},900);
				$("#Badge_11").animate({left: "95%"},900);
				$("#Badge_12").animate({left: "95%"},900);
	
				//hideavatarcreater
				$(".container-outer").css("visibility", "hidden");
				$(".buildavatar").css("visibility", "hidden");
				$("#saveavatar").css("visibility", "hidden");
	
				$("#saveavatar").css("visibility", "hidden");
				//enlargen and move tarjeta
				$("#tarjeta").animate({width: "50%"},400);
				$("#tarjeta").animate({left: "27%"},400);
				$("#tarjeta").animate({top: "318px"},400);
				//edit css of tarjeta
				$("#tarjeta").css("height", "50%");
				$("input").css("padding", "10px 10px 10px");
				$("input, select").css("margin" , "15px 5% 15px 5%");
				$("button").css("margin" , "2% 5% 0 5%");
				$("button").removeClass("col-xs-5");
				$("button").addClass("col-xs-3");
				//specifically the printed statements once form is filled out
				$("#AvatarProfBadge").animate({width: "50%"},400);
				$("#AvatarProfBadge").animate({left: "28.5%"},400);
				$("#AvatarProfBadge").animate({top: "370px"},400);
				$("#AvatarProfBadge h3").css("font-size", "30px");
				$("#AvatarProfBadge h3").css("margin", "20px 0 0 40px");
				//BLASTOFF
				blastoff +=1;
	
				
	
			});
	
				$("body").mousemove(function(){
					if (blastoff > 1){
						$(".endanimation").css("visibility", "visible");
					setTimeout( function(){ $(".endanimation").animate({top: "20px"}, 4000)}, 1200);
				
	
					}
				})
	
	
		});