declare type GenericClass <T> = {
    new(...args: any[]): T;
};

export declare type Set = {
    [key: string]: any
}


export default class Helpers {
    constructor() {
        throw 'Static Only';
    }


    static getRandomNumbers(begin: number, end: number, numbers: number): Array<number> {
        if (numbers < 0)
            throw "'numbers' must be greater than or equal to zero...";
        if (begin > end)
            throw "'begin' must be <= 'end'...";

        if (numbers === 0)
            return [];
            

        const range: Array<number> = Array.from({length: end-begin+1}, (_, i) => i + begin);
        const result: Array<number> = [];


        if (numbers >= end-begin+1)
            return range;


        while (numbers-- > 0) {
            const index: number = Helpers.getRandomIndex(range);
            result.push(range[index]);
            range.splice(index, 1);
        }

        return result;
    }

    static getRandomIndex<T>(items: Array<T>): number {
        return Math.floor(items.length * Math.random());
    }

    static convertToSet(array: Array<string|number>): Set {
        const set = {};

        for (const item of array)
            if (['string', 'number'].includes(typeof item))
                set[item] = true;

        return set;
    }



    static setInputFilter(textbox: Element, inputFilter: (value: string) => boolean): void {
        ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
            textbox.addEventListener(event, function(this: (HTMLInputElement | HTMLTextAreaElement) & {oldValue: string; oldSelectionStart: number | null, oldSelectionEnd: number | null}) {
                if (inputFilter(this.value)) {
                    this.oldValue = this.value;
                    this.oldSelectionStart = this.selectionStart;
                    this.oldSelectionEnd = this.selectionEnd;
                } else if (Object.prototype.hasOwnProperty.call(this, 'oldValue')) {
                    this.value = this.oldValue;
                    if (this.oldSelectionStart !== null &&
                        this.oldSelectionEnd !== null) {
                        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
                    }
                } else {
                    this.value = "";
                }
            });
        });
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