$(document).ready(function(){

  start();
  var skills =
   [
    { cl: "skills0-img",
      sr: 'images/jquery.png',
      name: '[ JQUERY ] ' },
    { cl: "skills1-img",
      sr: 'images/html.png',
      name: '[ HTML ]'},
    { cl: 'skills2-img' ,
      sr: 'images/css.png',
      name: '[ CSS ]' },
    { cl: 'skills3-img',
      sr: 'images/laravel.png',
      name: '[ LARAVEL ]' },
    { cl: 'skills4-img',
      sr: 'images/bootstrap.png',
      name: '[ BOOTSTRAP ]' },
    { cl: 'skills5-img',
      sr: 'images/rails.png',
      name: '[ RUBY ON RAILS ]' },
    { cl: 'skills6-img',
      sr: 'images/javascript.png',
      name: '[ JAVASCRIPT ]' },
    { cl: 'skills7-img',
      sr: 'images/angular.png',
      name: '[ ANGULAR ]' },
    { cl: 'skills8-img',
      sr: 'images/php.png',
      name: '[ PHP ]'}
  ]

  function start() {
    $("html,body").animate({scrollTop: 0}, 100);
    $('body').css("overflow", "hidden");
    $(".name-first").show("blind", 1000) && $(".name-last").show("drop",1000);
    var i = 0;
    $(".enter-btn").delay(3000).fadeIn(1000);
    $('.skills').css("visibility", "visible");
    document.addEventListener('touchmove', function(evt) {
    evt.preventDefault();
});

    function myLoop() {

      setTimeout(function(){

        $(".my-img").append($(" <img class= " + skills[i].cl + " src= " + skills[i].sr + " height='0px'  /> "))
        $('.skills').text(" " + skills[i].name + " ");
        if (window.innerWidth < "600") {
          topsk = "5%";
        }else{
          topsk = "10%";
        }
        // console.log(topsk);
        // console.log(window.innerWidth);
        $('.skills').animate({
          top: topsk,
        },1000);

        // console.log(window.innerWidth);
        if (window.matchMedia( "(max-width: 600px)").matches) {
          heightsk = "40px";
          widthsk = "40px";
          topskk= "200%";
        } else if (window.matchMedia( "(max-width: 1500px)").matches) {
          topskk = "150%";
          heightsk = "50px";
          widthsk = "50px";
        } else if (mq = window.matchMedia( "(min-width: 1501px)").matches) {
          topskk = "150%";
          heightsk= "100px";
          widthsk = "100px";
        }
        console.log(innerWidth);
        $(".skills" + i + "-img").animate({
          "top": topskk,
          "left": "-3%",
          "height": heightsk,
          "width" : widthsk
        },1000);

        i++;
        if (i <= 8) {
          myLoop();
        }

        if ($('.skills').text() === " [ PHP ] ") {
          setTimeout(function(){
            $('.skills').hide();
          },500)

        }
    },1000)
  };
    myLoop();
}

    function startwm() {
      $('body').css("overflow", "auto");
      $('html , body').animate({
        scrollTop: $(".wandermunch").offset().top
      },1000)
      $('body').css("overflow", "hidden");
      var spanWidth = $('.wm span').width();
      $('.wm').animate( { width: spanWidth}, 1000, 'swing' );
      if (window.matchMedia('(max-width:600px)'.matches)) {
        leftwm = "0px";
      } else {
        leftwm = "220px";
      }
      setTimeout(function(){
        $(".description").fadeIn(1000);
        $(".go-to").css({visibility: "visible"}).animate({left: leftwm},1000);
      },1000);

      var currentIndex = 0,
      items = $('.container div');
      itemAmt = items.length;
      var loopi = 0;
      function cycleItems() {
        var item = $('.container div').eq(currentIndex);
        items.hide();
        loopi++
        item.css('display','inline-block');
        $('.container').animate({left:0},1000);
        setTimeout(function(){
            $('.next, .prev').css('visibility', 'visible');
        },100)
      }
      var autoSlide = setInterval(function() {
        currentIndex += 1;
        if (currentIndex > itemAmt - 1) {
          currentIndex = 0;
        }
        cycleItems();
      }, 2000);
      $('.next').click(function() {
        clearInterval(autoSlide);
        currentIndex += 1;
        if (currentIndex > itemAmt - 1) {
          currentIndex = 0;
        }
        cycleItems();
      });
      $('.prev').click(function() {
        clearInterval(autoSlide);
        currentIndex -= 1;
        if (currentIndex < 0) {
          currentIndex = itemAmt - 1;
        }
        cycleItems();
      });

    };

    $(".enter-btn").unbind().click(function(){
      startwm();
    });

    $(".slide-up-intro").unbind().click(function(){
      for (i=0; i <=8; i++ ) {
        $('.skills' + i + '-img').remove();
      }
      start();
      $('.skills').show();
    });

    var iii=0
    $('.slide-down').unbind().click(function(){
      if (iii == 0) {
        startredd();
        iii++;
      } else {
        $('html, body').animate({
          scrollTop: $('.reddit-div').offset().top
        });
      }

    });

    function startredd(){
      $('body').css("overflow", "auto");
      $('html , body').animate({
        scrollTop: $(".reddit-div").offset().top
      },1000);
      $('body').css("overflow", "hidden");


      $('.redd-logo').delay(800).animate({
        top: "600px",
        left: "1250px"
      },2000)

      $('.go-to1').delay(800).fadeIn("slow","swing")
      $('.go-to1').mouseover(function(){
        this.animate({

        })
      })
      $('.redd-desc').delay(800).fadeIn("slow","swing")
      imu = $('.imu')
      clone = $('.clone')
      imu.animate({left: "27%"},1000).rotate({endDeg: 360, persist: true, duration:1}).animate({fontSize: "200%"})
      clone.rotate({endDeg: 90, persist: true, duration: 0.2}).animate({top: '0px'}).rotate({endDeg:0, persist:true},200)
      .animate({left: 175, fontSize:"200%"},600)

      var currentIndexrd = 0,
      itemsrd = $('.rd-slider div'),
      itemAmtrd = itemsrd.length;
      $('.show-slider ').mouseover(function(){
        $('.redd-desc').animate({top: "200px"},500)
        $('.rd-slider ').animate({top: "400px"},1000);
      })


      function cycleItemsrd() {
        var itemrd = $('.rd-slider div').eq(currentIndexrd);
        itemsrd.hide();
        itemrd.css('display','inline-block');
        setTimeout(function(){
            // $('.next1, .prev1').delay(2000).fadeIn("slow","swing");
        },2000)
      }

      var autoSliderd = setInterval(function() {
        currentIndexrd += 1;
        if (currentIndexrd > itemAmtrd - 1) {
          currentIndexrd = 0;
        }
        cycleItemsrd();
      }, 3000);

      $('.next1').click(function() {
        clearInterval(autoSliderd);
        currentIndexrd += 1;
        if (currentIndexrd > itemAmtrd - 1) {
          currentIndexrd = 0;
        }
        cycleItemsrd();
      });

      $('.prev1').click(function() {
        clearInterval(autoSliderd);
        currentIndexrd -= 1;
        if (currentIndexrd < 0) {
          currentIndexrd = itemAmtrd - 1;
        }
        cycleItemsrd();
      });
      $('.slide-up').unbind().click(function(){
        $('html,body').animate({
          scrollTop: $('.wandermunch').offset().top
        },1000)
      });
    }







})



