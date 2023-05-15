
$(document).ready(function(){
   $("a").on('click', function(event) {

     if (this.hash !== "") {
     event.preventDefault();
      var hash = this.hash;
       var targret = $(hash).offset().top ;
     $('html, body').animate({
        scrollTop:targret
      }, 800, function(){

      window.location.hash = hash;
      });
    } 
  });
});
$(window).on("load",function(){
	$('.loaderscreen').fadeOut('slow');
});

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

$(document).ready(function(){if($(window).width()<768){
	$('.nav-link').click(function(){
		$("#mymenu").removeClass('show');
		$('span.cross').removeClass('close');
	})
}});

$(document).ready(function($) {
  function animateElements() {
    $('.progressbar').each(function() {
      var elementPos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      var percent = $(this).find('.circle').attr('data-percent');
      var percentage = parseInt(percent, 10) / parseInt(100, 10);
      var animate = $(this).data('animate');
      if (elementPos < topOfWindow + $(window).height() - 50 && !animate) {
        $(this).data('animate', true);
        $(this).find('.circle').circleProgress({
          startAngle: -Math.PI / 2,
          value: percent / 100,
          thickness: 10,
          fill: {
            color: '#998675'
          }
        }).on('circle-animation-progress', function(event, progress, stepValue) {
          $(this).find('div').text((stepValue * 100).toFixed(1) + "%");
        }).stop();
      }
    });
  }
  animateElements();
  $(window).scroll(animateElements);
});

       var wide = $(window).width();

	
		$(window).scroll(function(){
			let position = $(window).scrollTop();
			if(wide >=768)
			{
			if(position>200)
				{
					$('.nav_main').addClass('nav_backdiff');
				}
			else
				{
					$('.nav_main').removeClass('nav_backdiff');
				}
				var ht=$(window).innerHeight;
				$('.main_hero').height= ht;
			}
			else{
							if(position>50)
				{
					$('.nav_main').addClass('nav_backdiff');
				}
			else
				{
					$('.nav_main').removeClass('nav_backdiff');
				}
				
			}
		});
		var $icon = $('span.cross');
  $icon.on('click',function(e){
    $(this).toggleClass('close')
  });
$('.project-item').click(function(){
	$('.project-item').removeClass('activebutton');
	$(this).addClass('activebutton');
});
$('.project-item').click(function(){
	let fltr = $(this).attr('data-filter');
	if(fltr=="All")
		{
			$('.filter').fadeIn(300);
		}
	else
		{
			$('.filter').not('.'+fltr).fadeOut(300);
			$('.filter').filter('.'+fltr).fadeIn(300);
		}
});
var cardheight =$('.setheight').height();
$('.cardfind').css({
	height: cardheight
});
$('.cardfind').fadeOut(0);
$('.maincard').find('.cardfind .btnsomecard').fadeOut('0');
$('.maincard').hover(function(){$(this).find('.cardfind').fadeIn(200);$('.maincard').find('.cardfind .btnsomecard').fadeIn('500');},function(){$(this).find('.cardfind').fadeOut(0);$('.maincard').find('.cardfind .btnsomecard').fadeOut('0');});
// $(document).on({
//     "contextmenu": function(e) {
//         console.log("ctx menu button:", e.which); 

//        e.preventDefault();
//     },
//     "mousedown": function(e) { 
//         console.log("normal mouse down:", e.which); 
//     },
//     "mouseup": function(e) { 
//         console.log("normal mouse up:", e.which); 
//     }
// });
// $(document).keydown(function (event) {
//     if (event.keyCode == 123) { 
//         return false;
//     } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) { // Prevent Ctrl+Shift+I        
//         return false;
//     }
// });
		
		
	