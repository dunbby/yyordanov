gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

let scroll;

const body = document.body;
const select = (e) => document.querySelector(e);
const selectAll = (e) => document.querySelectorAll(e);

initPageTransitions();

/* ------------------------ Initial Loader animations ------------------------- */
function initLoaderHome() { 

  var tl = gsap.timeline();

	tl.set(".loading-screen", { 
		top: "0",
	});	

  tl.set(".loading-words", { 
		opacity: 0,
    y: -50
	});

  tl.set(".loading-words .active", { 
		display: "none",
	});

  tl.set(".loading-words .home-active, .loading-words .home-active-last", { 
		display: "block",
    opacity: 0
	});

  tl.set(".loading-words .home-active-first", { 
		opacity: 1,
	});

  if ($(window).width() > 540) { 
    tl.set(".loading-screen .rounded-div-wrap.bottom", { 
      height: "10vh",
    });	
  } else {
    tl.set(".loading-screen .rounded-div-wrap.bottom", { 
      height: "5vh",
    });	
  }

  tl.set("html", { 
		cursor: "wait"
	});

  tl.to(".loading-words", {
		duration: .8,
		opacity: 1,
    y: -50,
    ease: "Power4.easeOut",
    delay: .5
	});

  tl.to(".loading-words .home-active", {
		duration: .01,
		opacity: 1,
    stagger: .15,
    ease: "none",
    onStart: homeActive
  },"=-.4");

  function homeActive() {
    gsap.to(".loading-words .home-active", {
      duration: .01,
      opacity: 0,
      stagger: .15,
      ease: "none",
      delay: .15
    });
  }

  tl.to(".loading-words .home-active-last", {
		duration: .01,
		opacity: 1,
    delay: .15
  });
  
	tl.to(".loading-screen", {
		duration: .8,
		top: "-100%",
		ease: "Power4.easeInOut",
    delay: .2
  });

  tl.to(".loading-screen .rounded-div-wrap.bottom", {
		duration: 1,
		height: "0vh",
		ease: "Power4.easeInOut"
	},"=-.8");

  tl.to(".loading-words", {
		duration: .3,
		opacity: 0,
    ease: "linear"
	},"=-.8");

	tl.set(".loading-screen", { 
		top: "calc(-100%)" 
	});	

  tl.set(".loading-screen .rounded-div-wrap.bottom", { 
		height: "0vh"
	});	

  const elements = gsap.utils.toArray('main');
  elements.forEach(element => {

    if ($(window).width() > 540) { 
      tl.set(element, {
        y: "50vh",
      },"=-1");
    } else {
      tl.set(element, {
        y: "20vh"
      },"=-1");
    }
  
    tl.to(element, {
      duration: 1,
      y: "0vh",
      stagger: .05,
      ease: "Expo.easeOut",
      delay: .95,
      clearProps: "true"
    },"=-1.7");
  });
  
  tl.set("html", { 
		cursor: "auto"
	},"=-1.2");
  
}

/* ------------------------ First Page Load ------------------------ */
function initLoader() { 

  var tl = gsap.timeline();

	tl.set(".loading-screen", { 
		top: "0",
	});	

  tl.set(".loading-words", { 
		opacity: 1,
    y: -50
	});

  if ($(window).width() > 540) { 
    tl.set(".loading-screen .rounded-div-wrap.bottom", { 
      height: "10vh",
    });	
  } else {
    tl.set(".loading-screen .rounded-div-wrap.bottom", { 
      height: "5vh",
    });	
  }

  tl.set("html", { 
		cursor: "wait"
	});
  
	tl.to(".loading-screen", {
		duration: .8,
		top: "-100%",
		ease: "Power4.easeInOut",
    delay: .5
  });

  tl.to(".loading-screen .rounded-div-wrap.bottom", {
		duration: 1,
		height: "0vh",
		ease: "Power4.easeInOut"
	},"=-.8");

  tl.to(".loading-words", {
		duration: .3,
		opacity: 0,
    ease: "linear",
	},"=-.8");

	tl.set(".loading-screen", { 
		top: "calc(-100%)" 
	});	

  tl.set(".loading-screen .rounded-div-wrap.bottom", { 
		height: "0vh"
	});	

  tl.set("html", { 
		cursor: "auto",
	},"=-.8");

}

