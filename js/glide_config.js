document.addEventListener('DOMContentLoaded', function () {
  new Glide('.glide', {
    type: 'carousel',
    perView: 5,
    focusAt: 'center',
    autoplay: 3000,
    hoverpause: true,
    gap: 20,
    breakpoints: {
      800: { perView: 2 },
      480: { perView: 1 }
    }
  }).mount();
});