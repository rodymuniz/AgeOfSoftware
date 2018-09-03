$(function(){
	$('#infoButton').hover(function(){
	$('#infoBox').animate({'width':'600px'},1000);
	},
	function(){
	$('#infoBox').animate({'width':'60px'},1000);
	});
});

$(function() {
	$('#infoButton').hover(function(){
	$('#infoBox h1, #infoBox p').fadeIn("slow");
	},
	function() {
	$('#infoBox h1, #infoBox p').fadeOut("slow");
	});
});