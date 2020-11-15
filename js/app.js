$(function() {
    
    $('#worksSlider').slick ({
        vertical: true,
        arrows: false,
        autoplay: true,
        verticalSwiping: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        infinite: false,
        adaptiveHeight: true,
        dots: true
    });
    
    const navToggle = $("#navToggle"); 
    const nav = $("#nav"); 
    
    navToggle.on("click", function(event) {
        event.preventDefault();
        
        nav.toggleClass("show");
    });
    
});