////////////////////

$.fn.rotate=function(options) {
  var $this=$(this), prefixes, opts, wait4css=0;
  prefixes=['-Webkit-', '-Moz-', '-O-', '-ms-', ''];
  opts=$.extend({
    startDeg: false,
    endDeg: 360,
    duration: 1,
    count: 1,
    easing: 'linear',
    animate: {},
    forceJS: false
  }, options);

  function supports(prop) {
    var can=false, style=document.createElement('div').style;
    $.each(prefixes, function(i, prefix) {
      if (style[prefix.replace(/\-/g, '')+prop]==='') {
        can=true;
      }
    });
    return can;
  }

  function prefixed(prop, value) {
    var css={};
    if (!supports.transform) {
      return css;
    }
    $.each(prefixes, function(i, prefix) {
      css[prefix.toLowerCase()+prop]=value || '';
    });
    return css;
  }

  function generateFilter(deg) {
    var rot, cos, sin, matrix;
    if (supports.transform) {
      return '';
    }
    rot=deg>=0 ? Math.PI*deg/180 : Math.PI*(360+deg)/180;
    cos=Math.cos(rot);
    sin=Math.sin(rot);
    matrix='M11='+cos+',M12='+(-sin)+',M21='+sin+',M22='+cos+',SizingMethod="auto expand"';
    return 'progid:DXImageTransform.Microsoft.Matrix('+matrix+')';
  }

  supports.transform=supports('Transform');
  supports.transition=supports('Transition');

  opts.endDeg*=opts.count;
  opts.duration*=opts.count;

  if (supports.transition && !opts.forceJS) { // CSS-Transition
    if ((/Firefox/).test(navigator.userAgent)) {
      wait4css=(!options||!options.animate)&&(opts.startDeg===false||opts.startDeg>=0)?0:25;
    }
    $this.queue(function(next) {
      if (opts.startDeg!==false) {
        $this.css(prefixed('transform', 'rotate('+opts.startDeg+'deg)'));
      }
      setTimeout(function() {
        $this
          .css(prefixed('transition', 'all '+opts.duration+'s '+opts.easing))
          .css(prefixed('transform', 'rotate('+opts.endDeg+'deg)'))
          .css(opts.animate);
      }, wait4css);

      setTimeout(function() {
        $this.css(prefixed('transition'));
        if (!opts.persist) {
          $this.css(prefixed('transform'));
        }
        next();
      }, (opts.duration*1000)-wait4css);
    });

  } else { // JavaScript-Animation + filter
    if (opts.startDeg===false) {
      opts.startDeg=$this.data('rotated') || 0;
    }
    opts.animate.perc=100;

    $this.animate(opts.animate, {
      duration: opts.duration*1000,
      easing: $.easing[opts.easing] ? opts.easing : '',
      step: function(perc, fx) {
        var deg;
        if (fx.prop==='perc') {
          deg=opts.startDeg+(opts.endDeg-opts.startDeg)*perc/100;
          $this
            .css(prefixed('transform', 'rotate('+deg+'deg)'))
            .css('filter', generateFilter(deg));
        }
      },
      complete: function() {
        if (opts.persist) {
          while (opts.endDeg>=360) {
            opts.endDeg-=360;
          }
        } else {
          opts.endDeg=0;
          $this.css(prefixed('transform'));
        }
        $this.css('perc', 0).data('rotated', opts.endDeg);
      }
    });
  }

  return $this;
};
