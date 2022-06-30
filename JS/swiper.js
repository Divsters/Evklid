document.addEventListener('DOMContentLoaded', function() {
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
          return `<button class="btn btn_round ${className}" aria-label="Переключение слайда"></button>`
      }
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
})

$('.swiper-pagination-bullet').each(function (index) {
  var bullet = $(this);
  bullet.attr('id', (index + 1));
});

$('.swiper-pagination').each(function (){
  $('.swiper-pagination-bullet').attr('tabindex', 0);
  $('.swiper-pagination-bullet').on('keydown', function (event){
      if(event.keyCode == '13'){
          console.log($(this))
          var mySwiper = document.querySelector('.swiper-container').swiper;
          var slideID = $(this).attr('id')
          mySwiper.slideTo(slideID-1);
      }
  })
})
