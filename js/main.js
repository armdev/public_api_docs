$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    $(this).parent().addClass('active').siblings().removeClass('active');
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 130
        }, 300);
        return false;
      }
    }
  });

  // Sticky sidebar
  var a = function () {
    var b = $(window).scrollTop();
    var d = $("#scroller-anchor").offset().top;
    var f = $("#site-footer").offset().top;
    var c = $("#site-sidebar");
    var h = $("#site-sidebar").height() + 35; // margin

    if (b > d) {
      var myTop = $(window).scrollTop() + 130;
      if (myTop > f - h) myTop = f - h;
      c.css({
        position: "absolute",
        top: myTop,
        bottom: ""
      })
    } else {
      if (b <= d) {
        c.css({
          position: "absolute",
          top: "",
          bottom: ""
        })
      }
    }
  };
  $(window).scroll(a);
  a();
});
