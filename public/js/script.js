/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./typescript/script.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./typescript/modules/Confusables.ts":
/*!*******************************************!*\
  !*** ./typescript/modules/Confusables.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst Helpers_1 = __importDefault(__webpack_require__(/*! ./Helpers */ \"./typescript/modules/Helpers.ts\"));\r\nconst MessageBox_1 = __importDefault(__webpack_require__(/*! ./MessageBox */ \"./typescript/modules/MessageBox.ts\"));\r\n// Objects\r\nconst confusables = {\r\n    a: 'а',\r\n    A: 'А',\r\n    b: '𝖻',\r\n    B: 'В',\r\n    'ç': 'ҫ',\r\n    c: 'с',\r\n    C: 'С',\r\n    d: '𝚍',\r\n    D: '𝙳',\r\n    E: 'Е',\r\n    e: 'е',\r\n    f: '𝚏',\r\n    F: '𝖥',\r\n    g: '𝚐',\r\n    G: 'Ԍ',\r\n    H: 'Н',\r\n    h: '𝚑',\r\n    i: 'і',\r\n    I: 'І',\r\n    j: 'ϳ',\r\n    J: 'Ј',\r\n    K: 'Κ',\r\n    k: '𝚔',\r\n    L: '𝙻',\r\n    l: '𝚕',\r\n    m: '𝗆',\r\n    M: 'М',\r\n    n: '𝚗',\r\n    N: 'Ν',\r\n    o: 'о',\r\n    O: 'О',\r\n    p: 'р',\r\n    P: 'Ρ',\r\n    q: '𝚚',\r\n    Q: '𝖰',\r\n    r: '𝚛',\r\n    R: '𝚁',\r\n    s: 'ѕ',\r\n    S: 'Ѕ',\r\n    t: '𝚝',\r\n    T: 'Т',\r\n    u: '𝗎',\r\n    U: '𝚄',\r\n    v: '𝚟',\r\n    V: '𝚅',\r\n    w: 'ᴡ',\r\n    W: 'Ԝ',\r\n    x: 'х',\r\n    X: 'Х',\r\n    y: 'у',\r\n    Y: 'Υ',\r\n    z: 'ᴢ',\r\n    Z: 'Ζ',\r\n    '1': '1',\r\n    '2': '𝟤',\r\n    '3': '𝟹',\r\n    '4': '𝟺',\r\n    '5': '𝟻',\r\n    '6': '𝟼',\r\n    '7': '𝟩',\r\n    '8': '𝟪',\r\n    '9': '𝟿',\r\n    '0': '𝟢',\r\n    '!': 'ǃ',\r\n    \"'\": '‎ᛌ',\r\n    '(': '﴾',\r\n    '﴿': ')',\r\n    ';': ';',\r\n    ':': '׃',\r\n    '?': 'ॽ',\r\n    '>': '˃',\r\n    '<': '˂',\r\n    'ー': 'ᅳ',\r\n    '-': '–',\r\n    '_': 'ߺ‎',\r\n    ',': '‚',\r\n    '.': '¸',\r\n    '*': '∗',\r\n    '/': '⁄',\r\n    '\\\\': '∖',\r\n    '^': '˄',\r\n    'º': 'ᵒ',\r\n    ' ': ' ',\r\n    'æ': 'ӕ',\r\n    'ß': 'β'\r\n};\r\nclass Confusables {\r\n    constructor(confusable) {\r\n        this.verifyMembers = () => {\r\n            if (!this.percentageReplace)\r\n                throw \"'.js-percentage-replace' not found...\";\r\n            if (!this.input)\r\n                throw \"'.js-input' not found...\";\r\n            if (!this.output)\r\n                throw \"'.js-output' not found...\";\r\n            if (this.submitButtons.length === 0)\r\n                throw \"'.js-submitButtons' not found...\";\r\n        };\r\n        this.confusify = () => {\r\n            try {\r\n                var toBeReplaced = this.generateToBeReplaced(this.percentageReplace.value, this.input.value);\r\n            }\r\n            catch (err) {\r\n                this.messageBox.addMessage(err, 'failure');\r\n                return;\r\n            }\r\n            const replaceableInputIndexes = this.getReplaceableIndexes(this.input.value);\r\n            const positionsToReplace = Helpers_1.default.getRandomNumbers(0, (replaceableInputIndexes.length > 0) ? replaceableInputIndexes.length - 1 : 0, toBeReplaced);\r\n            const indexesToReplace = Helpers_1.default.convertToSet(positionsToReplace.map((i) => replaceableInputIndexes[i]));\r\n            const replacedString = this.replaceString(this.input.value, indexesToReplace);\r\n            this.output.value = replacedString;\r\n            this.messageBox.removeMessage();\r\n        };\r\n        this.generateToBeReplaced = (percentage, inputValue) => {\r\n            if (typeof percentage === 'string') {\r\n                percentage = (percentage !== '') ? parseInt(percentage) : 0;\r\n                if (isNaN(percentage))\r\n                    throw 'Percentage not a number...';\r\n            }\r\n            if (percentage < 0 || percentage > 100)\r\n                throw 'Percentage must be between 0 and 100 (inclusive)...';\r\n            var charsToBeReplaced = inputValue.length * percentage / 100;\r\n            charsToBeReplaced = Math.floor(charsToBeReplaced);\r\n            return charsToBeReplaced;\r\n        };\r\n        this.getReplaceableIndexes = (s) => {\r\n            const indexes = [];\r\n            for (let i = 0; i < s.length; i++)\r\n                if (confusables[s.charAt(i)])\r\n                    indexes.push(i);\r\n            return indexes;\r\n        };\r\n        this.replaceString = (oldString, indexes) => {\r\n            var newString = '';\r\n            for (let i = 0; i < oldString.length; i++) {\r\n                const c = oldString.charAt(i);\r\n                if (indexes.hasOwnProperty(i) && confusables.hasOwnProperty(c))\r\n                    newString += confusables[c];\r\n                else\r\n                    newString += c;\r\n            }\r\n            return newString;\r\n        };\r\n        this.confusable = confusable;\r\n        // throws exception if not found\r\n        this.messageBox = new MessageBox_1.default('.js-message-box-container', this.confusable);\r\n        this.percentageReplace = document.querySelector('.js-percentage-replace');\r\n        this.input = document.querySelector('.js-input');\r\n        this.output = document.querySelector('.js-output');\r\n        this.submitButtons = document.querySelectorAll('.js-submit');\r\n        try {\r\n            this.verifyMembers();\r\n        }\r\n        catch (err) {\r\n            throw err;\r\n        }\r\n        for (const submitButton of this.submitButtons)\r\n            submitButton.addEventListener('click', this.confusify);\r\n        Helpers_1.default.setInputFilter(this.percentageReplace, (value) => {\r\n            if (!/^\\d*$/.test(value))\r\n                return false;\r\n            const intValue = parseInt(value);\r\n            if (intValue < 0 || intValue > 100)\r\n                return false;\r\n            return true;\r\n        });\r\n    }\r\n    static initAll() {\r\n        Helpers_1.default.initAll(Confusables, '.js-confusables');\r\n    }\r\n}\r\nexports.default = Confusables;\r\n\n\n//# sourceURL=webpack:///./typescript/modules/Confusables.ts?");

