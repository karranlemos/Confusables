import Helpers from './Helpers.js';

export default class Menu {
    private menu: Element;
    private mobileButton: Element;

    constructor(menu: Element) {
        this.menu = menu;
        this.mobileButton = document.querySelector('.js-nav-mobile-button');
        if (!this.mobileButton)
            throw "'.js-nav-mobile-button' not found...";

        this.mobileButton.addEventListener('click', this.toggleMenu);
    }

    toggleMenu = (): void => {
        this.menu.classList.toggle('show');
    }



    static initAll(): void {
        Helpers.initAll(Menu, '.js-nav-menu');
    }
}