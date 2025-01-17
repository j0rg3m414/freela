$(document).ready(function() {
    
    $('.parallax').parallax();

    $("nav").mouseover(function(){
        $(".nav-itens").addClass("nav-show");          
    });
    $("nav").mouseout(function(){
        $(".nav-itens").removeClass("nav-show");        
    });

    $("a.tooltip").mouseover(function(){
        var texto = $(this).attr('data-tooltip');
        $(this).children(".text_tooltip").html(texto);
        $(this).children(".text_tooltip").css('opacity', '1');
    });

    $("a.tooltip").mouseout(function(){
        $(this).children(".text_tooltip").css('opacity', '0');
    });

    $(".text_tooltip").mouseover(function(e){
        e.stopPropagation();
    });

    var page = $('html, body');
    $('a.tooltip').click(function() {
    page.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
    });

    $(document).scroll(function(){
        var topWindow = $(window).scrollTop();
        if(topWindow > 60) {
           $("header").addClass('header_fixed');
        }else {
           $("header").removeClass('header_fixed');
        };
    });

    $(window).on('scroll', _.debounce(function() {
        var $nav = $('nav'),
            navHeight = $nav.outerHeight(),
            windowTop = $(this).scrollTop();
        
        if (windowTop > navHeight) {
            $nav.addClass('small');
            $('nav > a').text('TC');
        } else {
            $nav.removeClass('small');
            $('nav > a').text('The Company');
        }
    }, 200));
});