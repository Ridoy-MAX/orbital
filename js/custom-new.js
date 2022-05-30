 
$(document).ready(function(){ 
      //slider start;
    $('.banner-slider').slick({
        autoplay: false,
        autoplaySpeed: 1800, 
        dots: false,
       
        arrows:true,
        prevArrow:'<i class="fas fa-chevron-left  previous-arrow"></i>',
        nextArrow:'<i class="fas fa-chevron-right  next-arrow"></i>',
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
//slider start;

//new procdut slider start;
$('.new-product-banner').slick({
   autoplay: true,
  autoplaySpeed: 1800, 
  dots: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows:true,
  prevArrow:'<i class="fas fa-chevron-left  previous-arrow"></i>',
  nextArrow:'<i class="fas fa-chevron-right  next-arrow"></i>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
       
       
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]

  });
 //new procdut slider ENd;


 //new testi slider start;
 $('.testi-banner').slick({
  autoplay: true,
  autoplaySpeed: 1800, 
  dots: false,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows:true,
  prevArrow:'<i class="fas fa-chevron-left  previous-arrow"></i>',
  nextArrow:'<i class="fas fa-chevron-right  next-arrow"></i>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
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

    //new testi slider end;



         /* Periodic Timer. Period is equal 10 days */
         $('#periodic-timer_period_days').syotimer({
          date: new Date(2050, 18, 19, 20, 30),
          layout: "dhms",
          periodic: true,
          periodInterval: 10,
          periodUnit: "d",
        });
          /* Periodic Timer. Period is equal 10 days */

  
     //about-counter;
  
      $('.counter').counterUp({
        delay: 10,
        time: 2000
      });

       //about patner slider START;
       $('.patner-slider').slick({
        autoplay: true,
        autoplaySpeed: 1800, 
        dots: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode:true,
       centerPadding:'0px',
        arrows:true,
        prevArrow:'<i class="fas fa-chevron-right  previous-arrow"></i>',
        nextArrow:'<i class="fas fa-chevron-left  next-arrow"></i>',
        responsive: [
          {
            breakpoint: 992,
            settings: {
          
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
            
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      
        });
         //about patner slider END;

    

         //Integration with fancybox plugin
        $("input[type='number']").inputSpinner();



          //Product sliser 1

       $('.product-slider1').slick({
        autoplay: false,
        autoplaySpeed: 1800, 
        dots: false,
       
        arrows:false,
        asNavFor:'.product-slider2',
        draggable: false,
       

      });
             //Product sliser 2
       $('.product-slider2').slick({
        autoplay: false,
        autoplaySpeed: 1800, 
        dots: false,
        slidesToShow: 3,
        arrows:false,
        asNavFor:'.product-slider1',
        focusOnSelect: true,
        draggable: false,

      });

         //Simple usage
      
        
         
         $('.light-zoom').lightzoom({
             zoomPower   : 3,    //Default
             glassSize   : 280,  //Default
         });
 
       



});   



 /*=============== SCROLL REVEAL ANIMATION ===============*/
//  const sr = ScrollReveal({
//   distance: '60px',
//   duration: 2500,
//   delay: 400,
//   reset: true
//   })

//   sr.reveal(`.navbar, .img`,{delay: 400})
//   sr.reveal(`.quality`,{delay: 300})
//   sr.reveal(` .footer-details, .footer-contact, .footer-my-acount, .footer-sing-up `,{delay: 100, origin: 'top'})

//   sr.reveal(`.navbar, .banner, .banner-s2 `,{origin: 'top', interval: 50})
//   sr.reveal(`  .our-blog, .footer-top`,{origin: 'left', interval: 50})

//   sr.reveal(``,{origin: 'top'})
//   sr.reveal(``)
