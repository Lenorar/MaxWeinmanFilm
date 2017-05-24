$(document).ready(function(){
    console.log('working');
    $('.gallery').hide();
    $('#lames').show();
    $('.button').css('color', 'white');
 

    // $(".film-container").addClass("active");


  
     $('.button').click(function () {
        var $this = $(this);
        var element = $this.attr('href');

        if ($('.gallery').is(':hidden')) {
            $('.sub-nav').css('background-color', 'green');

            $('.gallery').hide();
            $(element).fadeIn('slow');
            $(this).css('color','#b5decb');    
            // $(this).addClass("color-active");  

            $('.sub-nav').css('background-color', 'orange');
        }

        // function reset(this)
        //         {
        //           $(this).removeAttr('style');
        //         }
    });
});
