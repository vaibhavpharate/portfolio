$('.menubutton').click(function(){
	$('nav').toggleClass('blocknav');
});
$(window).on("load",function(){
  $('.loaderscreen').fadeOut('slow');
});

$(window).scroll(function() {
 var a =0;
  var oTop = $('.counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
           
          }

        });
    });
    a = 1;
  }

});
function isScrolledIntoViewa(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top  + 150;
    var elemBottom = elemTop + $(elem).height();

    return ((elemTop <= docViewBottom) && (elemBottom >= docViewTop));
}

// $(window).scroll(function() {
// 	var inViewa = true;
//     if (isScrolledIntoViewa('#Skills')) {
//         if (inViewa) { return; }
//         inViewa = true;
//         show_bar();
//     } else {
//         inViewa = false;  
//     }
// });
// function show_bar()
// {   var i = 0;
//     var progressBar = document.getElementById("bar");
//     function countNumbers(){
//         if(i < 90){
//             i = i + 1;
//             progressBar.value = i;
       
            
        
//         setTimeout("countNumbers()", 500);
//     }
//     countNumbers();
	
// }
// }