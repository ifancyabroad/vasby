$(document).ready(function () {

  // Rotate the circular logos on window scroll
  $(function () {
    let rotation = 0,
      scrollLoc = $(document).scrollTop();
    $(window).scroll(function () {
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
  $("a.transition").click(function (event) {
    event.preventDefault();
    $("body").fadeOut(500, redirectPage.bind(this, this.href));
  });

  function redirectPage(link) {
    $("body").fadeIn(500);
    setTimeout(function () {
      window.location = link;
    }, 0);
  }

  // See more button
  $('.see-more').click(function () {
    $('.case-study').each(function (i) {
      if ($(this).hasClass('d-none')) {
        $(this).removeClass('d-none');
      }
    });

    $('.see-more-container').addClass('d-none');
  })

  // Case study carousel
  var $carousel = $('.carousel').flickity();

  // previous
  $('.previous').on('click', function () {
    console.log($carousel)
    $carousel.flickity('previous');
  });

  // next
  $('.next').on('click', function () {
    $carousel.flickity('next');
  });

  // Copy to clipboard
  $('.clipboard-copy').click(function () {
    var text = this.textContent;

    if (window.clipboardData && window.clipboardData.setData) {
      // Internet Explorer-specific code path to prevent textarea being shown while dialog is visible.
      return clipboardData.setData("Text", text);
    } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
      var textarea = document.createElement("textarea");
      textarea.textContent = text;
      textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in Microsoft Edge.
      document.body.appendChild(textarea);
      textarea.select();
      try {
        $(this).parent().addClass('copied');
        $(this).replaceWith('<span>Copied!</span>')
        return document.execCommand("copy");  // Security exception may be thrown by some browsers.
      }
      catch (ex) {
        console.warn("Copy to clipboard failed.", ex);
        return false;
      }
      finally {
        document.body.removeChild(textarea);
      }
    }
  });
});
