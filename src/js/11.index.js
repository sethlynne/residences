// Navbar
var mainNav = document.getElementById("nav");

window.onscroll = function() {
  "use strict";
  if (document.body.scrollTop >= 30 || document.documentElement.scrollTop >= 30) {
    mainNav.classList.add("nav-scroll");
  } else {
    mainNav.classList.remove("nav-scroll");
  }
};



// Smooth scroll
(function() {
	scrollTo();
})();

function scrollTo() {
	var links = document.getElementsByTagName('a');
	for (var i = 0; i < links.length; i++) {
		var link = links[i];
		if ((link.href && link.href.indexOf('#') != -1) && ((link.pathname == location.pathname) || ('/' + link.pathname == location.pathname)) && (link.search == location.search)) {
			link.onclick = scrollAnchors;
		}
	}
}

function scrollAnchors(e, respond = null) {
	const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);
	e.preventDefault();
	var targetID = (respond) ? respond.getAttribute('href') : this.getAttribute('href');
	const targetAnchor = document.querySelector(targetID);
	if (!targetAnchor) return;
	const originalTop = distanceToTop(targetAnchor);
	window.scrollBy({ top: originalTop, left: 0, behavior: 'smooth' });
	const checkIfDone = setInterval(function() {
		const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
		if (distanceToTop(targetAnchor) === 0 || atBottom) {
			targetAnchor.tabIndex = '-1';
			targetAnchor.focus();
			window.history.pushState('', '', targetID);
			clearInterval(checkIfDone);
		}
	}, 100);
}




// Lazy Load
var lazyLoadInstance = new LazyLoad({
  elements_selector: "[loading=lazy]",
  use_native: true,
});
lazyLoadInstance.update();



// Image Carousel
var resortCarousel = document.querySelector('#carousel-resort');
var carousel = new bootstrap.Carousel(resortCarousel, {
  interval: 4000,
})



// Highlight current link
for (var i = 0; i < document.links.length; i++) {
    if (document.links[i].href == document.URL) {
        document.links[i].classList.add('active');
    }
}



// Scroll to top
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}



//PhotoSwipe
photoswipeSimplify.init();



var glider = document.getElementById("glide");
  if(glider){
    // Card carousel
    new Glide('.glide', {
      type: 'carousel',
      startAt: 0,
      perView: 2,
      peek: 50,
      autoplay: 5000,
      breakpoints: {
        1200: {
          startAt: 0,
          perView: 1,
        },
        800: {
          startAt: 0,
          perView: 1,
          peek: 50,
        }
      }
    }).mount();
  }
