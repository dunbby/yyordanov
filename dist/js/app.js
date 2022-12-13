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

/* ------------------------ Hero Content Animations ------------------------ */
function heroContentAnimation(delay) {
  let tl = gsap.timeline();

  tl.from('.text-reveal', {
    opacity: 0,
    duration: 1,
    y: 100,
    stagger: 0.3,
    ease: "Expo.easeOut",
    delay: delay
  })
  .from('.hero-image', {
    opacity: 0,
    duration: 1,
    ease: "Expo.easeOut",
    y: 100
  }, "-=1") 
  .from("#Group_138", {rotateZ: -45, duration: 4, ease: "elastic.out(1, 0.3)"},"-=2")
  .from("#Group_163", {rotateZ: -45, duration: 4, ease: "elastic.out(1, 0.3)"},"-=3")
  .from("#Group_35", {y: -100, duration: 1},"-=3.9")
  .from('.bg-title', {
    opacity: 0,
    duration: 0.4
  },"-=3")
  .from('.scroll-to', {
    opacity: 0,
    duration: 2,
  },"-=3") 


  // Hero Illustration Animations
  gsap.to("#Group_203", {
    y: -10,
    repeat: -1,
    yoyo: true,
    duration: 2.2,
    ease: "slow"
  });
  gsap.to("#Group_138", {
    y: 10,
    repeat: -1,
    yoyo: true,
    duration: 2.5,
    ease: "slow"
  });
  gsap.to("#Group_185", {
    y: 5,
    repeat: -1,
    yoyo: true,
    duration: 3,
    ease: "slow"
  });
  gsap.to("#Group_30", {
    y: -25,
    x: -50,
    repeat: -1,
    yoyo: true,
    duration: 7,
    ease: "slow"
  });
  gsap.to("#Group_163", {
    y: -10,
    repeat: -1,
    yoyo: true,
    duration: 2,
    ease: "slow"
  });
  gsap.to("#Group_170", {
    y: -10,
    repeat: -1,
    yoyo: true,
    duration: 2.4,
    ease: "slow"
  });
  gsap.to("#Group_183", {
    y: -10,
    repeat: -1,
    yoyo: true,
    duration: 2.6,
    ease: "slow"
  });
  gsap.to("#Group_113", {
    y: 10,
    repeat: -1,
    yoyo: true,
    duration: 2.5,
    ease: "slow"
  });
  gsap.to("#Group_172", {
    y: 5,
    repeat: -1,
    yoyo: true,
    duration: 1.2,
    ease: "slow"
  });
}

/* ------------------------ Init Scroll Trigger Animations ------------------------ */
function initScrollTriggerAnimations() {

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
          start: 'top 90%',
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
    
/* ------------------------ Delay Function ------------------------ */
function delay(n) {
  n = n || 2000
  // Keep official documentation wording, done -> resolve
  // and make it more concise
  return new Promise(resolve => {
    setTimeout(resolve, n)
  })
}

/* ------------------------ Init Page Transitions ------------------------ */
function initPageTransitions() {

  // scroll to the top of the page
  barba.hooks.enter(() => {
    window.scrollTo(0, 0);
  });

  barba.init({
    sync: true,
    timeout:7000,
    transitions: [{
      name: 'default',
      async once(data) {   
        // do something once on the initial page load
        initSmoothScroll(data.next.container);
        initScrollTriggerAnimations();  
        initLazyLoad();
        initPlayVideoInview()
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
        initScrollTriggerAnimations();
        initLazyLoad();
        initPlayVideoInview()
        scroll.destroy();
        initSmoothScroll(data.next.container);
        if (document.querySelector("section.home-top")) {
          heroContentAnimation(1);
        }
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
        initScrollTriggerAnimations();
        initLazyLoad();
        socialsBounceAnimation();
        heroContentAnimation(3);
        initLoaderHome();
      }
    }],
    views: [{
      namespace: 'home',
      beforeEnter(data) {
        body.classList.remove('contact-body');
        document.querySelector('#header').classList.add('scrolled'); 
      }
    }, 
    {
      namespace: 'contact',
      beforeEnter(data) {
        body.classList.add('contact-body');
        document.querySelector('#header').classList.remove('scrolled');;
      }
    },
    {
      namespace: 'higiya',
      beforeEnter(data) {
        body.classList.remove('contact-body');
        document.querySelector('#header').classList.add('scrolled');
      }
    },
    {
      namespace: 'smileink',
      beforeEnter(data) {
        body.classList.remove('contact-body');
        document.querySelector('#header').classList.add('scrolled');
      }
    },
    {
      namespace: 'about',
      beforeEnter(data) {
        body.classList.remove('contact-body');
        document.querySelector('#header').classList.add('scrolled');
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


