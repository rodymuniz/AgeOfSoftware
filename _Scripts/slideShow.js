//Mostra os botões de controle.3
$(function(){
	
	var liwidth = $('#galery li').outerWidth()
		speed = 5000,
		rotate = setInterval(auto, speed);
	
	$('#galery').hover(function(){
		$('#buttons').fadeIn();
	//	clearInterval(rotate);
	}, function(){
		$('#buttons').fadeOut();
		//setInterval(auto, speed);
}); 	

	//Botão avançar 
$('.next').click(function(e){
	e.preventDefault(); //Cancela a função padrão da tag <a>. Assim, quando o botão for clicado, a page não mudará. 
			
	 var liwidth = $('#galery li').outerWidth(); //Pega a width no seletor section#galery li. Caso essa width mude, a variável pegará o novo valor.
	
	$('#galery ul').width('99999%').animate({left:-liwidth}, function(){ //Aumenta a width da ul, deixando as img's lado a lado, e as move para a esquerda. 
		$('#galery li').last().after($('#galery li').first()); //Troca a ordem das img's.
		$(this).css({'left':'0', 'width':'auto'});
	});	
});
	
	//Botão voltar
$('.prev').click(function(e){
		e.preventDefault();
		
		var liwidth = $('#galery li').outerWidth();
		
		$('#galery li').first().before($('#galery li').last().css({'margin-left':-liwidth}));
		$('#galery ul').css({'width':'99999%'}).animate({left:liwidth}, 
		function(){
			$('#galery li').first().css({'margin-left':'0'});
			$(this).css({'left':'0', 'margin':'auto'});
	});
});
		//Executa o slideshow automaticamente.
		function auto(){
			$('.next').click();
		}
});