/***/ }),

/***/ "./typescript/modules/Helpers.ts":
/*!***************************************!*\
  !*** ./typescript/modules/Helpers.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass Helpers {\r\n    constructor() {\r\n        throw 'Static Only';\r\n    }\r\n    static getRandomNumbers(begin, end, numbers) {\r\n        if (numbers < 0)\r\n            throw \"'numbers' must be greater than or equal to zero...\";\r\n        if (begin > end)\r\n            throw \"'begin' must be <= 'end'...\";\r\n        if (numbers === 0)\r\n            return [];\r\n        const range = Array.from({ length: end - begin + 1 }, (_, i) => i + begin);\r\n        const result = [];\r\n        if (numbers >= end - begin + 1)\r\n            return range;\r\n        while (numbers-- > 0) {\r\n            const index = Helpers.getRandomIndex(range);\r\n            result.push(range[index]);\r\n            range.splice(index, 1);\r\n        }\r\n        return result;\r\n    }\r\n    static getRandomIndex(items) {\r\n        return Math.floor(items.length * Math.random());\r\n    }\r\n    static convertToSet(array) {\r\n        const set = {};\r\n        for (const item of array)\r\n            if (['string', 'number'].includes(typeof item))\r\n                set[item] = true;\r\n        return set;\r\n    }\r\n    static setInputFilter(textbox, inputFilter) {\r\n        [\"input\", \"keydown\", \"keyup\", \"mousedown\", \"mouseup\", \"select\", \"contextmenu\", \"drop\"].forEach(function (event) {\r\n            textbox.addEventListener(event, function () {\r\n                if (inputFilter(this.value)) {\r\n                    this.oldValue = this.value;\r\n                    this.oldSelectionStart = this.selectionStart;\r\n                    this.oldSelectionEnd = this.selectionEnd;\r\n                }\r\n                else if (Object.prototype.hasOwnProperty.call(this, 'oldValue')) {\r\n                    this.value = this.oldValue;\r\n                    if (this.oldSelectionStart !== null &&\r\n                        this.oldSelectionEnd !== null) {\r\n                        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);\r\n                    }\r\n                }\r\n                else {\r\n                    this.value = \"\";\r\n                }\r\n            });\r\n        });\r\n    }\r\n    static initAll(ClassType, htmlClass) {\r\n        const elements = [];\r\n        const htmlElements = document.querySelectorAll(htmlClass);\r\n        var i = 1;\r\n        for (const htmlElement of htmlElements) {\r\n            try {\r\n                elements.push(new ClassType(htmlElement));\r\n            }\r\n            catch (err) {\r\n                console.log(`${ClassType.name}[${i++}]: ${err}`);\r\n            }\r\n        }\r\n        return elements;\r\n    }\r\n}\r\nexports.default = Helpers;\r\n\n\n//# sourceURL=webpack:///./typescript/modules/Helpers.ts?");

/***/ }),

