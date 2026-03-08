/*
	Template Name: SaasRiver - SaaS & StartUp HTML Template
	Author: https://themexriver.com/
	Version: 1.0
*/


(function ($) {
"use strict";


/* 
	lenis-smooth-scroll-activation
*/
const lenis = new Lenis({
	duration: 1, 
	easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
	direction: 'vertical', 
	smooth: true, 
	smoothTouch: false, 
});
function raf(time) {
	lenis.raf(time);
	requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
$('a[href^="#"]').on('click', function (e) {
	e.preventDefault(); 

	const target = $(this.getAttribute('href')); 

	if (target.length) {
		lenis.scrollTo(target[0], {
			duration: 1.2, 
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
		});
	}
});


gsap.config({
	nullTargetWarn: false,
});

/* 
	sticky-header-function
*/

function waStickyHeader() {
    var $window = $(window);
    var lastScrollTop = 0;
    var $header = $('.wa_sticky_header');
    var headerHeight = $header.outerHeight() + 30;

    $window.scroll(function () {
      var windowTop = $window.scrollTop();

      if (windowTop >= headerHeight) {
        $header.addClass('wa_sticky');
      } else {
        $header.removeClass('wa_sticky');
        $header.removeClass('wa_sticky_show');
      }

      if ($header.hasClass('wa_sticky')) {
        if (windowTop < lastScrollTop) {
          $header.addClass('wa_sticky_show');
        } else {
          $header.removeClass('wa_sticky_show');
        }
      }

      lastScrollTop = windowTop;
    });
}

waStickyHeader();




/* 
	offcanvas-function
*/

$('.offcanvas_toggle').on('click', function() {
    $('.wa-overly, .offcanvas_box_active').addClass('active');
});

$('.wa-overly, .offcanvas_box_close').on('click', function() {
    $('.offcanvas_box_active').removeClass('active');
    $('.wa-overly').removeClass('active');
});

$(document).on('keydown', function(event) {
    if (event.key === 'Escape') {
        $('.offcanvas_box_active').removeClass('active');
        $('.wa-overly').removeClass('active');
    }
});

$('.offcanvas_box_active a').on('click', function() {
    $('.offcanvas_box_active').removeClass('active'); 
    $('.wa-overly').removeClass('active'); 
});


/* 
	mobile-dropdown-function
*/

jQuery(".mobile-main-navigation li.dropdown").append('<span class="dropdown-btn"><i class="fa-solid fa-angle-right"></i></span>'),
	jQuery(".mobile-main-navigation li .dropdown-btn").on("click", function () {
		jQuery(this).hasClass("active")
		? (jQuery(this).closest("ul").find(".dropdown-btn.active").toggleClass("active"), jQuery(this).closest("ul").find(".dropdown-menu.active").toggleClass("active").slideToggle())
		: (jQuery(this).closest("ul").find(".dropdown-btn.active").toggleClass("active"),
			jQuery(this).closest("ul").find(".dropdown-menu.active").toggleClass("active").slideToggle(),
			jQuery(this).toggleClass("active"),
			jQuery(this).parent().find("> .dropdown-menu").toggleClass("active"),
			jQuery(this).parent().find("> .dropdown-menu").slideToggle());
});


/* 
	search-popup-function
*/

$('.search_btn_toggle').on('click', function() {
    $('.wa-overly, .search_box_active').addClass('active');
});

$('.wa-overly, .search_box_close').on('click', function() {
    $('.search_box_active').removeClass('active');
    $('.wa-overly').removeClass('active');
});

$(document).on('keydown', function(event) {
    if (event.key === 'Escape') {
        $('.search_box_active').removeClass('active');
        $('.wa-overly').removeClass('active');
    }
});




/* 
	windows-load-function
*/


window.addEventListener('load', function(){


	if (document.querySelectorAll(".sk-loader").length) {
		const loader = document.querySelector(".sk-loader");
		
		setTimeout(() => {
			loader.classList.add("loaded");
			afterPreloader();
		});
		setTimeout(function () {
			loader.remove();
		}, 1500);

	} else {
		afterPreloader();
	}

	afterPageLoad();

})


CustomEase.create("ease1", ".18,.82,.41,1");
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

/* 
	after-preloader-start
*/
function afterPreloader() {


	/* 
		only-LTR-direction
	*/
	if (getComputedStyle(document.body).direction !== "rtl") {

		
		
	}	


/* 
	after-preloader-end
*/
}






/* 
	after-page-load-start
*/
function afterPageLoad() {

	/* 
		add-active-class
	*/
	const waAddClass = gsap.utils.toArray('.wa_add_class');
	waAddClass.forEach(waAddClassItem => {
		gsap.to(waAddClassItem, {
			scrollTrigger: {
				trigger: waAddClassItem,
				start: "top 90%",
				end: "bottom bottom",
				toggleActions: "play none none reverse",
				toggleClass: "active",
				once: true,
				markers: false,
			}
		});
	});



	/* 
		wow-activation
	*/
	if($('.wow').length){
		var wow = new WOW({
			boxClass:     'wow',
			animateClass: 'animated',
			offset:       50,
			mobile:       true,
			live:         true
		});
		wow.init();
	};




	if($(".xr-hero-1-features-list").length) {
		const items = document.querySelectorAll(".xr-hero-1-features-list li");
		let current = 0;
	
		setInterval(() => {
			items[current].classList.remove("active");
			current++;
			if (current >= items.length) {
				current = 0;
			}
			items[current].classList.add("active");
		}, 3000);
	}


/* 
	after-page-load-start
*/
}


// wa-bg-parallax
gsap.utils.toArray(".wa_parallax_bg").forEach(element => {
	gsap.fromTo(
		element,
		{ backgroundPosition: "50% 0%" }, 
		{ 
			backgroundPosition: "50% 100%", 
			ease: "none",
			scrollTrigger: {
				trigger: element,
				scrub: 1,    
				markers: false,  
			},
		}
	);
});

// wa-parallax-img
gsap.utils.toArray(".wa_parallax_img").forEach(element => {
	gsap.fromTo(
		element,
		{ objectPosition: "50% 110%" }, 
		{ 
			objectPosition: "50% 0%", 
			ease: "none",
			scrollTrigger: {
				trigger: element,
				scrub: true,    
				markers: false,     
			},
		}
	);
});

// wa_zoomOut_img
gsap.utils.toArray(".wa_zoomOut_img").forEach(wa_zoomOut_img => {
	gsap.fromTo(
		wa_zoomOut_img,
		{ scale: 1.15 }, 
		{ 
			scale: 1, 
			ease: "power1.inOut",
			duration: .5,
			scrollTrigger: {
				trigger: wa_zoomOut_img,
				start: "top 70%",
				markers: false,     
			},
		}
	);
});




/* 
	header-1-toggle
*/
$(".xr-header-1-menu-toggle-btn").on("click", function () {
	$(this).toggleClass("active"); 

	$(".xr-header-1-menu").toggleClass("show"); 
});



/* 
	price-3-toggle-class
*/
if($(".sk-price-3-toggle-btn").length) {
	$('.sk-price-3-toggle-btn').on('click', function () {
		$(".sk-price-3-toggle").toggleClass('active');
		$(".sk-price-3-toggle-btn").toggleClass('active');
		$('.sk-price-3-card .price-box').toggleClass('active');
		$('.sk-price-4-card .price-box').toggleClass('active');
	});
}

/* 
	price-5-toggle-class
*/
if($(".sk-price-5-toggle-btn").length) {
	$('.sk-price-5-toggle-btn').on('click', function () {
		$(".sk-price-5-toggle-btn").toggleClass('active');
		$(".sk-price-5-card .price-wrap").toggleClass('active');
	});
}


/* 
	price-6-toggle-class
*/
if($(".sk-price-6-toggle-btn").length) {
	$('.sk-price-6-toggle-btn').on('click', function () {
		$(".sk-price-6-toggle-btn").toggleClass('active');
		$(".sk-price-6-card .price-wrap").toggleClass('active');
	});
}

/* 
	price-7-toggle-class
*/
if($(".skP7c1button").length) {
	$('.skP7c1button').on('click', function () {
		$(".skP7c1button").toggleClass('active');
		$(".skP7c1price").toggleClass('active');
	});
}
if($(".skP7c2button").length) {
	$('.skP7c2button').on('click', function () {
		$(".skP7c2button").toggleClass('active');
		$(".skP7c2price").toggleClass('active');
	});
}
if($(".skP7c3button").length) {
	$('.skP7c3button').on('click', function () {
		$(".skP7c3button").toggleClass('active');
		$(".skP7c3price").toggleClass('active');
	});
}

// price-3-heart-shape
gsap.utils.toArray(".sk-price-3-card-ani .smoke").forEach((smoke, i) => {
    gsap.fromTo(smoke,
        {
            y: 15,
            opacity: 1,
            scale: 1
        },
        {
            y: -75,
            opacity: 0,
            scale: 8,
            duration: 5,
            repeat: -1,
            delay: i * 0.8,
            ease: "power1.out"
        }
    );
});


/* 
	testimonial-7-slider-function
*/
if ($('.sk_t7_slider').length) {
	var sk_t7_slider = new Swiper(".sk_t7_slider", {
		loop: true,
		speed: 600,
		autoplay: {
			delay: 4000,
		},

	});

}

setTimeout(() => {
	if ($('.sk_t7_slider_2').length) {
		var sk_t7_slider_2 = new Swiper(".sk_t7_slider_2", {
			loop: true,
			speed: 600,
			direction: 'vertical',
			autoplay: {
				delay: 4000,
			},
	
		});
	
	}
}, 2000);


// choose-8-slider-function
if ($('.sk_c8_slider').length) {
	var sk_c8_slider = new Swiper(".sk_c8_slider", {
		loop: true,
		speed: 600,
		autoplay: {
			delay: 4000,
		},

		pagination: {
			el: '.sk_c8_slider_pagi',
			clickable: true, 
		},
	});

}

if ($('.sk_pd_preview').length) { 

	let sk_pd_preview = new Swiper('.sk_pd_preview', {
		spaceBetween: 12,
		loop: true,
		speed: 600,
		slidesPerView: 3,
		watchSlidesProgress: true,	
		direction: 'vertical',
	});
	
	
	
	let sk_pd_main = new Swiper('.sk_pd_main', {
		loop: true,
		spaceBetween: 0,
		slidesPerView: 1,

		thumbs: {
			swiper: sk_pd_preview,
		},
	});
	
}


// product-view-toggle

if($(".sk-shop-1-filter-view").length) {
    const gridBtn = document.querySelector(".sk-shop-1-filter-view .grid-view");
    const listBtn = document.querySelector(".sk-shop-1-filter-view .list-view");
    const productWrap = document.querySelector(".sk-shop-1-grid");

    gridBtn.addEventListener("click", function () {
        productWrap.classList.remove("list-view");
        productWrap.classList.add("grid-view");

        gridBtn.classList.add("active");
        listBtn.classList.remove("active");
    });

    listBtn.addEventListener("click", function () {
        productWrap.classList.remove("grid-view");
        productWrap.classList.add("list-view");

        listBtn.classList.add("active");
        gridBtn.classList.remove("active");
    });
};

// price-range
if($(".sk-sidebar-price-filter").length) { 
	const minRange = document.getElementById("minRange");
	const maxRange = document.getElementById("maxRange");
	const minPrice = document.getElementById("minPrice");
	const maxPrice = document.getElementById("maxPrice");
	const sliderRange = document.getElementById("sliderRange");

	const minGap = 10;
	const maxValue = 1000;

	function updateSlider() {
		let minVal = parseInt(minRange.value);
		let maxVal = parseInt(maxRange.value);

		if (maxVal - minVal <= minGap) {
			if (event.target.id === "minRange") {
				minRange.value = maxVal - minGap;
			} else {
				maxRange.value = minVal + minGap;
			}
		}

		minPrice.textContent = minRange.value;
		maxPrice.textContent = maxRange.value;

		const percent1 = (minRange.value / maxValue) * 100;
		const percent2 = (maxRange.value / maxValue) * 100;

		sliderRange.style.left = percent1 + "%";
		sliderRange.style.width = (percent2 - percent1) + "%";
	}

	minRange.addEventListener("input", updateSlider);
	maxRange.addEventListener("input", updateSlider);

	updateSlider();
}

if($(".qty-stepper").length) {

	document.querySelectorAll('.qty-stepper').forEach(stepper => {
		const input = stepper.querySelector('.qty-input');
		const btnPlus = stepper.querySelector('.plus');
		const btnMinus = stepper.querySelector('.minus');
	
		const min = parseInt(stepper.dataset.min) || 1;
		const max = parseInt(stepper.dataset.max) || 999;
	
		btnPlus.addEventListener('click', () => {
			let val = parseInt(input.value) || min;
			if (val < max) input.value = val + 1;
			input.dispatchEvent(new Event('change'));
		});
	
		btnMinus.addEventListener('click', () => {
			let val = parseInt(input.value) || min;
			if (val > min) input.value = val - 1;
			input.dispatchEvent(new Event('change'));
		});
	
		input.addEventListener('input', () => {
			let val = parseInt(input.value);
			if (val < min) input.value = min;
			if (val > max) input.value = max;
		});
	});
	
}


/* 
	progress-animation
*/
const wa_progress_ani = document.querySelectorAll('.wa_progress_ani');
wa_progress_ani.forEach((elm) => {
	gsap.from(elm, {
		width: "0",
		duration: 2,
		ease: "power1.inOut",

		scrollTrigger: {
			trigger: elm,
			start: "top 90%",   
			toggleActions: "play none none reverse",
		}
	});
});



/* 
    marquee-activation
*/

$('.wa_marquee').each(function () {

	let $this = $(this);

	let speed = $this.data('speed') || 20;
	let direction = $this.data('direction') || 'left';
	let pauseOnHover = $this.data('pause');

	if (pauseOnHover === undefined) {
		pauseOnHover = false;
	}

	$this.marquee({
		speed: speed,
		gap: 0,
		delayBeforeStart: 0,
		startVisible: true,
		direction: direction,
		duplicated: true,
		pauseOnHover: pauseOnHover,
	});

});

/* 
	marquee-down-top 
*/
if ($(".wa_marquee_down_top").length) {
  document.querySelectorAll(".wa_marquee_down_top").forEach((waMarqueeTop) => {
    const waMarqueeClone = waMarqueeTop.cloneNode(true);
    waMarqueeTop.parentNode.appendChild(waMarqueeClone);

    const waMarqueeTotalHeight = waMarqueeTop.offsetHeight;

    gsap.to([waMarqueeTop, waMarqueeClone], {
      y: `-${waMarqueeTotalHeight}px`,
      ease: "none",
      duration: 20,
      repeat: -1,
      modifiers: {
        y: gsap.utils.unitize((waY) => parseFloat(waY) % waMarqueeTotalHeight),
      },
    });
  });
}


/* 
	marquee-top-down 
*/
if ($(".wa_marquee_top_down").length) { 
	const waMarqueeTopDown = document.querySelector('.wa_marquee_top_down');
	const waMarqueeTopDownClone = waMarqueeTopDown.cloneNode(true);
	waMarqueeTopDown.parentNode.appendChild(waMarqueeTopDownClone);
	
	const waMarqueeTopDownHeight = waMarqueeTopDown.offsetHeight;
	
	gsap.to(".wa_marquee_top_down", {
	  y: `${waMarqueeTopDownHeight}px`, 
	  ease: "none",
	  duration: 20,
	  repeat: -1,
	  modifiers: {
		y: gsap.utils.unitize(waY => parseFloat(waY) % waMarqueeTopDownHeight)
	  }
	});
}


/* 
	wa_parallax_elm
*/ 
if($(".wa_parallax_elm").length) {
	document.addEventListener("mousemove", wa_parallax_handler);
	function wa_parallax_handler(e) {
		const items = document.querySelectorAll(".wa_parallax_elm");
	
		items.forEach((el) => {
			const speed = parseFloat(el.getAttribute("data-value")) || 0;
			const x = (e.clientX * speed) / 250;
			const y = (e.clientY * speed) / 250;
	
			el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
		});
	}
}




/* 
	faqs-active-class
*/
$(document).on('click', '.wa_accordion_item', function () {

	if ($(this).hasClass('active')) {
		$(this).removeClass('active');
	} else {
		$(this).addClass('active').siblings().removeClass('active');
	}

});


// placeholder-typing
document.querySelectorAll(".wa_placeholder").forEach(waPlaceholderInput => {
	const waPlaceholderText = waPlaceholderInput.placeholder; 
	const waStartDelay = waPlaceholderInput.dataset.startDelay ? parseInt(waPlaceholderInput.dataset.startDelay) : 0; 
	let waPlaceholderIndex = 0;
	waPlaceholderInput.placeholder = "";

	const waPlaceholderObserver = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				waPlaceholderType();
				waPlaceholderObserver.unobserve(waPlaceholderInput);
			}
		});
	}, { threshold: 0.5 });

	setTimeout(() => {
		waPlaceholderObserver.observe(waPlaceholderInput);
	}, waStartDelay);

	function waPlaceholderType() {
		if (waPlaceholderIndex < waPlaceholderText.length) {
			waPlaceholderInput.placeholder += waPlaceholderText.charAt(waPlaceholderIndex);
			waPlaceholderIndex++;
			setTimeout(waPlaceholderType, 70); 
		}
	}
});

