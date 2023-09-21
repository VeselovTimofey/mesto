import {PopupWithImage} from './PopupWithImage.js'
import {Card} from './card.js';
import {Section} from './section.js';
import {FormValidator} from './FormValidator.js';
import {initialElements} from './cards.js';
import {config} from './config.js';

const popupWithImage = new PopupWithImage('.popup_type_picture');
const firstCards = new Section({
    items: initialElements,
    renderer: (item) => {
        const card = new Card(
            item,
            '#element',
            (link = item.link, name = item.name) => {
                popupWithImage.open(link, name);
                popupWithImage.setEventListeners();
            }
        )
        const newCard = card.generateCard();
        firstCards.addItem(newCard);
    }
}, '.elements');

firstCards.renderItems();