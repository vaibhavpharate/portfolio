
$(window).on("load",function(){
  $('.loaderscreen').fadeOut('slow');
});

$(document).on({
    "contextmenu": function(e) {
        console.log("ctx menu button:", e.which); 

       e.preventDefault();
    },
    "mousedown": function(e) { 
        console.log("normal mouse down:", e.which); 
    },
    "mouseup": function(e) { 
        console.log("normal mouse up:", e.which); 
    }
});
// $(document).keydown(function (event) {
//     if (event.keyCode == 123) { 
//         return false;
//     } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) { // Prevent Ctrl+Shift+I        
//         return false;
//     }
// });

$('.sidebar').hover(function() {
  $('body').addClass('hoverpush')
},function(){$('body').removeClass('hoverpush')});
$('menubutton').click(function(){
  if ($('.body').hasClass('push')==true)
  {
    $('.menubutton').hide();
  }
  else {
    $(this).show();
  }
});


$(document).ready(function(){
if($(window).width()>768){	
		var inViewa = false;

function isScrolledIntoViewa(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top  + 150;
    var elemBottom = elemTop + $(elem).height();

    return ((elemTop <= docViewBottom) && (elemBottom >= docViewTop));
}

$(window).scroll(function() {
    if (isScrolledIntoViewa('#doughnutdesk')) {
        if (inViewa) { return; }
        inViewa = true;
        show_donut();
    } else {
        inViewa = false;  
    }
});

function show_donut()
{
	let mydoughnut = document.getElementById('doughnutdesk').getContext('2d');
        	let donut =new Chart(mydoughnut,{
        		type:'doughnut',
        		data:{labels:['EUROPE','AUSTRALIA','NORTH AMERICA','ASIA','AFRICA'],
        		datasets:[{
        			label:'population',
        			data:[18222, 8145, 10473,3797,16425],
        			backgroundColor:['#646566','#424446','#363738','#929394','#a5a5a5'],
        			borderWidth: 0,

        		}]},
        		options:{
        			responsive: true,
    maintainAspectRatio: false,
    animation:{duration:3000},
        			legend:{
        				display:false,
        				position:'bottom',
        			},
        			plugins:{
        				labels:[{
        					render:'label',
        					   arc: true,
        					position:'outside',
        					fontSize: 20,
        				},
        				{
        					render:'percentage',
        					fontColor:['#a5a5a5','#a5a5a5','#646566','#424446'],
        					fontSize: 20,
        				}]
        			},
        			elements:{
        				center: {
      text: 'Around globe',
      color: '#a5a5a5', 
      fontStyle: 'Helvetica',
      sidePadding: 15 
    }

        			}

        		},
        		 centerText: {
        display: true,
        text: "280"
    }
        	});
        	Chart.pluginService.register({
  beforeDraw: function (donut) {
    if (donut.config.options.elements.center) {
     
      var ctx = donut.chart.ctx;

     
      var centerConfig = donut.config.options.elements.center;
      var fontStyle = centerConfig.fontStyle || 'Arial';
      var txt = centerConfig.text;
      var color = centerConfig.color || '#000';
      var sidePadding = centerConfig.sidePadding || 20;
      var sidePaddingCalculated = (sidePadding/100) * (donut.innerRadius * 2)
      
      ctx.font = "30px " + fontStyle;

     
      var stringWidth = ctx.measureText(txt).width;
      var elementWidth = (donut.innerRadius * 2) - sidePaddingCalculated;

      var widthRatio = elementWidth / stringWidth;
      var newFontSize = Math.floor(30 * widthRatio);
      var elementHeight = (donut.innerRadius * 2);

     
      var fontSizeToUse = Math.min(newFontSize, elementHeight);

      
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      var centerX = ((donut.chartArea.left + donut.chartArea.right) / 2);
      var centerY = ((donut.chartArea.top + donut.chartArea.bottom) / 2);
      ctx.font = fontSizeToUse+"px " + fontStyle;
      ctx.fillStyle = color;

      
      ctx.fillText(txt, centerX, centerY);
    }
  }
})
}
}
/////////////////////////////Doughnut two////////////////////
else
{
	var inViewa = false;

function isScrolledIntoViewa(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top + 80;
    var elemBottom = elemTop + $(elem).height();

    return ((elemTop <= docViewBottom) && (elemBottom >= docViewTop));
}

$(window).scroll(function() {
    if (isScrolledIntoViewa('#doughnutmobile')) {
        if (inViewa) { return; }
        inViewa = true;
        show_donut();
    } else {
        inViewa = false;  
    }
});
function show_donut()
{
	let mydoughnut = document.getElementById('doughnutmobile').getContext('2d');
        	let donut =new Chart(mydoughnut,{
        		type:'doughnut',
        		data:{labels:['EUROPE','NORTH AMERICA','AUSTRALIA','ASIA','AFRICA'],
        		datasets:[{
        			label:'population',
        			data:[21222 , 10473,3797,2182,16425],
        			backgroundColor:['#646566','#424446','#929394','#363738','#a5a5a5'],
        			borderWidth: 0,

        		}]},
        		options:{
        			responsive: true,
    maintainAspectRatio: false,
    animation:{duration:3000},
        			legend:{
        				display:false,
        			        			},
        			        			plugins:{
        				labels:[
        				{
        					render:'percentage',
        					fontColor:['#a5a5a5','#a5a5a5','#424446','#646566','#424446'],
        					fontSize: 20,
        				}]
        			},
        			elements:{
        				center: {
      text: 'Around globe',
      color: '#a5a5a5', 
      fontStyle: 'Helvetica', 
      sidePadding: 15 
    }

        			}

        		},
        		 centerText: {
        display: true,
        text: "280"
    }
        	});
        	Chart.pluginService.register({
  beforeDraw: function (donut) {
    if (donut.config.options.elements.center) {
      //Get ctx from string
      var ctx = donut.chart.ctx;

      //Get options from the center object in options
      var centerConfig = donut.config.options.elements.center;
      var fontStyle = centerConfig.fontStyle || 'Arial';
      var txt = centerConfig.text;
      var color = centerConfig.color || '#000';
      var sidePadding = centerConfig.sidePadding || 20;
      var sidePaddingCalculated = (sidePadding/100) * (donut.innerRadius * 2)
      //Start with a base font of 30px
      ctx.font = "30px " + fontStyle;

      //Get the width of the string and also the width of the element minus 10 to give it 5px side padding
      var stringWidth = ctx.measureText(txt).width;
      var elementWidth = (donut.innerRadius * 2) - sidePaddingCalculated;

      // Find out how much the font can grow in width.
      var widthRatio = elementWidth / stringWidth;
      var newFontSize = Math.floor(30 * widthRatio);
      var elementHeight = (donut.innerRadius * 2);

      // Pick a new font size so it will not be larger than the height of label.
      var fontSizeToUse = Math.min(newFontSize, elementHeight);

      //Set font settings to draw it correctly.
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      var centerX = ((donut.chartArea.left + donut.chartArea.right) / 2);
      var centerY = ((donut.chartArea.top + donut.chartArea.bottom) / 2);
      ctx.font = fontSizeToUse+"px " + fontStyle;
      ctx.fillStyle = color;

      //Draw text in center
      ctx.fillText(txt, centerX, centerY);
    }
  }
})
}
}
/////////////////////////////////////////////////////////////
var inView = false;

function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top +250;
    var elemBottom = elemTop + $(elem).height();

    return ((elemTop <= docViewBottom) && (elemBottom >= docViewTop));
}

$(window).scroll(function() {
    if (isScrolledIntoView('#mychart')) {
        if (inView) { return; }
        inView = true;
        show_return();
    } else {
        inView = false;  
    }
});
	function show_return(){

			let chart= document.getElementById('mychart');
			let bar = new Chart(chart,{
				type:'bar',
				data:{labels:['Buy Home','Sell Home','Land Cell'],
			
				datasets:[{label:[{display:false}],
				data:[184219,154094,135489],
                backgroundColor:['#8a8a8a','#646566',' listsome'],
                 responsive:true,

			}]},
			maintainAspectRatio: false,
			responsive:true,
    options: {
    	 responsive: true,
    maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true,
                     display:false,
                   
                }
            }],
            xAxes: [{
                ticks: {
                   
                   
                   
                }
            }]
        },
        animation:{duration:4000},
         plugins:{labels:[
        				{
        					render:'value',
        					fontColor:'#a5a5a5',
        					fontSize: 15,
        				}]},
    },
   
});


		

}
if ($(window).width()<1000) {
  $('.smoothScroll').click(function(){
    $('body').removeClass('push');
  })
};
if($(window).width()>768)
{function show_return(){
			let chart= document.getElementById('mychart');
			let bar = new Chart(chart,{
				type:'bar',
				data:{labels:['Buy Home','Sell Home','Land Cell'],
				fontSize :'20',
				datasets:[{label:['Total Earned $'],
				data:[174219,154094,135489],
                backgroundColor:['#8a8a8a','#646566','#424446'],
                 responsive:true,

			}]},
			maintainAspectRatio: false,
			responsive:true,
    options: {
    	 responsive: true,
    maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true,
                     fontSize:20
                }
            }],
            xAxes: [{
                ticks: {
                    beginAtZero:true,
                    fontSize:20

                   
                }
            }]
        },
        animation:{duration:3000,
                   },
         plugins:{labels:[
        				{
        					render:'value',
        					fontColor:'#a5a5a5',
        					fontSize: 20,
        				}]},
    }
});


		
			function beforePrintHandler () {
    for (var chart in Chart.instances) {
        Chart.instances[chart].resize();
    }
}
}}

		
			var a = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
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
});



