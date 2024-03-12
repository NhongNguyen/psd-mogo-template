const headerToggle = document.querySelector(".header-toggle");
const headerMenu = document.querySelector(".header-menu");
const expandClass = "is-expand";
headerToggle.addEventListener("click", function () {
  headerMenu.classList.add(expandClass);
});
window.addEventListener("click", function (e) {
  if (!headerMenu.contains(e.target) && !e.target.matches(".header-toggle")) {
    headerMenu.classList.remove(expandClass);
  }
});
$(document).ready(function () {
  $(".quote-container").slick({
    prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fal fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><i class='fal fa-angle-right' aria-hidden='true'></i></button>",
    responsive: [{
      breakpoint: 767,
      settings: {
        arrows: false
      }
    }]
  });
});
$(document).ready(function () {
  $(".testimonial-container").slick({
    prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fal fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><i class='fal fa-angle-right' aria-hidden='true'></i></button>",
    responsive: [{
      breakpoint: 767,
      settings: {
        arrows: false
      }
    }]
  });
});