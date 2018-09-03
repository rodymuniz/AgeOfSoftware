$(function(){
	$('.memberPhotos').hover(function(){		
		$('#toolTip').css("display", "block");
	
	},function(){
		$('#toolTip').css("display", "none");
});

		$(document).mousemove(function(event){
			var cX = event.pageX+15;
			var cY = event.pageY+15;
		$('#toolTip').css("left", cX+"px").css("top", cY+"px");
			
		});
});