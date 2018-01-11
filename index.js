//Функционал галереи
var bigImage = document.querySelector('.gallery__big-item');
var smallImages = document.querySelector('.gallery__small-items').getElementsByTagName("img");

for (let i = 0; i < smallImages.length; i++) {
  smallImages[i].addEventListener('click', function() {
    while (bigImage.firstChild) {
      bigImage.removeChild(bigImage.firstChild);
    }
    bigImage.appendChild(smallImages[i].cloneNode());
  })
}

//Функционал кнопок в "интересном"
var interestingNavbarLinks = document.querySelectorAll('.interesting__navbar-link');
var interestingContents = document.querySelectorAll('.interesting__content');
var indexOfLastVisibleContent = 0;

for (let i = 0; i < interestingNavbarLinks.length; i++) {
  interestingNavbarLinks[i].addEventListener('click', function() {
    interestingNavbarLinks[indexOfLastVisibleContent].classList.remove('interesting__navbar-link_active');
    interestingContents[indexOfLastVisibleContent].classList.remove('interesting__content_visible');
    interestingNavbarLinks[i].classList.add('interesting__navbar-link_active');
    interestingContents[i].classList.add('interesting__content_visible');
    indexOfLastVisibleContent = i;
  })
}

//При max-width: 750px
var mobileMenu = document.querySelector('.mobile-menu');
var mobileMenuClose = document.querySelector('.mobile-menu_close');
var navbarLinks = document.querySelectorAll('.navbar__link');
var navbar = document.querySelector('.navbar');
var state = false;

mobileMenu.addEventListener('click', function() {
  navbar.classList.add('mobile-navbar_active');
  document.body.style.overflowY = "hidden";
  state = true;
})

mobileMenuClose.addEventListener('click', function() {
  navbar.scrollTop = 0;
  navbar.classList.remove('mobile-navbar_active');
  document.body.style.overflowY = "auto";
  state = false;
})

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener('click', function() {
    if (state === true) {
      navbar.scrollTop = 0;
      navbar.classList.remove('mobile-navbar_active');
      document.body.style.overflowY = "auto";
      state = false;
    }
  })
}