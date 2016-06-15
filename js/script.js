$(document).ready(function() {

    bod = $('html body');
    enterbtn = $('.enter-btn');
    skill = $('.skills');
    anim = true;
    rotateIndex = 0;



    if (window.matchMedia("(max-width:500px)").matches) {
        // Setting variable for screen size
        anim = false;
        topSkills = "5%";
        topSkillsImg = "160%";
        heightSkillsImg = "40px";
        widthSkillsImg = "40px";
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

    function scrollTo(destination= $(".intro-div")) {
        bod.css("overflow", "auto");
        bod.animate({
            scrollTop: destination.offset().top
        },1000)
        bod.css("overflow","hidden");
    }

    function start() {

        scrollTo();

        $(".enter-btn").unbind().click(function() {
            startwm();
        });

        // Prevent scroll in Chrome Mobile
        document.addEventListener('touchmove', function(evt) {
            evt.preventDefault();
        });


        function introAnim() {
            $(".name-first").show("blind", 1000) && $(".name-last").show("drop", 1000);
            $(".enter-btn").delay(3000).fadeIn(1000);
        }

        if (anim == true) {
            console.log(anim)
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
                        skill.hide();
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
                console.log('wander')
            }
            if (page == "reddit") {
                currentIndex = 0,
                items = $('.rd-slider div');
                itemAmt = items.length;
                next = $(".next1");
                prev = $(".prev1");
                console.log('reddit')
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
            console.log(page)
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
                clearInterval(autoSlide);
                startredd();
                $('html, body').animate({
                    scrollTop: $('.reddit-div').offset().top
                });

        });

        $(".slide-up-intro").unbind().click(function() {
            clearInterval(autoSlide);
            for (i = 0; i <= 8; i++) {
                $('.skills' + i + '-img').remove();
            }
            start();
            $('.skills').show();
        });

        $('.slide-up').unbind().click(function() {
            clearInterval(autoSlide);
            $('html,body').animate({
                scrollTop: $('.wandermunch').offset().top
            }, 1000)
            startwm();
        });



    }

    function startwm() {
        //Scroll to WanderMunch
        scrollTo($(".wandermunch"));

        //Setting witdth of the title - Animation
        var spanWidth = $('.wm span').width();
        $('.wm').animate({
            width: spanWidth
        }, 4000, 'swing');

        // Making sure no other pages show when you resize window.
        // Definitely shouldn't be here
        // $(window).resize(function() {
        //     $('html, body').animate({
        //         scrollTop: $(".wandermunch").offset().top
        //     }, 1)
        // })

        function wanderAnim() {
            setTimeout(function() {
                $(".description").fadeIn(1000);
                $('.container').animate({
                    left: "0%"
                }, 1000);
                $(".go-to").css({
                    visibility: "visible"
                }).animate({
                    left: "0px"
                }, 1000);
            }, 1000);
        }

        if (anim == true) {
            wanderAnim();
        }
        sliderLoop("wander");

    };


    //Enter button for scrolling to WanderMunch
    // Shouldn't be here


    // Scroll Up in WanderMunch


    //Making sure animations in Reddit don't run the second time.
    // Bypassing the startredd function and simple scrolling down.


    function startredd() {


        sliderLoop("reddit");
        //Disabling scroll yet again
        $('body').css("overflow", "auto");
        $('html , body').animate({
            scrollTop: $(".reddit-div").offset().top
        }, 1000);
        $('body').css("overflow", "hidden");

        //Animation for logo popping up
        $('.redd-logo').delay(800).animate({
            top: "600px",
            left: "1250px"
        }, 2000)

        //Description, Tile and go-to button animation and
        $('.go-to1').delay(800).fadeIn("slow", "swing")
        $('.redd-desc').delay(800).fadeIn("slow", "swing")
        imu = $('.imu')
        clone = $('.clone')

        imu.animate({
            left: "27%"
        }, 1000).rotate({
            endDeg: 360,
            persist: true,
            duration: 1
        }).animate({
            fontSize: "200%"
        })


        if (rotateIndex == 0) {
            clone.rotate({
                    endDeg: 90,
                    persist: false,
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
            rotateIndex++;
            console.log(rotateIndex)
        };


        // Reddit image slider - again. Need to put into a function

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
