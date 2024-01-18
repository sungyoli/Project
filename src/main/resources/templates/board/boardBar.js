$(".list").on("click", function () {
  $(".title").toggleClass("on");
  $(".list li")
    .stop()
    .slideToggle(function () {});
});
