$(document).ready(function() {

    bod = $('body, html');
    enterbtn = $('.enter-btn');
    skill = $('.skills');
    imu = $('.imu');
    clone = $('.clone');
    anim = true;
    rotateBool = true;
    topSkillsImg = "100px";
    heightSkillsImg = "50px";
    widthSkillsImg = "50px";
    scrollSpeed = 1000;
    gotoLeft= "17%";






    if (window.matchMedia("(max-width:700px)").matches) {
        // Setting variable for screen size
        anim = false;
        topSkills = "5%";
        topSkillsImg = "160%";
        heightSkillsImg = "40px";
        widthSkillsImg = "40px";
        scrollSpeed = 100;
        gotoLeft= "0%";
    } else if (window.matchMedia("(min-width: 701px) and (max-height:767px").matches) {
        anim = true;
        scrollSpeed= 1000;
        // topSkills = "0%";
        topSkillsImg = "5%";
        heightSkillsImg = "50px";
        widthSkillsImg = "50px";
        gotoLeft = "0%";
    } else if (window.matchMedia("(min-width:1024px) and (min-height:768px)").matches) {
        anim = true;
        topSkillsImg = "5%";
        heightSkillsImg = "50px";
        widthSkillsImg = "50px";
        scrollSpeed = 1000;
        gotoLeft= "16%";
    }


    var skills = [{
        cl: "skills0-img",
        sr: 'images/jquery.png',
        name: '[ JQUERY ] '
    }, {
        cl: "skills1-img",
        sr: 'images/html.png',
        name: '[ HTML ]'
    }, {
        cl: 'skills2-img',
        sr: 'images/css.png',
        name: '[ CSS ]'
    }, {
        cl: 'skills3-img',
        sr: 'images/laravel.png',
        name: '[ LARAVEL ]'
    }, {
        cl: 'skills4-img',
        sr: 'images/bootstrap.png',
        name: '[ BOOTSTRAP ]'
    }, {
        cl: 'skills5-img',
        sr: 'images/rails.png',
        name: '[ RUBY ON RAILS ]'
    }, {
        cl: 'skills6-img',
        sr: 'images/javascript.png',
        name: '[ JAVASCRIPT ]'
    }, {
        cl: 'skills7-img',
        sr: 'images/angular.png',
        name: '[ ANGULAR ]'
    }, {
        cl: 'skills8-img',
        sr: 'images/php.png',
        name: '[ PHP ]'
    }]

    function scrollTo(destination) {
        if (destination == null) {
            destination = $(".intro-div");
        }
        bod.css("overflow", "auto");
        bod.animate({
            scrollTop: destination.offset().top
        },scrollSpeed)
        bod.css("overflow","hidden");
    }
    scrollTo();

    function start() {

        enterbtn.unbind().click(function() {
            scrollTo($(".wandermunch"));
            startwm();
        });

        // Prevent scroll in Chrome Mobile
        document.addEventListener('touchmove', function(evt) {
            evt.preventDefault();
        });


        function introAnim() {
            $(".name-first").show("blind", 100) && $(".name-last").show("drop", 500);
        }

        if (anim == true) {
            introAnim();
        }

        // Function for Skills Loop
        var i = 0;
        function skillsLoop() {

            setTimeout(function() {
                /// Inserting skills img intro my-img div. Flashing Text with animation.
                $(".my-img").append($(" <img class= " + skills[i].cl + " src= " + skills[i].sr + " height='0px'  /> "))
                skill.text(" " + skills[i].name + " ");

                /// Animation of the skills img
                $(".skills" + i + "-img").animate({
                    "top": topSkillsImg,
                    "left": "-3%",
                    "height": heightSkillsImg,
                    "width": widthSkillsImg
                }, 1000);


                // Increment index and exit loop after cycling through skills array
                i++;
                if (i <= 8) {
                    skillsLoop();
                }

                // Hide the last skills text
                if (skill.text() === " [ PHP ] ") {
                    setTimeout(function() {
                        skill.text(" [ FULL STACK ] ");
                    }, 500)
                }
            }, 1000)
        };
        skillsLoop();
    }
    start();

    function sliderLoop(page) {
        function setLoopVar() {
            if (page == "wander") {
                currentIndex = 0,
                items = $('.container div');
                itemAmt = items.length;
                next = $(".next");
                prev = $(".prev");
            }
            if (page == "reddit") {
                currentIndex = 0,
                items = $('.rd-slider div');
                itemAmt = items.length;
                next = $(".next1");
                prev = $(".prev1");
            }

        }

        setLoopVar();

        function cycleItems() {
            var item = items.eq(currentIndex);
            items.hide();
            item.css('display', 'inline-block');

            setTimeout(function() {
                next.css('visibility', 'visible');
                prev.css('visibility', 'visible');
            }, 100)
        }
        if (currentIndex == 0){
            cycleItems();
        }

        ///Auto slider. Check if there is at least on more image to cycle
        //through. If not resets the index to 0
        var autoSlide = setInterval(function() {
            currentIndex += 1;
            if (currentIndex > itemAmt - 1) {
                currentIndex = 0;
            }
            cycleItems();
        }, 3000);


        //Cycle to next image
        next.click(function() {
            clearInterval(autoSlide);
            currentIndex += 1;
            if (currentIndex > itemAmt - 1) {
                currentIndex = 0;
            }
            cycleItems();
        });

        // Cycle to previous image
        prev.click(function() {
            clearInterval(autoSlide);
            currentIndex -= 1;
            if (currentIndex < 0) {
                currentIndex = itemAmt - 1;
            }
            cycleItems();
        });

        $('.slide-down').unbind().click(function() {
                scrollTo($(".reddit-div"))
                clearInterval(autoSlide);
                startredd();
        });

        $(".slide-up-intro").unbind().click(function() {
            clearInterval(autoSlide);
            scrollTo($(".intro-div"))
            // $('.skills').show();
        });

        $('.slide-up').unbind().click(function() {
            clearInterval(autoSlide);
            sliderLoop('wander');
            scrollTo($(".wandermunch"));
        });
    }

    function startwm() {

        function wanderAnim() {
            var spanWidth = $('.wm span').width();
            $('.wm').animate({
                width: spanWidth
            }, 1500, 'swing');
            setTimeout(function() {
                $(".description").fadeIn(1000);
                $('.container').animate({
                    left: "0%"
                }, 500);
                $(".go-to").css({
                    visibility: "visible"
                }).animate({
                    left: gotoLeft
                }, 500);
                $(".slide-down-div, .slide-up-div").css({visibility: "visible"})
            }, 1000);
        }

        if (anim == true) {
            wanderAnim();
        }

        sliderLoop("wander");

    };


    function startredd() {

        sliderLoop("reddit");

        function redditAnim() {
            $('.redd-logo').delay(800).animate({
                top: "76%",
                left: "86%"
            }, 2000)
            $('.go-to1').delay(800).fadeIn("slow", "swing")
            $('.redd-desc').delay(800).fadeIn("slow", "swing")
            if (rotateBool == true) {
                imu.animate({
                    left: "27%"
                }, 1000).rotate({
                    endDeg: 360,
                    persist: true,
                    duration: 1
                }).animate({
                    fontSize: "200%"
                })
                clone.rotate({
                        endDeg: 90,
                        persist: true,
                        duration: 0.2
                    }).animate({
                        top: '0px'
                    }).rotate({
                        endDeg: 0,
                        persist: true
                    }, 200)
                    .animate({
                        left: 175,
                        fontSize: "200%"
                    }, 600)
                    rotateBool= false;
            }
        }
        if (anim == true ) {
            redditAnim();
        }

        $('.show-slider ').mouseover(function() {
            $('.redd-desc').animate({
                top: "200px"
            }, 500)
            $('.rd-slider ').animate({
                top: "400px"
            }, 1000);
        })



    }
})



