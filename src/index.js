import cards from './menu.json';
import menuTemplate from './templates/menu-cards.hbs';
import './choice-them.js'
import './styles.css';

let menu = document.querySelector('.js-menu');
const cardMarkup = buildMenu(cards);
menu.insertAdjacentHTML('beforeend', cardMarkup);

function buildMenu(cards) {
    return menuTemplate(cards);
}
