


$(document).ready(function(){
	console.log('it works');
  $(".film-container").addClass("active");
  
});

$(".film-button").click(function (e) {
     e.preventDefault();
     console.log('inside click')
     $(".film-container").removeClass("active");
     var contentid = $(this).attr("href");
     $(contentid).addClass("active");
    
 });


		
// });


  // $('.carousel-content').slick({
  //     prevArrow:"<img class='a-left control-c prev slick-prev' src='icon.jpg'>",
  //     nextArrow:"<img class='a-right control-c next slick-next' src='../images/shoe_story/arrow-right.png'>"
  // });

  

  //when you click on "narrative-button", class of "narratives" shows and all other film display none 


