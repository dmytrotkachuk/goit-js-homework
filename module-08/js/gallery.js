// Задание
    // Создай галерею с возможностью клика по ее элементам и просмотра
    // полноразмерного изображения в модальном окне. Превью результата посмотри по ссылке.
    //
    // Разбей задание на несколько подзадач:
    // Создание и рендер разметки по массиву данных и предоставленному шаблону.
    // Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.
    // Открытие модального окна по клику на элементе галереи.
    // Подмена значения атрибута src элемента img.lightbox__image.
    // Закрытие модального окна по клику на кнопку button[data-action="close-modal"].
    // Очистка значения атрибута src элемента img.lightbox__image.
    // Это необходимо для того, чтобы при следующем открытии модального окна,
    // пока грузится изображение, мы не видели предыдущее.
    //
    // Стартовые файлы
    // В папке src ты найдешь стартовые файлы проекта с базовой разметкой и готовыми стилями.
    // В файле gallery-items.js есть массив объектов содержащих информацию
    // о изображениях: маленькое изображение, оригинальное и описание.
    //
    // Разметка элемента галереи
    // Ссылка на оригинальное изображение должна храниться в data-атрибуте source
    // на элементе img, и указываться в href ссылки (это необходимо для доступности).
    // <li class="gallery__item">
    //   <a
    //     class="gallery__link"
        // href="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
    //   >
    //     <img
    //       class="gallery__image"
    //       src="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg"
        //   data-source="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
    //       alt="Tulips"
    //     />
    //   </a>
    // </li>
    //
    // Дополнительно
    // Следующий функционал не обязателен при сдаче задания, но будет хорошей практикой по работе с событиями:
    // Закрытие модального окна по клику на div.lightbox__overlay.
    // Закрытие модального окна по нажатию клавиши ESC.
    // Пролистывание изображений галереи в открытом модальном окне клавишами "влево" и "вправо".


import images from './gallery-items.js'
// console.log(images);
    
const gallery = document.querySelector('.js-gallery')


const modal = document.querySelector('.js-lightbox')
const modalImage = modal.querySelector('img')
const modalBtn = document.querySelector('button[data-action="close-lightbox"]')




function buildTheGallery () {
  const galleryItems = images.reduce((acc,el)=>{
  acc+= `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${el.original}"
  >
    <img
      class="gallery__image"
      src="${el.preview}"
      data-source="${el.original}"
      alt="${el.description}"
    />
  </a>
</li>`
  return acc
},'')
gallery.insertAdjacentHTML("beforeend", galleryItems)}
buildTheGallery()




gallery.addEventListener('click' , openModal) 


function openModal (e){
  //Prevent open the link
  e.preventDefault()
  //Set 'Active' class of modal link
  modal.classList.add('is-open')
  //Set attributes
  modalImage.setAttribute('src',e.target.dataset.source)
  modalImage.setAttribute('alt', e.target.alt)
  //Add event listener
  modal.addEventListener('click' , closeModal) 
  document.addEventListener('keydown', keyPress)
}


function closeModal (e) {
  // Close modal with ckick on overlay or btn
  if (e && e.target === modalImage){
    return
  }
  //Remove 'Active' class of modal link
  modal.classList.remove('is-open')
  //Remove attributes
  modalImage.removeAttribute('src')
  modalImage.removeAttribute('alt')
  //Remove event listener
  modal.removeEventListener('click' , closeModal)
  document.removeEventListener('keydown', keyPress) 
}

function keyPress (e) {
 if (e.keyCode === 27){
  closeModal()
  return
 }
 if (e.keyCode === 13){
  e.preventDefault()
  return
 }
}