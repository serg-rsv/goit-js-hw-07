import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');

const imgLigthBox = {
  imgModal: null,

  createModal(e) {
    this.imgModal = basicLightbox.create(`
      <div class="modal">
          <img src="${e.target.dataset.source}" width="800" height="600">
      </div>
  `);
  },

  showModal() {
    this.imgModal?.show();
    document.body.style.overflow = 'hidden';
  },

  closeModal() {
    this.imgModal?.close();
    document.body.style.overflow = 'auto';
  },

  isVisible() {
    return this.imgModal?.visible();
  },
};

galleryRef.insertAdjacentHTML('afterbegin', createGalleryMarkup(galleryItems));
galleryRef.addEventListener('click', onClickGalleryImage);

window.addEventListener('keyup', onPushEscKey);

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

  if (e.target.nodeName !== 'IMG') {
    return;
  }

  imgLigthBox.createModal(e);
  imgLigthBox.showModal();
}

function onPushEscKey(e) {
  if (imgLigthBox.isVisible() && e.key === 'Escape') {
    imgLigthBox.closeModal();
  }
}
