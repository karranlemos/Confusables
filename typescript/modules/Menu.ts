import Helpers from './Helpers';

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
        if (this.menu.classList.contains('show'))
            this.closeMenu();
        else
            this.openMenu();
    }

    openMenu = (): void => {
        this.menu.classList.add('show');
        setTimeout(() => this.menu.classList.add('translate'), 50);
    }

    closeMenu = (): void => {
        this.menu.classList.remove('translate');
        setTimeout(() => this.menu.classList.remove('show'), 500);
    }



    static initAll(): void {
        Helpers.initAll(Menu, '.js-nav-menu');
    }
}