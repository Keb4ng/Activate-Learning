$(document).ready(function () {
  $(".accordion").click(function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this).next(".panel").slideUp();
    } else {
      $(".accordion").removeClass("active");
      $(".panel").slideUp();

      $(this).addClass("active");
      $(this).next(".panel").slideDown();
    }
  });
});