/* 
	bootstrap-tooltip-activation
*/
$(function () {
	$('[data-toggle="tooltip"]').tooltip()
})

/* 
	back-to-top-button-function
*/
if ($('.wa_backToTop').length) {
    var scrollTopbtn = document.querySelector('.wa_backToTop');
    var offset = 500; 
    var duration = 1000; 

    $(window).on('scroll', function () {
        if ($(this).scrollTop() > offset) {
            $(scrollTopbtn).addClass('active');
        } else {
            $(scrollTopbtn).removeClass('active');
        }
    });

    $(scrollTopbtn).on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, duration, 'swing');
    });
}

/* 
	popup-video-activation
*/
if($('.popup_video').length) {
	$('.popup_video').magnificPopup({
		type: 'iframe'
	});
}

/* 
	popup-image-activation
*/
if($('.popup_img').length) {
	$('.popup_img').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true,
		},
	});
}


/* 
	nice-selector-activation
*/
if($('.nice-select').length) {
	$('.nice-select select').niceSelect();
}


/* 
	background-image-function
*/
$("[data-background]").each(function(){
	$(this).css("background-image","url("+$(this).attr("data-background") + ") ")
})

/* 
	counter-activation
*/


if($(".counter").length) {
    $('.counter').counterUp({
        delay: 10,
        time: 5000
    });

    let elements = document.querySelectorAll(".wa-counter");

    elements.forEach(element => {
        let innerWidth = element.clientWidth;
        element.style.width = innerWidth + "px";
    });
}

/*
    odomater-activation
*/

$('.odometer').appear(function () {
    var $this = $(this); 
    var countNumber = $this.attr("data-count");
    $this.html(countNumber);
});


/* 
	current-year-function
*/
if ($('.copyright-year').length) {
    const currentYear = new Date().getFullYear();
    $('.copyright-year').text(currentYear);
}


})(jQuery);