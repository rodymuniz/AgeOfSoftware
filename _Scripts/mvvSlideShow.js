$(function(){
	$('#mvvContent').hover(function(){
		$('#mvvButtons').fadeIn();
	}, function(){
		$('#mvvButtons').fadeOut();
}); 	

	//Botão avançar
$('.mvvNext').click(function(e){
	e.preventDefault(); 
			
	 var LiWidth = $('#mvvContent li').outerWidth();
	
	$('#mvvContent ul').width('99999%').animate({left:-LiWidth}, function(){ 
		$('#mvvContent li').last().after($('#mvvContent li').first());
		$(this).css({'left':'0', 'width':'auto'});
	});	
});
	
	//Botão voltar
$('.mvvPrev').click(function(e){
		e.preventDefault();
		
		var Liwidth = $('#mvvContent li').outerWidth();
		
		$('#mvvContent li').first().before($('#mvvContent li').last().css({'margin-left':-Liwidth}));
		$('#mvvContent ul').css({'width':'99999%'}).animate({left:Liwidth}, 
		function(){
			$('#mvvContent li').first().css({'margin-left':'0'});
			$(this).css({'left':'0', 'margin':'auto'});
		});
	});
});