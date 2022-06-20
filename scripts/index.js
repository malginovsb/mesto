let profileEditButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let popupCloseButton = document.querySelector('.popup__close-button');

let profileTitle = document.querySelector('.profile__title');
let currentProfileTitle = profileTitle.textContent;
let inputProfileTitle = document.querySelector('.popup__element_type_title');

let profileSubtitle = document.querySelector('.profile__subtitle');
let currentProfileSubtitle = profileSubtitle.textContent;
let inputProfileSubtitle = document.querySelector('.popup__element_type_subtitle');

function popupOpen() {
    popup.classList.add('popup_opened');
    inputProfileTitle.setAttribute('placeholder', currentProfileTitle);
    inputProfileSubtitle.setAttribute('placeholder', currentProfileSubtitle);
}

profileEditButton.addEventListener('click', popupOpen);

function popupClose() {
    popup.classList.remove('popup_opened');
}

popupCloseButton.addEventListener('click', popupClose);


let formElement = document.querySelector('.popup__container')

function formSubmitHandler (evt) {
	evt.preventDefault();

	// Находим поля формы в DOM
	let nameInput = formElement.querySelector('.popup__element_type_title');
	let jobInput = formElement.querySelector('.popup__element_type_subtitle');

    // Выберите элементы, куда должны быть вставлены значения полей
    let newProfileTitle = document.querySelector('.profile__title');
    let newProfileSubtitle = document.querySelector('.profile__subtitle');
 
	// Получите значение полей из свойства value
    nameInput.getAttribute('value');
    jobInput.getAttribute('value');

	// Вставьте новые значения с помощью textContent
    newProfileTitle.textContent = nameInput.value;
    newProfileSubtitle.textContent = jobInput.value;
  
    popupClose();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);



