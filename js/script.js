// const progressCircle = document.querySelector(".autoplay-progress svg");
// const progressContent = document.querySelector(".autoplay-progress span");
// var swiper = new Swiper(".mySwiper", {
//   spaceBetween: 30,
//   centeredSlides: true,
//   autoplay: {
//     delay: 10000,
//     disableOnInteraction: false
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev"
//   },
//   on: {
//     autoplayTimeLeft(s, time, progress) {
//       progressCircle.style.setProperty("--progress", 1 - progress);
//       progressContent.textContent = `${Math.ceil(time / 1000)}s`;
//     }
//   }
// });



const prime = document.querySelector("nav");
const remove = document.querySelector(".getsign");
const scrollWatcher = document.createElement("div");
console.log(remove);
scrollWatcher.setAttribute("data-scroll-watcher", " ");
prime.before(scrollWatcher);

const navObserver = new IntersectionObserver((entries) => {
  prime.classList.toggle("sticking", !entries[0].isIntersecting)
  remove.classList.toggle("remove", !entries[0].isIntersecting)
}, { rootMargin: "200px 0px 0px 0px" });

navObserver.observe(scrollWatcher);


function btnMobile() {
  var navLinks = document.querySelector('.list-group');
  navLinks.style.display = (navLinks.style.display === 'none' || navLinks.style.display === '') ? 'block' : 'none';
}

const closeBtn = document.getElementById('btnclose');
closeBtn.addEventListener('click', btnMobile);


// Scroll back to the top of the page
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  var button = document.querySelector(".to-top");
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}


//DROPDOWN SECTION

var dropdowns = document.querySelectorAll(".dropdown");

function toggleDropdown() {
  var dropdownMenu = this.querySelector(".dropdown-menu");
  var arrowIcon = this.querySelector(".arrow-icon i");

  if (dropdownMenu.style.display === "block") {
    dropdownMenu.style.display = "none";
    arrowIcon.style.transform = "rotate(0deg)";
  } else {
    dropdownMenu.style.display = "block";
    arrowIcon.style.transform = "rotate(180deg)";
  }
}

dropdowns.forEach(function (dropdown) {
  dropdown.addEventListener("click", toggleDropdown);
  

  // Add the hover effect for all screens
  dropdown.addEventListener("mouseover", function () {
    var arrowIcon = this.querySelector(".arrow-icon i");
    arrowIcon.style.transform = "rotate(180deg)";
  });

  dropdown.addEventListener("mouseout", function () {
    var arrowIcon = this.querySelector(".arrow-icon i");
    arrowIcon.style.transform = "rotate(0deg)";
  });
});

