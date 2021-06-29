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



$('.logo-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
});











