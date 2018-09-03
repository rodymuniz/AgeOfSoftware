$(function(){
	$("#back").click(function (e){
		e.preventDefault();
		goTo($(this), 1000);
	});
});