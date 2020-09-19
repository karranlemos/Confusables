class Confusables {
    constructor(confusables) {
    }
    static initAll() {
        Helpers.initAll(Confusables, '.js-confusables');
    }
}
class Menu {
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
class Helpers {
    constructor() {
        throw 'Static Only';
    }
    static initAll(ClassType, htmlClass) {
        const elements = [];
        const htmlElements = document.querySelectorAll(htmlClass);
        var i = 1;
        for (const htmlElement of htmlElements) {
            try {
                elements.push(new ClassType(htmlElement));
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
export {};
