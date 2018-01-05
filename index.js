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