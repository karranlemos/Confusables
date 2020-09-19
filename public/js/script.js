class Confusables {
    constructor(confusable) {
        this.verifyMembers = () => {
            if (!this.percentageReplace)
                throw "'.js-percentage-replace' not found...";
            if (!this.input)
                throw "'.js-input' not found...";
            if (!this.output)
                throw "'.js-output' not found...";
            if (this.submitButtons.length === 0)
                throw "'.js-submitButtons' not found...";
        };
        this.confusify = () => {
        };
        this.confusable = confusable;
        this.percentageReplace = document.querySelector('.js-percentage-replace');
        this.input = document.querySelector('.js-input');
        this.output = document.querySelector('.js-output');
        this.submitButtons = document.querySelectorAll('.js-submit');
        try {
            this.verifyMembers();
        }
        catch (err) {
            throw err;
        }
        for (const submitButton of this.submitButtons)
            submitButton.addEventListener('click', this.confusify);
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
