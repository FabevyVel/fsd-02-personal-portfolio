$(".mobile-toggle-trigger").click(function(event){
    event.preventDefault()
    console.log(event);
   
$(".navigation").toggle() 

})

$(document).ready (function () {
    $(".drop-items").hover (function () {
        $(this).find(".drop-one") .slideToggle(200);
    })
})
  



$(document).ready(function (){

  $('.slider').slick({
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
})




