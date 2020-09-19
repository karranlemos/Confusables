import { confusables } from './config/config';

class Confusables {
    constructor(confusables) {

    }

    static initAll() {
        Helpers.initAll(Confusables, '.js-confusables');
    }
}



class Menu {
    constructor(menu) {

    }

    static initAll() {
        Helpers.initAll(Menu, '.js-nav-menu');
    }
}



class Helpers {
    constructor() {
        throw 'Static Only';
    }

    static initAll(classType, htmlClass) {
        const elements = [];

        const htmlElements = document.getElementsByClassName(htmlClass);

        var i = 1;
        for (const htmlElement of htmlElements) {
            try {
                elements.push(new classType(htmlElement))
            }
            catch (err) {
                console.log(`${classType.name}[${i++}]: ${err}`);
            }
        }

        return elements;
    }
}



document.addEventListener('DOMContentLoaded', () => {
    Confusables.initAll();
});