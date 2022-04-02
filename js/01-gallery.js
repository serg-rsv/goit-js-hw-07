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
<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div >
`;
    })
    .join('');
}

function onClickGalleryImage(e) {
  e.preventDefault();

  const isImage = galleryRef.querySelector('.gallery__image');

  if (!isImage) {
    return;
  }

  const instance = basicLightbox.create(`
      <div class="modal">
          <img src="${e.target.dataset.source}" width="800" height="600">
      </div>
  `);

  instance.show();
}
