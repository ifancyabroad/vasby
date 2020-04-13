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