const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    breakpoints: {
      1024: {
        slidesPerView: 3
      }
    },
    navigation: {
      nextEl: ".carousel-button-next",
      prevEl: ".carousel-button-prev",
    },
  });