/* ------------------------ Animation - Page transition In ------------------------- */
function pageTransitionIn() {
	var tl = gsap.timeline();

  tl.set(".loading-screen", { 
		top: "100%" 
	});	

  tl.set(".loading-words", { 
		opacity: 0,
    y: 0
	});

  tl.set("html", { 
		cursor: "wait"
	});

  if ($(window).width() > 540) { 
    tl.set(".loading-screen .rounded-div-wrap.bottom", { 
      height: "10vh",
    });	
  } else {
    tl.set(".loading-screen .rounded-div-wrap.bottom", { 
      height: "5vh",
    });	
  }

	tl.to(".loading-screen", {
		duration: .5,
		top: "0%",
		ease: "Power4.easeIn"
	});

  if ($(window).width() > 540) { 
    tl.to(".loading-screen .rounded-div-wrap.top", {
      duration: .4,
      height: "10vh",
      ease: "Power4.easeIn"
    },"=-.5");
  } else {
    tl.to(".loading-screen .rounded-div-wrap.top", {
      duration: .4,
      height: "10vh",
      ease: "Power4.easeIn"
    },"=-.5");
  }

  tl.to(".loading-words", {
		duration: .8,
		opacity: 1,
    y: -50,
    ease: "Power4.easeOut",
    delay: .05
	});

  tl.set(".loading-screen .rounded-div-wrap.top", {
		height: "0vh"
	});

	tl.to(".loading-screen", {
		duration: .8,
		top: "-100%",
		ease: "Power3.easeInOut"
	},"=-.2");

  tl.to(".loading-words", {
		duration: .6,
		opacity: 0,
    ease: "linear"
	},"=-.8");

  tl.to(".loading-screen .rounded-div-wrap.bottom", {
		duration: .85,
		height: "0",
		ease: "Power3.easeInOut"
	},"=-.6");

  tl.set("html", { 
		cursor: "auto"
	},"=-0.6");

  if ($(window).width() > 540) { 
    tl.set(".loading-screen .rounded-div-wrap.bottom", {
      height: "10vh"
    });
  } else {
    tl.set(".loading-screen .rounded-div-wrap.bottom", {
      height: "5vh"
    });
  }

  tl.set(".loading-screen", { 
		top: "100%" 
	});	

  tl.set(".loading-words", {
		opacity: 0,
	});
  
}

/* ------------------------ Animation - Page transition Out ------------------------- */
function pageTransitionOut() {
	// Scrolltrigger Animation : Reveal Content
  if(document.querySelector("main")) {
    let tl = gsap.timeline();
    const elements = gsap.utils.toArray('main');
    elements.forEach(element => {

      if ($(window).width() > 540) { 
        tl.set(element, {
          y: "50vh",
        });
      } else {
        tl.set(element, {
          y: "20vh"
        });
      }
    
      tl.to(element, {
        duration: 1,
        y: "0vh",
        stagger: .05,
        ease: "Expo.easeOut",
        delay: .95,
        clearProps: "true"
      });
    });
  }
}

/* ------------------------ Words Reveal Function ------------------------ */
function initNextWord(data) {
  // update Text Loading https://github.com/barbajs/barba/issues/507
  let parser = new DOMParser();
  let dom = parser.parseFromString(data.next.html, 'text/html');
  let nextProjects = dom.querySelector('.loading-words');
  document.querySelector('.loading-words').innerHTML = nextProjects.innerHTML;
}

/* ------------------------ Social Bounce Animations ------------------------ */
function socialsBounceAnimation() {
  gsap.from('.socials-container', {
    duration: 1.8, 
    y: -2000, 
    opacity: 0, 
    delay: 7,  
    ease: Bounce.easeOut
  }, "-=2")
}

/* ------------------------ Init Scroll Trigger Navigation ------------------------ */
function initScrolltriggerNav() {
    
  ScrollTrigger.create({
    start: 'top -30%',
    onUpdate: self => {
      $("main").addClass('scrolled');
    },
    onLeaveBack: () => {
      $("main").removeClass('scrolled');
    },
  });
}

