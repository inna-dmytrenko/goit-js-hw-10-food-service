import cards from './menu.json';
import menuTemplate from './templates/menu-cards.hbs';
import './choice-them.js';
import './styles.css';

document.querySelector('.menu').insertAdjacentHTML('beforeend', cards.map(card => menuTemplate(card)).join(''));
