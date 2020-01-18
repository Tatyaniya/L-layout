$( function() {

    $('.call-btn,.offer__btn').click( function () {
        $('#Modal').arcticmodal();
    });

    $('#humburger-header').click(function(){
        console.log('1');
        $( ".navigation__nav" ).toggleClass("navigation__nav-open");
    });

    $('#humburger-footer').click(function(){
        $( ".footer__nav" ).toggleClass("footer__nav-open");
    });

    if ($(window).width() > 960)
    { 
		// Кешируем объект окна
			$window = $(window);
		                
		   $('.header').each(function(){
		     var $bgobj = $(this); // Назначаем объект
		                    
		      $(window).scroll(function() {
		                    
				// Прокручиваем фон со скоростью var.
				// Значение yPos отрицательное, так как прокручивание осуществляется вверх!
				var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
				
				// Размещаем все вместе в конечной точке
				var coords = '50% '+ yPos + 'px';

				// Смещаем фон
				$bgobj.css({ backgroundPosition: coords });
				
			}); 

		 });	
    }

    
    
});