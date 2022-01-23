window.onload = function () {
  setupReadingBar();
  setupHideNavbar();
  setupToTopButton();
};

function setupReadingBar() {
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

  function handleUpdateBar() {
    var scrollY = window.scrollY;

    // window.innerHeight = Height of the visible window display:
    var difference = container.clientHeight - window.innerHeight;

    var scroll = scrollY / difference;
    var position = scroll * 100;

    bar.style.width = position + "%";
  }

  document.addEventListener("scroll", handleUpdateBar);
}

function setupHideNavbar() {
  var prevScrollpos = window.pageYOffset;

  function handleHideNavbar() {
    var currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos) {
      document.getElementById("nav-wrapper").style.top = "0";
    } else {
      document.getElementById("nav-wrapper").style.top = "-100px";
    }

    prevScrollpos = currentScrollPos;
  }

  window.addEventListener("scroll", handleHideNavbar);
}

function setupToTopButton() {
  var toTopButton = document.getElementById("to-top-button");

  toTopButton.addEventListener("click", scrollToTop);

  function scrollToTop() {
    // For Safari:
    document.body.scrollTop = 0;

    // For Chrome, Firefox, IE and Opera:
    document.documentElement.scrollTop = 0;
  }

  function handleToTopButton() {
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      toTopButton.classList.add("show");
    } else {
      toTopButton.classList.remove("show");
    }
  }

  window.addEventListener("scroll", handleToTopButton);
}
