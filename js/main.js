
function linkAction(){
 




    $('.banner-slider1').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots:false,
        arrows:false,
        autoplaySpeed: 2000,
        // nextArrow:'<i class="fas fa-chevron-left  next-arrow"></i>',
        // prevArrow:'<i class="fas fa-chevron-right  previous-arrow"></i>',
       
        responsive: [
          {
            breakpoint: 992,
            settings: {
          
            }
          },
          {
            breakpoint: 768,
            settings: {
         
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
    








    }







    (function( $ ) {

      $.fn.numberstyle = function(options) {
    
        /*
         * Default settings
         */
        var settings = $.extend({
          value: 0,
          step: undefined,
          min: undefined,
          max: undefined
        }, options );
    
        /*
         * Init every element
         */
        return this.each(function(i) {
            
          /*
           * Base options
           */
          var input = $(this);
              
          /*
           * Add new DOM
           */
          var container = document.createElement('div'),
              btnAdd = document.createElement('div'),
              btnRem = document.createElement('div'),
              min = (settings.min) ? settings.min : input.attr('min'),
              max = (settings.max) ? settings.max : input.attr('max'),
              value = (settings.value) ? settings.value : parseFloat(input.val());
          container.className = 'numberstyle-qty';
          btnAdd.className = (max && value >= max ) ? 'qty-btn qty-add disabled' : 'qty-btn qty-add';
          btnAdd.innerHTML = '+';
          btnRem.className = (min && value <= min) ? 'qty-btn qty-rem disabled' : 'qty-btn qty-rem';
          btnRem.innerHTML = '-';
          input.wrap(container);
          input.closest('.numberstyle-qty').prepend(btnRem).append(btnAdd);
    
          /*
           * Attach events
           */
          // use .off() to prevent triggering twice
          $(document).off('click','.qty-btn').on('click','.qty-btn',function(e){
            
            var input = $(this).siblings('input'),
                sibBtn = $(this).siblings('.qty-btn'),
                step = (settings.step) ? parseFloat(settings.step) : parseFloat(input.attr('step')),
                min = (settings.min) ? settings.min : ( input.attr('min') ) ? input.attr('min') : undefined,
                max = (settings.max) ? settings.max : ( input.attr('max') ) ? input.attr('max') : undefined,
                oldValue = parseFloat(input.val()),
                newVal;
            
            //Add value
            if ( $(this).hasClass('qty-add') ) {   
              
              newVal = (oldValue >= max) ? oldValue : oldValue + step,
              newVal = (newVal > max) ? max : newVal;
              
              if (newVal == max) {
                $(this).addClass('disabled');
              }
              sibBtn.removeClass('disabled');
             
            //Remove value
            } else {
              
              newVal = (oldValue <= min) ? oldValue : oldValue - step,
              newVal = (newVal < min) ? min : newVal; 
              
              if (newVal == min) {
                $(this).addClass('disabled');
              }
              sibBtn.removeClass('disabled');
              
            }
              
            //Update value
            input.val(newVal).trigger('change');
                
          });
          
          input.on('change',function(){
            
            const val = parseFloat(input.val()),
                  min = (settings.min) ? settings.min : ( input.attr('min') ) ? input.attr('min') : undefined,
                  max = (settings.max) ? settings.max : ( input.attr('max') ) ? input.attr('max') : undefined;
            
            if ( val > max ) {
              input.val(max);   
            }
            
            if ( val < min ) {
              input.val(min);
            }
          });
          
        });
      };
    
      
      /*
       * Init
       */
      
      $('.numberstyle').numberstyle();
    
    }( jQuery ));
    
    
 












const stars = document.querySelectorAll("#star");

stars.forEach((star) => {
    let duration = Math.random() * (1.2 - 0.6) + 0.6;
    star.style.animation = `stars $(duration)s infinite linear`;
});

window.addEventListener("load" , () => {
    const preloader = document.querySelector(".preloader");
    preloader.classList.add("preload-finish");
});