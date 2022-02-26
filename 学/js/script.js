let images = $(".grid img");

let svgRegex = /svg$/;

$.each(images, function (i, image) {
  if (svgRegex.test(image.src)) {
    $(this).addClass("is-svg");
  }
});