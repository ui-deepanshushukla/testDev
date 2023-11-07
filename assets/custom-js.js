$('.slider-single-img').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows:false,
  fade: true,
  asNavFor: '.slider-nav-content',
  responsive: [
    {
      breakpoint: 768, // Adjust the breakpoint as needed
      settings: {
        slidesToShow: 2, // Number of slides to show
        slidesToScroll: 1, // Number of slides to scroll
        arrows: true, // Show arrows
        fade: false, // Disable fade effect
      }
    },
    {
      breakpoint: 992, // Another breakpoint if needed
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    }
    // Add more breakpoints and settings as necessary
  ]
});

$('.slider-nav-content').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.slider-single-img',
  arrows: true,
  autoplay:true,
  autoplaySpeed:1500,
  centerMode: true,
  fade: !0,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 768, // Adjust the breakpoint as needed
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 992, // Another breakpoint if needed
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    }
    // Add more breakpoints and settings as necessary
  ]
});

$('.ced-slider').slick({
    autoplay: false,
    arrow: true,
    dots: false,
    infinite: false,
    speed: 500,
    prevArrow: `<button type="button" class="slick-prev slick-arrow col-slider" aria-label="Previous"><svg aria-hidden="true" focusable="false" class="icon icon-caret" viewBox="0 0 10 6">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z" fill="currentColor">
</path></svg>
</button>`,
    nextArrow: `<button class="slick-next slick-arrow col-slider" aria-label="Next" type="button"><svg aria-hidden="true" focusable="false" class="icon icon-caret" viewBox="0 0 10 6">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z" fill="currentColor">
</path></svg>
   </button>`,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [{
            breakpoint: 1024,
            settings: {
                autoplay: true,
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 767,
            settings: {
                autoplay: true,
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }
    ]
});