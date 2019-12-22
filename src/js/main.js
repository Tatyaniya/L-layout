$( function() {

    $('.call-btn,.offer__btn').click( function () {
        $('#Modal').arcticmodal();
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