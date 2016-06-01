$(function() {
  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    $(window).off('scroll');

    $('a').each(function () {
      $(this).parent().removeClass('active');
    })
    $(this).parent().addClass('active');

    var target = this.hash,
        menu = target;
    $target = $(target);
    $('html, body').stop().animate({
      'scrollTop': $target.offset().top - 130
    }, 500, 'swing', function () {
      window.location.hash = target;
      $(window).on('scroll', onScroll);
    });
  });

  var onScroll = function() {
    var scrollPos = $(document).scrollTop() + 130;

    $('#site-sidebar a').each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr('href'));
      var menuClass = 'active';

      if ( currLink.parent().has('.sidebar-sub-menu').length == 1 ) {
        menuClass += ' open';
      }

      if (refElement.offset().top <= scrollPos && refElement.offset().top + refElement.outerHeight() > scrollPos) {
        $('#site-sidebar a').removeClass(menuClass);
        currLink.parent().addClass(menuClass);
      } else {
        currLink.parent().removeClass(menuClass);
      }
    });
  }

  $(window).on('scroll', onScroll);
});
