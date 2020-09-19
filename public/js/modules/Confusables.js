import Helpers from './Helpers.js';
import MessageBox from './MessageBox.js';
// Objects
const confusables = {
    a: 'а',
    A: 'А',
    b: '𝖻',
    B: 'В',
    'ç': 'ҫ',
    c: 'с',
    C: 'С',
    d: '𝚍',
    D: '𝙳',
    E: 'Е',
    e: 'е',
    f: '𝚏',
    F: '𝖥',
    g: '𝚐',
    G: 'Ԍ',
    H: 'Н',
    h: '𝚑',
    i: 'і',
    I: 'І',
    j: 'ϳ',
    J: 'Ј',
    K: 'Κ',
    k: '𝚔',
    L: '𝙻',
    l: '𝚕',
    m: '𝗆',
    M: 'М',
    n: '𝚗',
    N: 'Ν',
    o: 'о',
    O: 'О',
    p: 'р',
    P: 'Ρ',
    q: '𝚚',
    Q: '𝖰',
    r: '𝚛',
    R: '𝚁',
    s: 'ѕ',
    S: 'Ѕ',
    t: '𝚝',
    T: 'Т',
    u: '𝗎',
    U: '𝚄',
    v: '𝚟',
    V: '𝚅',
    w: 'ᴡ',
    W: 'Ԝ',
    x: 'х',
    X: 'Х',
    y: 'у',
    Y: 'Υ',
    z: 'ᴢ',
    Z: 'Ζ',
    '1': '1',
    '2': '𝟤',
    '3': '𝟹',
    '4': '𝟺',
    '5': '𝟻',
    '6': '𝟼',
    '7': '𝟩',
    '8': '𝟪',
    '9': '𝟿',
    '0': '𝟢',
    '!': 'ǃ',
    "'": '‎ᛌ',
    '(': '﴾',
    '﴿': ')',
    ';': ';',
    ':': '׃',
    '?': 'ॽ',
    '>': '˃',
    '<': '˂',
    'ー': 'ᅳ',
    '-': '–',
    '_': 'ߺ‎',
    ',': '‚',
    '.': '¸',
    '*': '∗',
    '/': '⁄',
    '\\': '∖',
    '^': '˄',
    'º': 'ᵒ',
    ' ': ' ',
    'æ': 'ӕ',
    'ß': 'β'
};
export default class Confusables {
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
            try {
                var toBeReplaced = this.generateToBeReplaced(this.percentageReplace.value, this.input.value);
            }
            catch (err) {
                this.messageBox.addMessage(err, 'failure');
                return;
            }
            const replaceableInputIndexes = this.getReplaceableIndexes(this.input.value);
            const positionsToReplace = Helpers.getRandomNumbers(0, (replaceableInputIndexes.length > 0) ? replaceableInputIndexes.length - 1 : 0, toBeReplaced);
            const indexesToReplace = Helpers.convertToSet(positionsToReplace.map((i) => replaceableInputIndexes[i]));
            const replacedString = this.replaceString(this.input.value, indexesToReplace);
            this.output.value = replacedString;
            this.messageBox.removeMessage();
        };
        this.generateToBeReplaced = (percentage, inputValue) => {
            if (typeof percentage === 'string') {
                percentage = (percentage !== '') ? parseInt(percentage) : 0;
                if (isNaN(percentage))
                    throw 'Percentage not a number...';
            }
            if (percentage < 0 || percentage > 100)
                throw 'Percentage must be between 0 and 100 (inclusive)...';
            var charsToBeReplaced = inputValue.length * percentage / 100;
            charsToBeReplaced = Math.floor(charsToBeReplaced);
            return charsToBeReplaced;
        };
        this.getReplaceableIndexes = (s) => {
            const indexes = [];
            for (let i = 0; i < s.length; i++)
                if (confusables[s.charAt(i)])
                    indexes.push(i);
            return indexes;
        };
        this.replaceString = (oldString, indexes) => {
            var newString = '';
            for (let i = 0; i < oldString.length; i++) {
                const c = oldString.charAt(i);
                if (indexes.hasOwnProperty(i) && confusables.hasOwnProperty(c))
                    newString += confusables[c];
                else
                    newString += c;
            }
            return newString;
        };
        this.confusable = confusable;
        this.messageBox = new MessageBox('.js-message-box-container', this.confusable);
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