/* ------------------------ Init Scroll Trigger Animations ------------------------ */
function initScrollTriggerAnimations() {

  if(document.querySelector(".footer-wrap")) {
    // Scrolltrigger Animation : Footer + hamburger
    $(".footer-wrap").each(function (index) {
      let triggerElement = $(this);
      let targetElementHamburger = $(".btn-hamburger .btn-click");
  
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerElement,
          start: "50% 100%",
          end: "100% 120%",
          scrub: 0
        }
      });
      tl.from(targetElementHamburger, {
        boxShadow: "0px 0px 0px 0px rgb(0, 0, 0)",
        ease: "none"
      });
    });
    }

    
  // Scrolltrigger Animation : About Services BG
  if(document.querySelector(".about-services")) {
    $(".about-services").each(function (index) {
      let triggerElement = $(this);
      let targetElement = $(".about-top, .about-image, .about-services");
    
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerElement,
          start: "-25% 100%",
          end: "100% 100%",
          scrub: 0,
        }
      });
      tl.set(targetElement, {
        backgroundColor: "#FCFCFC",
      })
      tl.to(targetElement, {
        backgroundColor: "#F1F1F1",
        ease: "none",
      });
    });
  }

  // Scrolltrigger Animation : Reveal Content
  if(document.querySelector(".animate-in")) {
    const elements = gsap.utils.toArray('.animate-in');
    elements.forEach(element => {
      gsap.from(element, { 
          y: 50,
          opacity: 0,
          scrollTrigger: {
          trigger: element,
          start: 'top 95%',
          // markers: true
        }
      })
    });
  }

  // Scrolltrigger Animation : Next Page Section Reveal
  if(document.querySelector(".footer-case-wrap")) {
    $(".footer-case-wrap").each(function (index) {
      let triggerElement = $(this);
      let targetElementRound = $(".footer-rounded-div .rounded-div-wrap");
    
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerElement,
          start: "0% 100%",
          end: "100% 100%",
          // markers: true,
          scrub: 0
        }
      });
      tl.to(targetElementRound, {
        height: 0,
        ease: "none"
      }, 0);
    });
  }

  // Scrolltrigger Animation : Next Page Tile Image Reveal
  if(document.querySelector(".project-next")) {
    // Tile Image Anim
    const tileImages = gsap.utils.toArray('.tile-image-wrap');
    tileImages.forEach(tileImage => {
      gsap.set(tileImage, { yPercent: 100, });

      const uncoverTile = gsap.timeline({ paused:true })
      uncoverTile
      .to(tileImage, { yPercent: 0, ease: 'none' })
      
      ScrollTrigger.create({
        trigger: tileImage,
        start: 'top 95%',
        end: '+=100% 100%',
        animation: uncoverTile,
        scrub: .5,
      });
    }); 
  }
}

/* ------------------------ Init Lazy Load ------------------------ */
function initLazyLoad() {
  // https://github.com/locomotivemtl/locomotive-scroll/issues/225
  // https://github.com/verlok/vanilla-lazyload
  var lazyLoadInstance = new LazyLoad({ 
    elements_selector: ".lazy",
  });
}

/* ------------------------ Init Play Video ------------------------ */
function initPlayVideoInview() {

  let allVideoDivs = gsap.utils.toArray('.playpauze');

  allVideoDivs.forEach((videoDiv, i) => {

    let videoElem = videoDiv.querySelector('video')

    ScrollTrigger.create({
      scroller: document.querySelector('[data-scroll-container]'),
      trigger: videoElem,
      start: '0% 120%',
      end: '100% -20%',
      onEnter: () => videoElem.play(),
      onEnterBack: () => videoElem.play(),
      onLeave: () => videoElem.pause(),
      onLeaveBack: () => videoElem.pause(),
    });

  });
}

/* ------------------------ Hamburger Nav Open/Close ------------------------ */
function initHamburgerNav() {
    
  // Open/close navigation when clicked .btn-hamburger

  $(document).ready(function(){
    $(".btn-hamburger, .btn-menu").click(function(){
      if ($(".btn-hamburger, .btn-menu").hasClass('active')) {
          $(".btn-hamburger, .btn-menu").removeClass('active');
          $(".btn-hamburger, .btn-menu").removeClass('checked');
          $("main").removeClass('nav-active');
          scroll.start();
      } else {
          $(".btn-hamburger, .btn-menu").addClass('active');
          $(".btn-hamburger, .btn-menu").addClass('checked');
          $("main").addClass('nav-active');
          scroll.stop();
      }
    });
    $('.fixed-nav-back').click(function(){
      $(".btn-hamburger, .btn-menu").removeClass('active');
      $(".btn-hamburger, .btn-menu").removeClass('checked');
      $("main").removeClass('nav-active');
      scroll.start();
    });
    $('.projects-link').click(function(){
      $(".btn-hamburger, .btn-menu").removeClass('active');
      $(".btn-hamburger, .btn-menu").removeClass('checked');
      $("main").removeClass('nav-active');
      scroll.start();
    });
  });
  $(document).keydown(function(e){
    if(e.keyCode == 27) {
      if ($('main').hasClass('nav-active')) {
          $(".btn-hamburger, .btn-menu").removeClass('active');
          $("main").removeClass('nav-active');
          scroll.start();
      } 
    }
  });

}

