$(document).ready(function () {
  
    $('.heroSlider').owlCarousel({
        loop:true,
        nav:true,
        dots:true,
        items:1,
        navText: ["<i class='lni-chevron-left'></i>", " <i class='lni-chevron-right'></i>"]
    
    });
      
    $('.workSlider').owlCarousel({
        loop:true,
        nav:true,
        dots:true,
        margin:15,
        responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items:4
          }
      }
    });
    $('.newsSlider').owlCarousel({
        loop:true,
 
        margin:30,
        responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:3
          }
      }
    });
    $('.TestSlider').owlCarousel({
        loop:true,
        nav:true,
        items:1,
        navText: ["<i class='fas fa-chevron-left'></i>", " <i class='fas fa-chevron-right'></i>"]
    });
    $(window).scroll(function () {
        scrollTop = $(window).scrollTop();

         if( scrollTop >$('.main-menu').height()){
            $('.main-menu').addClass('scrollNav');


         }
         else{
            $('.main-menu').removeClass('scrollNav');    

         }
         
   
        });
        var counters = $(".countnum");
  var countersQuantity = counters.length;
  var counter = [];

  for (i = 0; i < countersQuantity; i++) {
    counter[i] = parseInt(counters[i].innerHTML);
  }

  var count = function(start, value, id) {
    var localStart = start;
    setInterval(function() {
      if (localStart < value) {
        localStart++;
        counters[id].innerHTML = localStart;
      }
    }, 5);
  }

  for (j = 0; j < countersQuantity; j++) {
    count(0, counter[j], j);
  }

    

                
});
