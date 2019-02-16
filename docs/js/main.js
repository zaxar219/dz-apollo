
$(document).ready(function(){

	// Скрипт для показа и скрытия выпадающего меню на смартфонах
	//Создали переменные
	var pull = $("#navigation-toggle");
	var menu = $(".navigation ul");
	
	// Вызов слайдера owl-crousel
	$("#top-slider").owlCarousel({
		singleItem: true,
		navigation: true,
		theme: "top-slider-theme",
		navigationText: ["",""],
		slideSpeed: 500
	});
	
	//Описание событие при нажатии на ссылку
	$(pull).on("click", function(e){
		//Отменяем стандартное повидение ссылки в браузере
		e.preventDefault();
		//Открываем/Скрываем меню

		menu.slideToggle();
		
		//Добовляем модификатор --activ
		$(this).toggleClass('navigation__toggle-button--active');
	});

	
	$(window).resize(function(){
	    var w = $(window).width();
	    if(w > 992) {
	        menu.removeAttr('style');
	        pull.removeClass('navigation__toggle-button--active');
	    } else {

	    }
	});

	$(window).resize(function(){
		var w = $(window).width();
		if(w > 720 && nav.is(':hidden')) {
			nav.removeAttr('style');
		}
	});
	
	
//	//Scroll
//	$("body").niceScroll({
//		cursorcolor: "#ff0000",
//		cursorwidth: "16px"
//	});

	
	$('nav.navigation a').on("click", function(){
		fnstart();
	});
	
	
	function fnstart(){	
		if ( $("#navigation-toggle").hasClass("navigation__toggle-button--active")  ) {
   			pull.toggleClass('navigation__toggle-button--active');
			menu.slideToggle();
		}
	};

	
//	$(window).resize(function(){
//	    var w = $(window).width();
//	    if(w > 992) {
//	        menu.removeAttr('style');
//	        pull.removeClass('navigation__toggle-button--active');
//	    } else {
//
//		};
//	});
	
	//Плавная прокрутка
	$("nav a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id").mPageScroll2id({
	    highlightSelector:"nav a"
	});
	});