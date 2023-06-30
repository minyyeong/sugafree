
$(function () {
  $(".menu > li")
    .mouseover(function () {
      $(this).children(".sub").stop().fadeIn(150);
    })
    .mouseout(function () {
      $(".sub").stop().fadeOut(100);
    });
});

$(function () {
  function prev() {
    $(".slide li:last").prependTo(".slide");
    $(".slide").css("margin-left", -1903);
    $(".slide").stop().animate({ marginLeft: 0 }, 800);
  }

  function next() {
    $(".slide")
      .stop()
      .animate({ marginLeft: -1903 }, function () {
        $(".slide li:first").appendTo(".slide");
        $(".slide").css({ marginLeft: 0 });
      });
  }

  function slide() {
    $(".slide")
      .stop()
      .animate({ marginLeft: -1903 }, function () {
        $(".slide li:first").appendTo(".slide");
        $(".slide").css({ marginLeft: 0 });
      });
  }

  setInterval(slide, 3000);

  $(".prev").click(function () {
    prev();
  });

  $(".next").click(function () {
    next();
  });
});
