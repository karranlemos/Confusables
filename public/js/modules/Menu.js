import Helpers from './Helpers.js';
export default class Menu {
    constructor(menu) {
        this.toggleMenu = () => {
            if (this.menu.classList.contains('show'))
                this.closeMenu();
            else
                this.openMenu();
        };
        this.openMenu = () => {
            this.menu.classList.add('show');
            setTimeout(() => this.menu.classList.add('translate'), 50);
        };
        this.closeMenu = () => {
            this.menu.classList.remove('translate');
            setTimeout(() => this.menu.classList.remove('show'), 500);
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