/* ------------------------ Delay Function ------------------------ */
function delay(n) {
  n = n || 2000
  // Keep official documentation wording, done -> resolve
  // and make it more concise
  return new Promise(resolve => {
    setTimeout(resolve, n)
  })
}

/* ------------------------ Fire all scripts on page load ------------------------ */
function initScript() {
  initHamburgerNav();
  initScrolltriggerNav();
  initLazyLoad();
  initPlayVideoInview();
  initScrollTriggerAnimations();
}

/* ------------------------ Init Page Transitions ------------------------ */
function initPageTransitions() {

  // scroll to the top of the page
  barba.hooks.enter(() => {
    window.scrollTo(0, 0);
  });

  if ($(window).width() > 540) { 
    barba.hooks.leave(() => {
      $(".btn-hamburger, .btn-menu").removeClass('active');
      $("main").removeClass('nav-active');
    }); 
  }

  barba.init({
    sync: true,
    timeout:7000,
    debug: true,
    transitions: [{
      name: 'default',
      async once(data) {   
        // do something once on the initial page load
        initSmoothScroll(data.next.container);
        initScript();
        initLoader();  
      },
      async leave(data) {
        // animate loading screen in
        pageTransitionIn(data.current);
        await delay(495);
        data.current.container.remove();
      },
      async enter(data) {
        // animate loading screen away  
        pageTransitionOut(data.next);
        initNextWord(data);
      },
      async beforeEnter(data) {        
        ScrollTrigger.getAll().forEach(t => t.kill());
        initScript();
        scroll.destroy();
        initSmoothScroll(data.next.container);
      },
    }, 
    {
      name: 'to-home',
      from: {
      },
      to: {
        namespace: ['home']
      },
      once(data) {
        // do something once on the initial page load
        initSmoothScroll(data.next.container);
        initScript();
        socialsBounceAnimation();
        initLoaderHome();
      }
    }],
    views: [{
      namespace: 'home',
      beforeEnter(data) {
        body.classList.remove('contact-body'); 
      }
    }, 
    {
      namespace: 'contact',
      beforeEnter(data) {
        body.classList.add('contact-body');
      }
    },
    {
      namespace: 'higiya',
      beforeEnter(data) {
        body.classList.remove('contact-body');
      }
    },
    {
      namespace: 'smileink',
      beforeEnter(data) {
        body.classList.remove('contact-body');
      }
    },
    {
      namespace: 'about',
      beforeEnter(data) {
        body.classList.remove('contact-body');
      }
    }]
  });

  /* ------------------------ Locomotive Scroll ------------------------- */
  function initSmoothScroll(container) {
    // --- SETUP START ---
    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    scroll = new LocomotiveScroll({
      el: container.querySelector('[data-scroll-container]'),
      smooth: true,
      lerp: 0.03
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    window.onresize = scroll.update();

    scroll.on("scroll", () => ScrollTrigger.update());

    // tell ScrollTrigger to use these proxy methods for the "[data-scroll-container]" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("[data-scroll-container]", {
      scrollTop(value) {
        return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("[data-scroll-container]").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.defaults({
      scroller: document.querySelector('[data-scroll-container]'),
    });
    // --- SETUP END ---
    
    // Scroll To Projects on Home page
    if(document.querySelector('#projects')){
      const UIprojects = document.querySelector('#projects');
      const projectsBtn = document.querySelectorAll('.projects-link');

      for (let i = 0; i < projectsBtn.length; i++) {
          const self = projectsBtn[i];

          self.addEventListener('click', function (event) {  
            event.preventDefault();
            scroll.scrollTo(UIprojects, {offset: -100, duration: 200, easing: [0.25, 0.1, 0.25, 1.0]});
          }, false);
      }
    }
    
    /**
     * Remove Old Locomotive Scrollbar
     */

    const scrollbar = selectAll('.c-scrollbar');

    if(scrollbar.length > 1) {
      scrollbar[0].remove();
    }

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => scroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
  }
}


