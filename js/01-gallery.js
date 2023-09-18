import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");

gallery.insertAdjacentHTML("beforeend", createMarkup(galleryItems));
gallery.addEventListener("click", handleGalleryItemClick);

function createMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
        </a>
        </li>`
    }).join("");
};

function handleGalleryItemClick(event) {  
    event.preventDefault();

    if (event.target === event.currentTarget) {
        return
    };

    const instance = basicLightbox.create(`
    <div class="modal">
        <img
        class="gallery__image"
        src="${event.target.dataset.source}"
        alt="${event.target.alt}"
        />
    </div>
    `);

    instance.show();
};
      
console.log(galleryItems);
