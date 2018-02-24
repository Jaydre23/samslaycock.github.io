

$(document).ready(function() {
	$('.owl-carousel').owlCarousel({
		
		navContainer: '#controlNav',
		dotsContainer: '#controlDots',	
	   loop: false,
	   items: 1,
	   smartSpeed: 2000,
	   mouseDrag: false,
	   touchDrag: true,
	   nav: true,
	   navText: ["←","→"],
});
var owl = $('.owl-carousel');

owl.on('mousewheel', '.owl-stage', function(e) {
   if (e.deltaY > 0) {
      owl.trigger('next.owl');
   } else {
      owl.trigger('prev.owl');
   }
   e.preventDefault();
});	
  });
  



/* Set the width of the navigation pop-out to 15% */
function navToggle(x) {
	x.classList.toggle("change");
	if (document.getElementById("sidenav").style.width == "15%"){
		document.getElementById("sidenav").style.width = "0";
document.getElementById("sidenav").style.opacity = "0";	
	document.getElementById("sidenav").style.visibility = "hidden";	
	}else{
		document.getElementById("sidenav").style.width = "15%";
	document.getElementById("sidenav").style.opacity = "1";	
document.getElementById("sidenav").style.visibility = "visible";		
	} 
}





