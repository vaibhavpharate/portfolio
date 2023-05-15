// JavaScript Document
$(document).ready(function(){
	$('.topone').hide();
	$('.onetomato').hover(function(){
		$(this).find('.img_back').hide();
		$(this).find('.Rates').show(100).animate({height:'100%'},100);
		
	},function(){$(this).find('.Rates').hide(0).animate({height:'0%'},0);
       $(this).find('.img_back').show();      
});
$(window).on("load",function(){
	$('.loaderscreen').fadeOut('slow');
});
});
if ($(window).width()<768){

	$('.gal4').slideUp();
	$('.gal2').slideUp();
	$('.shmore').click(function(){
		$('.gal4').slideToggle(100);
	});
	$('.shmore2').click(function(){
		$('.gal2').slideToggle(100);
	});
};
if($(window).width()>960){
		$('.top_container').hover(function(){
		$('.topone').show(200);

	},function(){$('.topone').hide(3)});
}
if($(window).width()>768)
{
var eventIndex =1;
slideEvent(eventIndex);
function currentEvent (n)
{
	slideEvent(eventIndex = n)
}
function slideEvent (n)
{
	var events = document.getElementsByClassName("title_event");
	var imgs = document.getElementsByClassName("img_events");
	var dot =document.getElementsByClassName("dot");
	var date =document.getElementsByClassName("date");
	
     for(i=0; i<events.length;i++)
     {
     	events[i].style.display ="none";
     }
     for(i=0; i<imgs.length;i++)
     {
     	imgs[i].style.display ="none";
     }
     for(i=0;i<events.length;i++)
     {
     	dot[i].classList.remove("active");
     }
     for(i=0;i<events.length;i++)
     {
     	date[i].style.display ="none";
     }
    events[eventIndex-1].style.display = "block";
    imgs[eventIndex-1].style.display = "block";
       date[eventIndex-1].style.display = "block";
     dot[eventIndex-1].classList += " active"
}

};
if($(window).width()<768)
{
var eventIndex =0;
slideEvent(eventIndex);
function slideEvent(n)
{
var events = document.getElementsByClassName("title_event");
	var imgs = document.getElementsByClassName("img_events");
	
	var date =document.getElementsByClassName("date");
	for(i=0; i<events.length;i++)
     {
     	events[i].style.display ="none";
     	events[i].classList.remove("faze");

     }
     for(i=0; i<imgs.length;i++)
     {
     	imgs[i].style.display ="none";
     }
   
     for(i=0;i<events.length;i++)
     {
     	date[i].style.display ="none";
     }
eventIndex++;
if(eventIndex>events.length){eventIndex=1;};
events[eventIndex-1].style.display = "block";

imgs[eventIndex-1].style.display = "block";
date[eventIndex-1].style.display = "block";
setTimeout(slideEvent,2000);
}
};
if($(window).width()<768)
{
var nameIndex=0;
slideNames(nameIndex);
function slideNames(n)
{
	var nme = document.getElementsByClassName('names');
	var said = document.getElementsByClassName('saying');
	for(i=0;i< nme.length;i++ ){
		nme[i].style.display = "none";
	    said[i].style.display ="none";  
	} 
	nameIndex++;
	 if(nameIndex>nme.length){nameIndex=1};
	 nme[nameIndex-1].style.display="block";
	 said[nameIndex-1].style.display ="block";
	 setTimeout(slideNames,3000);

}
};
 if($(window).width()>768)
 {
 	var back =document.getElementsByClassName("backteam");
 	back[0].classList.remove('ovr');
 	var nameIndex=1;
slideNames(nameIndex);
function currentNames(n)
{
	slideNames(nameIndex = n);
}
function slideNames(n)
{
	var nme=document.getElementsByClassName('names');
	var said =document.getElementsByClassName('saying');
	var dot = document.getElementsByClassName('dot1');
	for(i=0;i<nme.length;i++)
	{
		nme[i].style.display ="none";
		said[i].style.display ="none";
		dot[i].classList.remove('active');
	}
	nme[nameIndex-1].style.display ="block";
	said[nameIndex-1].style.display ="block";
	dot[nameIndex-1].classList +=" active";

}

 }