/***/ "./typescript/modules/Menu.ts":
/*!************************************!*\
  !*** ./typescript/modules/Menu.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst Helpers_1 = __importDefault(__webpack_require__(/*! ./Helpers */ \"./typescript/modules/Helpers.ts\"));\r\nclass Menu {\r\n    constructor(menu) {\r\n        this.toggleMenu = () => {\r\n            if (this.menu.classList.contains('show'))\r\n                this.closeMenu();\r\n            else\r\n                this.openMenu();\r\n        };\r\n        this.openMenu = () => {\r\n            this.menu.classList.add('show');\r\n            setTimeout(() => this.menu.classList.add('translate'), 50);\r\n        };\r\n        this.closeMenu = () => {\r\n            this.menu.classList.remove('translate');\r\n            setTimeout(() => this.menu.classList.remove('show'), 500);\r\n        };\r\n        this.menu = menu;\r\n        this.mobileButton = document.querySelector('.js-nav-mobile-button');\r\n        if (!this.mobileButton)\r\n            throw \"'.js-nav-mobile-button' not found...\";\r\n        this.mobileButton.addEventListener('click', this.toggleMenu);\r\n    }\r\n    static initAll() {\r\n        Helpers_1.default.initAll(Menu, '.js-nav-menu');\r\n    }\r\n}\r\nexports.default = Menu;\r\n\n\n//# sourceURL=webpack:///./typescript/modules/Menu.ts?");

/***/ }),

/***/ "./typescript/modules/MessageBox.ts":
/*!******************************************!*\
  !*** ./typescript/modules/MessageBox.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass MessageBox {\r\n    constructor(htmlContainerQuery, parent) {\r\n        if (!parent)\r\n            parent = document;\r\n        this.container = parent.querySelector(htmlContainerQuery);\r\n        if (!this.container)\r\n            throw `Could not find query \"${htmlContainerQuery}\" within \"${parent.nodeName}\"...`;\r\n    }\r\n    addMessage(message, type = '') {\r\n        this.removeAllMessages();\r\n        const html = `<div class=\"message-box ${type}\">${message}</div>`;\r\n        this.container.insertAdjacentHTML('beforeend', html);\r\n        this.showContainer();\r\n    }\r\n    removeMessage() {\r\n        this.removeAllMessages();\r\n    }\r\n    removeAllMessages() {\r\n        while (this.container.firstChild)\r\n            this.container.removeChild(this.container.firstChild);\r\n        this.hideContainer();\r\n    }\r\n    hideContainer() {\r\n        this.container.classList.add('hidden');\r\n    }\r\n    showContainer() {\r\n        this.container.classList.remove('hidden');\r\n    }\r\n}\r\nexports.default = MessageBox;\r\n\n\n//# sourceURL=webpack:///./typescript/modules/MessageBox.ts?");

/***/ }),

/***/ "./typescript/script.ts":
/*!******************************!*\
  !*** ./typescript/script.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst Confusables_1 = __importDefault(__webpack_require__(/*! ./modules/Confusables */ \"./typescript/modules/Confusables.ts\"));\r\nconst Menu_1 = __importDefault(__webpack_require__(/*! ./modules/Menu */ \"./typescript/modules/Menu.ts\"));\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n    Confusables_1.default.initAll();\r\n    Menu_1.default.initAll();\r\n});\r\n\n\n//# sourceURL=webpack:///./typescript/script.ts?");

/***/ })

/******/ });