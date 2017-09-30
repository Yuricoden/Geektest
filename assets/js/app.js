// $('.slider').slick({
// 	//dots: true,
// 	arrows:true,
// 	  adaptiveHeight: true,
// 	infinite: true,
// 	centerMode: true,
// 	centerPadding: '10%',
// 	slidesToShow: 3,
// 	speed: 500,
// responsive: [{

//       breakpoint: 992,
//       settings: {
//         	arrows:true,
// 	  adaptiveHeight: true,
// 	infinite: true,
// 	centerMode: true,
// 	centerPadding: '10%',
// 	slidesToShow: 2,
// 	speed: 500,
//       }

//     }]
// });


$('.section_keren .slider_keren').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  adaptiveHeight: true,
        mobileFirst: true
});


$('.section_keren .slider_absolute').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.section_keren .slider_keren',
  centerMode: true,
  focusOnSelect: true
});

$(function () {
 
  $(".rateYo").rateYo({
    starWidth: "35px",
    rating: "85%"
  });
});

$(function () {
 
  $(".ratetwo").rateYo({
    starWidth: "35px",
    rating: "55%"
  });
});


$(function () {
 
  $(".ratethree").rateYo({
    starWidth: "35px",
    rating: "45%"
  });
});

 $('.guitar_slides').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  asNavFor: '.wrapper_cards',
fade:true
});

$('.wrapper_cards').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.guitar_slides',
  dots: true,
  focusOnSelect: true,
  prevArrow:false,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      },
     
    }
    ]
})

