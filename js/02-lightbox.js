import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');

galleryRef.insertAdjacentHTML('afterbegin', createGalleryMarkup(galleryItems));
galleryRef.addEventListener('click', onClickGalleryImage);

function createGalleryMarkup(items) {
  return items
    .map(({ description, original, preview }) => {
      return `
        <a class="gallery__item" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
        `;
    })
    .join('');
}

function onClickGalleryImage(e) {
  e.preventDefault();

  if (e.target.nodeName !== 'IMG') {
    return;
  }
}

const imgGallery = new SimpleLightbox('.gallery__item', {
  captionsData: 'alt',
  captionDelay: 250,
});