$(document).ready(function(){
// var responsive_trigger = function()
// {
// 	 Response.create({
//         mode: "markup",
//         prop: "width",
//         prefix: "r",
//         breakpoints: [0, 350, 750, 1000, 1200, 1400, 1600]
//     });

//     Response.create({
//         mode: "src",
//         prop: "width",
//         prefix: "src",
//         breakpoints: [0, 350, 750, 1000, 1200, 1400, 1600]
//     });
// };
    // responsive_trigger();
  var sidebar = function(){
  	
	$(document).on('tap.sidebar', '.mobileheader .menubutton', function(event) {

		$('body').toggleClass('push');

		
		 // event.preventDefault();
	});
    $(document).on('tap.sidebar'  , function() {
       $('body').removeClass('push');
    });
    $(document).on('tap.sidebar', '.sidebar,  .menubutton', function(event){
        if($('body').hasClass('push')){$('body').removeClass('push')};
        // event.stopPropagation();
    });
    $(document).on('mouseover.sidebar', '.sidebar a, .mobileheader', function(event) {

        $('body').addClass('hoverpush');
    });
    $(document).on('mouseleave.sidebar', '.sidebar, .mouseheader', function(event) {

        $('body').removeClass('hoverpush');
    });
};
sidebar();


// var initWaypoints = function(){


//     if( Response.band(1200) ){

//         var sectionName = '';
        

//         $('.section-intro h1, headergroup h2').waypoint(function() {
//             $(this).addClass('in-point');
//         }, { offset: '85%' });

    
//         $('section').waypoint(function(direction) {
//             sectionName = $(this).attr('id');
//             $('.mainMenu a[href="#'+ sectionName +'"]').toggleClass('selected', direction === 'down');
//         }, { offset: '70%' })
//         .waypoint(function(direction) {
//             sectionName = $(this).attr('id');
//             $('.mainMenu a[href="#'+ sectionName +'"]').toggleClass('selected', direction === 'up');
//         }, {
//             offset: function() { return -$(this).height()*0.8; }
//         });

//     } else {
//         $('.section-intro h1, headergroup h2, .section-seperator, .timeline li, .rounded-icon, .section-audience .container-template').addClass('in-point');
//     }
// };
// initWaypoints();
// var initSmoothScroll = function(){

    
//     var scrollOff = 0;
//     $(window).on('throttledresize', function(){
       
//         if(Response.band(0, 1199)){
//             scrollOff = $('.mobileheader').height();
//         } else {
//             scrollOff = 0;
//         }
//     }).trigger('throttledresize');

//     $(document).on('tap.smoothScroll', '.smoothScroll', function(event) {
//         var linkto = $(this).attr('href');
        
//         $('html, body').animate({
//             scrollTop: $(linkto).offset().top - scrollOff
//         }, 500);
        
//         event.preventDefault();
//     });
// };
// initSmoothScroll();

// var parallax = function(){

//     $.stellar({
//      horizontalOffset: 90,
//      responsive: true,
//     });
//     $(window).on('throttledresize.parallax', function(event){

//         if(! Response.band(1200) ){
//             $('.section-membership-section-seperator, .section-intro').addClass('dont-scroll');
//         } else {
//             $('.section-membership-section-seperator, .section-intro').removeClass('dont-scroll');
//         }

//     }).trigger('throttledresize');
// };
// parallax();
});
if($(window).width()<768)
{
$('.menubutton').unbind().click(function(){
$('body').toggleClass(' push')

});

};
$('.btnsome').mouseenter(function(){
	$('.btnsome').addClass('btnsome3')});
$('.btnsome').mouseleave(function(){
	$('.btnsome').removeClass('btnsome3')});
$('.btnsome').mousedown(function(){
	$('.btnsome').addClass('btnsome2')});
$('.btnsome').mouseup(function(){
	$('.btnsome').removeClass('btnsome2')});
