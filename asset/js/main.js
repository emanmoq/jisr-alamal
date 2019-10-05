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
        items:4,
        margin:15,
    });
    $('.newsSlider').owlCarousel({
        loop:true,
        items:3,
        margin:30
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