// Plug in for rotation

$.fn.rotate = function(options) {
    var $this = $(this),
        prefixes, opts, wait4css = 0;
    prefixes = ['-Webkit-', '-Moz-', '-O-', '-ms-', ''];
    opts = $.extend({
        startDeg: false,
        endDeg: 360,
        duration: 1,
        count: 1,
        easing: 'linear',
        animate: {},
        forceJS: false
    }, options);

    function supports(prop) {
        var can = false,
            style = document.createElement('div').style;
        $.each(prefixes, function(i, prefix) {
            if (style[prefix.replace(/\-/g, '') + prop] === '') {
                can = true;
            }
        });
        return can;
    }

    function prefixed(prop, value) {
        var css = {};
        if (!supports.transform) {
            return css;
        }
        $.each(prefixes, function(i, prefix) {
            css[prefix.toLowerCase() + prop] = value || '';
        });
        return css;
    }

    function generateFilter(deg) {
        var rot, cos, sin, matrix;
        if (supports.transform) {
            return '';
        }
        rot = deg >= 0 ? Math.PI * deg / 180 : Math.PI * (360 + deg) / 180;
        cos = Math.cos(rot);
        sin = Math.sin(rot);
        matrix = 'M11=' + cos + ',M12=' + (-sin) + ',M21=' + sin + ',M22=' + cos + ',SizingMethod="auto expand"';
        return 'progid:DXImageTransform.Microsoft.Matrix(' + matrix + ')';
    }

    supports.transform = supports('Transform');
    supports.transition = supports('Transition');

    opts.endDeg *= opts.count;
    opts.duration *= opts.count;

    if (supports.transition && !opts.forceJS) { // CSS-Transition
        if ((/Firefox/).test(navigator.userAgent)) {
            wait4css = (!options || !options.animate) && (opts.startDeg === false || opts.startDeg >= 0) ? 0 : 25;
        }
        $this.queue(function(next) {
            if (opts.startDeg !== false) {
                $this.css(prefixed('transform', 'rotate(' + opts.startDeg + 'deg)'));
            }
            setTimeout(function() {
                $this
                    .css(prefixed('transition', 'all ' + opts.duration + 's ' + opts.easing))
                    .css(prefixed('transform', 'rotate(' + opts.endDeg + 'deg)'))
                    .css(opts.animate);
            }, wait4css);

            setTimeout(function() {
                $this.css(prefixed('transition'));
                if (!opts.persist) {
                    $this.css(prefixed('transform'));
                }
                next();
            }, (opts.duration * 1000) - wait4css);
        });

    } else { // JavaScript-Animation + filter
        if (opts.startDeg === false) {
            opts.startDeg = $this.data('rotated') || 0;
        }
        opts.animate.perc = 100;

        $this.animate(opts.animate, {
            duration: opts.duration * 1000,
            easing: $.easing[opts.easing] ? opts.easing : '',
            step: function(perc, fx) {
                var deg;
                if (fx.prop === 'perc') {
                    deg = opts.startDeg + (opts.endDeg - opts.startDeg) * perc / 100;
                    $this
                        .css(prefixed('transform', 'rotate(' + deg + 'deg)'))
                        .css('filter', generateFilter(deg));
                }
            },
            complete: function() {
                if (opts.persist) {
                    while (opts.endDeg >= 360) {
                        opts.endDeg -= 360;
                    }
                } else {
                    opts.endDeg = 0;
                    $this.css(prefixed('transform'));
                }
                $this.css('perc', 0).data('rotated', opts.endDeg);
            }
        });
    }

    return $this;
};
