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

console.log(bigImage);

//Функционал кнопок в "интересном"
var interestingNavbarLinks = document.querySelectorAll('.interesting__navbar-link');
var interestingContents = document.querySelectorAll('.interesting__content');
var indexOfLastVisibleContent = 0;

for (let i = 0; i < interestingNavbarLinks.length; i++) {
  interestingNavbarLinks[i].addEventListener('click', function() {
    // console.log(interestingNavbarLinks[i].classList.contains('interesting__content_visible'));
    interestingNavbarLinks[indexOfLastVisibleContent].classList.remove('interesting__content_visible');
    interestingNavbarLinks[i].classList.add('interesting__content_visible');
    indexOfLastVisibleContent = i;
  })
}

console.log(interestingNavbarLinks.length);