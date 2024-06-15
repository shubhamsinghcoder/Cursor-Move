window.addEventListener("mousemove", function (detail) {
  var circle = document.querySelector("#circle");

  var valx = gsap.utils.mapRange(
    0,
    window.innerWidth,
    100 + circle.getBoundingClientRect().width / 2,
    window.innerWidth - (100 + circle.getBoundingClientRect().width / 2),
    detail.clientX
  );

  var valy = gsap.utils.mapRange(
    0, window.innerHeight, 100+ circle.getBoundingClientRect().width/2, window.innerHeight - (100 + circle.getBoundingClientRect().width/2), detail.clientY
  )


gsap.to("#circle", {
  left: valx,
  top: valy,
  ease: Power3,
});
});
