let profileEditButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let popupCloseButton = document.querySelector('.popup__close-button');
let profileTitle = document.querySelector('.profile__title');
let inputProfileTitle = document.querySelector('.popup__element_type_title');
let profileSubtitle = document.querySelector('.profile__subtitle');
let inputProfileSubtitle = document.querySelector('.popup__element_type_subtitle');

function popupOpen() {
    popup.classList.add('popup_opened');
    inputProfileTitle.value = profileTitle.textContent;
    inputProfileSubtitle.value = profileSubtitle.textContent;
}
profileEditButton.addEventListener('click', popupOpen);

function popupClose() {
    popup.classList.remove('popup_opened');
}
popupCloseButton.addEventListener('click', popupClose);

let formElement = document.querySelector('.popup__container')

function formSubmitHandler (evt) {
	evt.preventDefault();
	let nameInput = formElement.querySelector('.popup__element_type_title');
	let jobInput = formElement.querySelector('.popup__element_type_subtitle');
    let newProfileTitle = document.querySelector('.profile__title');
    let newProfileSubtitle = document.querySelector('.profile__subtitle');
    newProfileTitle.textContent = nameInput.value;
    newProfileSubtitle.textContent = jobInput.value;
    popupClose();
}

formElement.addEventListener('submit', formSubmitHandler);