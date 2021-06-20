/* Reading status bar (causing short delay while scrolling): */

const container = document.getElementById("container");

let bar = document.createElement("div");

bar.style.height = "2px";
bar.style.width = "0";
bar.style.backgroundColor = "#9e0b0f";
bar.style.position = "fixed";
bar.style.top = "0px";
bar.style.left = "0";
bar.style.zIndex = "9999";
bar.style.transition = "0.1s";

document.body.append(bar);

function updateBar() {
  // Top position on y-axis:
  var scrollY = window.scrollY;

  // window.innerHeight = Height of the visible window display:
  var difference = container.clientHeight - window.innerHeight;

  var scroll = scrollY / difference;
  var position = scroll * 100;

  bar.style.width = position + "%";
}

window.addEventListener("load", () => {
  document.addEventListener("scroll", updateBar);
});

/* Hiding navbar on scroll: */

var prevScrollpos = window.pageYOffset;

window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav-wrapper").style.top = "0";
  } else {
    document.getElementById("nav-wrapper").style.top = "-100px";
  }

  prevScrollpos = currentScrollPos;
};

/* Back to top button: */

var btn = $("#top-button");

$(window).scroll(function () {
  if ($(window).scrollTop() > 200) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "200");
});
