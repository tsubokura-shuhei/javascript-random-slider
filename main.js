var $slideshow = $(".slideshow");
var $slide = $(".slide");

function randomize(selector) {
  $slideshow
    .find(selector)
    .sort(function () {
      return Math.round(Math.random()) - 0.5;
    })
    .detach()
    .appendTo($slideshow);
}

$(function () {
  randomize(".slide");
  $slideshow.slick($slide);
});
