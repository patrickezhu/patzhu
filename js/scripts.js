// scripts.js

let currentIndex = 0;
const images = document.querySelectorAll('.carousel-images img');
const imageContainer = document.querySelector('.carousel-images .image-container');
const caption = document.querySelector('.caption');
const captions = [
  '"Product to Consumer"',
  '"Cupertino High School"',
  '"Frito Lay"',
  '"Hyperrealistic Hand Study"',
  '"COVID Buy"',
  '"Fancy Square"',
  '"Times Square"',
  '"THIRST"',
  '"Clock Study"',
];

function showImage(index) {
  if (index >= images.length) index = 0;
  if (index < 0) index = images.length - 1;
  images.forEach(img => img.classList.remove('active'));
  images[index].classList.add('active');
  imageContainer.style.transform = `translateX(-${index * 100}%)`;
  caption.textContent = captions[index];
  currentIndex = index;
}

document.querySelector('.prev').addEventListener('click', () => {
  showImage(currentIndex - 1);
});

document.querySelector('.next').addEventListener('click', () => {
  showImage(currentIndex + 1);
});

// Initial display setup
showImage(0); // Show the first image when the page loads
