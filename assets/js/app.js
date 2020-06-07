$( document ).ready(function() {

  // Rotate the circular logos on window scroll
  $(function() {
    let rotation = 0, 
        scrollLoc = $(document).scrollTop();
    $(window).scroll(function() {
        const newLoc = $(document).scrollTop();
        const diff = scrollLoc - newLoc;
        rotation += diff * 0.5, scrollLoc = newLoc;
        const rotationStr = "rotate(" + rotation + "deg)";
        $(".scroll-rotate").css({
            "-webkit-transform": rotationStr,
            "-moz-transform": rotationStr,
            "transform": rotationStr
        });
    });
  });
  
  // Fade scroll to anchor links
  $("a.transition").click(function(event) {
    event.preventDefault();
    $("body").fadeOut(500, redirectPage.bind(this, this.href));
  });
    
  function redirectPage(link) {
    $("body").fadeIn(500);
    setTimeout(function () {
      window.location = link;
    }, 0);
  }
  
  // Case study carousel
  var $carousel = $('.carousel').flickity();
  
  // previous
  $('.previous').on( 'click', function() {
    console.log($carousel)
    $carousel.flickity('previous');
  });
  
  // next
  $('.next').on( 'click', function() {
    $carousel.flickity('next');
  });
});
