import Helpers from './Helpers.js';
export default class Menu {
    constructor(menu) {
        this.toggleMenu = () => {
            this.menu.classList.toggle('show');
        };
        this.menu = menu;
        this.mobileButton = document.querySelector('.js-nav-mobile-button');
        if (!this.mobileButton)
            throw "'.js-nav-mobile-button' not found...";
        this.mobileButton.addEventListener('click', this.toggleMenu);
    }
    static initAll() {
        Helpers.initAll(Menu, '.js-nav-menu');
    }
}
