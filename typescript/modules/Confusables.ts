import Helpers, { Set } from './Helpers';
import MessageBox from './MessageBox';


// Objects

const confusables: {[key: string]: string} = {
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
}



export default class Confusables {

    private confusable: HTMLElement;
    private percentageReplace: HTMLInputElement;
    private input: HTMLInputElement;
    private output: HTMLInputElement;
    private submitButtons: NodeList;
    private messageBox: MessageBox;

    constructor(confusable) {
        this.confusable = confusable;

        // throws exception if not found
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

        Helpers.setInputFilter(this.percentageReplace, (value: string): boolean => {
            if (!/^\d*$/.test(value))
                return false;
            
            const intValue = parseInt(value);
            if (intValue < 0 || intValue > 100)
                return false;
            
            return true;
        })
    }

    private verifyMembers = (): void => {
        if (!this.percentageReplace)
            throw "'.js-percentage-replace' not found...";
        if (!this.input)
            throw "'.js-input' not found...";
        if (!this.output)
            throw "'.js-output' not found...";
        if (this.submitButtons.length === 0)
            throw "'.js-submitButtons' not found...";
    };




    private confusify = (): void => {
        try {
            var toBeReplaced: number = this.generateToBeReplaced(this.percentageReplace.value, this.input.value);
        }
        catch (err) {
            this.messageBox.addMessage(err, 'failure');
            return;
        }

        const replaceableInputIndexes: Array<number> = this.getReplaceableIndexes(this.input.value);
        const positionsToReplace: Array<number> = Helpers.getRandomNumbers(
            0,
            (replaceableInputIndexes.length > 0) ? replaceableInputIndexes.length-1 : 0,
            toBeReplaced
        );
        
        const indexesToReplace: Set = Helpers.convertToSet(positionsToReplace.map((i) => replaceableInputIndexes[i]));
        const replacedString: string = this.replaceString(this.input.value, indexesToReplace);

        this.output.value = replacedString;

        this.messageBox.removeMessage();
    };


    private generateToBeReplaced = (percentage: string | number, inputValue: string): number => {
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

    private getReplaceableIndexes = (s: string): Array<number> => {
        const indexes = [];
        for (let i = 0; i < s.length; i++)
            if (confusables[s.charAt(i)])
                indexes.push(i);
        return indexes;
    };

    private replaceString = (oldString: string, indexes: Set): string => {
        var newString = '';
        
        for (let i = 0; i < oldString.length; i++) {
            const c: string = oldString.charAt(i);
            if (indexes.hasOwnProperty(i) && confusables.hasOwnProperty(c))
                newString += confusables[c];
            else
                newString += c;
        }

        return newString;
    };




    static initAll(): void {
        Helpers.initAll(Confusables, '.js-confusables');
    }
}