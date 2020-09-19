import { confusables } from './config/config';

class Confusables {
    constructor(confusables) {

    }

    static initAll() {
        Helpers.initAll(Confusables, '.js-confusables');
    }
}



class Menu {
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



    static initAll() {
        Helpers.initAll(Menu, '.js-nav-menu');
    }
}




declare type GenericClass <T> = {
    new(...args: any[]): T;
};

class Helpers {
    constructor() {
        throw 'Static Only';
    }

    static initAll<T>(ClassType: GenericClass<T>, htmlClass): Array<T> {
        const elements: Array<T> = [];

        const htmlElements: NodeList = document.querySelectorAll(htmlClass);

        var i: number = 1;
        for (const htmlElement of htmlElements) {
            try {
                elements.push(new ClassType(htmlElement))
            }
            catch (err) {
                console.log(`${ClassType.name}[${i++}]: ${err}`);
            }
        }

        return elements;
    }
}



document.addEventListener('DOMContentLoaded', () => {
    Confusables.initAll();
    Menu.initAll();
});