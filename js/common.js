//====== Owl-carousel ======//
$(document).ready(function(){
	$(".owl-carousel").owlCarousel({
  		items: 1,
  		singleItem: true,
  		nav: false
  	});


});
// Подключение скрипта плавного скрола к якорю
$(document).ready(function(){
    $("#navbar1").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});




    
// window.onscroll = function showHeader() {
// 	var header = document.querySelector('.header-top');
// 	if(window.pageYOffset > 200) {
// 		header-top.classList.add('.header-fix');
// 	} else {
// 		header-top.classList.remove('.header-fix');
// 	}
// }


