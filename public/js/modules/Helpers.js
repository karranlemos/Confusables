export default class Helpers {
    constructor() {
        throw 'Static Only';
    }
    static getRandomNumbers(begin, end, numbers) {
        if (numbers < 0)
            throw "'numbers' must be greater than or equal to zero...";
        if (begin > end)
            throw "'begin' must be <= 'end'...";
        if (numbers === 0)
            return [];
        const range = Array.from({ length: end - begin + 1 }, (_, i) => i + begin);
        const result = [];
        if (numbers >= end - begin + 1)
            return range;
        while (numbers-- > 0) {
            const index = Helpers.getRandomIndex(range);
            result.push(range[index]);
            range.splice(index, 1);
        }
        return result;
    }
    static getRandomIndex(items) {
        return Math.floor(items.length * Math.random());
    }
    static convertToSet(array) {
        const set = {};
        for (const item of array)
            if (['string', 'number'].includes(typeof item))
                set[item] = true;
        return set;
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