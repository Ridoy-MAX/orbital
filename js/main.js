
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








 












const stars = document.querySelectorAll("#star");

stars.forEach((star) => {
    let duration = Math.random() * (1.2 - 0.6) + 0.6;
    star.style.animation = `stars $(duration)s infinite linear`;
});

window.addEventListener("load" , () => {
    const preloader = document.querySelector(".preloader");
    preloader.classList.add("preload-finish");
});