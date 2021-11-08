$(function(){

    $('a.ir').click(function(){
        var donde =$(this).attr("href");

        $("html,body").animate({
            scrollTop: $(donde).offset().top -142

        },1000);

    });

    $('.flecha').click(function(){
        $("html,body").animate({
            scrollTop: 0

        },1000);
    });

    $(window).scroll(function(){
        if($(this).scrollTop()>200){
            $('.flecha').fadeIn();
        }else{
            $('.flecha').fadeOut();
        }

    });
 
});