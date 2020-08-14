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

    // animation
    $(window).scroll(function() {
        $('.aboutImages, .consultation__form--index, .consultation__form--about, .consultation__form--service').each(function(){
            let imagePos = $(this).offset().top;

            let topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+500) {
                $(this).addClass('animate__fadeInRight');
            }
        });
        $('.aboutContent, .consultation__title, .consultation__contacts--index, .consultation__contacts--about, .consultation__contacts--service').each(function(){
            let imagePos = $(this).offset().top;

            let topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+500) {
                $(this).addClass('animate__fadeInLeft');
            }
        });

          $('.services__container, .why__container, .weare__container, .meet__container, .benefits__container').each(function(){
            let imagePos = $(this).offset().top;

            let topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+500) {
                $(this).addClass('animate__fadeInUp');
            }
        });
    });

    
    // click on the button "Read more" on the page "Home"
    $('.aboutContent__link').click(function(){
        $( ".aboutContent__desc" ).toggleClass("full-height");
        if($(".aboutContent__desc").hasClass("full-height")) {
            $(".aboutContent__more").text('Hide');
        } else {
            $(".aboutContent__more").text('Read more');
        }
    });

    // click on the button "Read more" on the page "About company"
    $('.aboutCompany__link').click(function(){
        $( ".aboutCompany__desc" ).toggleClass("full-height");
        if($(".aboutCompany__desc").hasClass("full-height")) {
            $(".aboutCompany__more").text('Hide');
        } else {
            $(".aboutCompany__more").text('Read more');
        }
    });    
});
