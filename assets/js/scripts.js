/* Reading status bar: */

const container = document.getElementById("reading-status-container");

let bar = document.createElement("div");

bar.style.height = "2px";
bar.style.width = "0";
bar.style.backgroundColor = "#EA1017";
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

var btn = $("#to-top-button");

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

/* Calculate age: */

var today = new Date();

var birthDate = new Date(1993, 0, 4);
var diff = today.getTime() - birthDate.getTime(); /* Miliseconds */
var diffDays = parseInt(diff / (24 * 60 * 60 * 1000));

days = document.getElementById("days");
days.innerHTML = diffDays;

if (today.getDate() < 4 && today.getMonth() == 0) {
  days.title = today.getFullYear() - 1 - 1993 + " anos";
} else {
  days.title = today.getFullYear() - 1993 + " anos";
}
