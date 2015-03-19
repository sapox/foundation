$(document).ready(function(){

});
function slid1(){
	$("img.icono.slid").removeClass("slide1");
	$("img.icono.slid").addClass("slide2");
	$(".slide2").css({"background-position":"1000px"});
	$(".slide2").animate({"background-position":"0px"});
	setTimeout("slid2()",5000);
}
setTimeout("slid1()",5000);
	function slid2(){
 	$("img.icono.slid").removeClass("slide2");
 	$("img.icono.slid").addClass("slide3");
 	$(".slide3").css({"background-position":"1000px"});
 	$(".slide3").animate({"background-position":"0px"});
 	setTimeout("slid3()",5000);
}
function slid3(){
 	$("img.icono.slid").removeClass("slide3");
 	$("img.icono.slid").addClass("slide4");
 	$(".slide4").css({"background-position":"1000px"});
 	$(".slide4").animate({"background-position":"0px"});
 	setTimeout("slid4()",5000);
	}
function slid4(){
 	$("img.icono.slid").removeClass("slide4");
 	$("img.icono.slid").addClass("slide1");
 	$(".slide1").css({"background-position":"1000px"});
 	$(".slide1").animate({"background-position":"0px"});
 	setTimeout("slid1()",5000);
}