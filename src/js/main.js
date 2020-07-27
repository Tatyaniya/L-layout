$( function() {

    $('.call-btn,.offer__btn, .form__submit').click( function () {
        $('#Modal').arcticmodal();
    });

    $('#humburger-header').click(function(){
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

    $(window).scroll(function() {
        $('.aboutImages, .consultation__form--index, .consultation__form--about, .consultation__form--service').each(function(){
            let imagePos = $(this).offset().top;

            let topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+500) {
                console.log('1');
                $(this).addClass('animate__fadeInRight');
            }
        });
        $('.aboutContent, .consultation__title, .consultation__contacts--index, .consultation__contacts--about, .consultation__contacts--service').each(function(){
            let imagePos = $(this).offset().top;

            let topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+500) {
                console.log('2');
                $(this).addClass('animate__fadeInLeft');
            }
        });

          $('.services__container, .why__container, .weare__container, .meet__container, .benefits__container').each(function(){
            let imagePos = $(this).offset().top;

            let topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+500) {
                console.log($(this));
                $(this).addClass('animate__fadeInUp');
            }
        });
    });

    
    
});