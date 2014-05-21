var menu = $('.menu');
var barra_busqueda = $('.search_bar');
var bar = $('#bar');
var icono = $('.icon-search');

barra_busqueda.focusin(function(){
	barra_busqueda.css('width', '20%');
	menu.css('width', '80%');
	icono.css('color', '#000');
	bar.css('color', '#000');
});

barra_busqueda.focusout(function(){
	barra_busqueda.css('width', '15%');
	menu.css('width', '85%');
	icono.css('color', '#fff');
	bar.css('color', '#fff');
});