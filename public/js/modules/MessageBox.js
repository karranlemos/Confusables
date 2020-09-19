export default class MessageBox {
    constructor(htmlContainerQuery, parent) {
        if (!parent)
            parent = document;
        this.container = parent.querySelector(htmlContainerQuery);
        if (!this.container)
            throw `Could not find query "${htmlContainerQuery}" within "${parent.nodeName}"...`;
    }
    addMessage(message, type = '') {
        this.removeAllMessages();
        const html = `<div class="message-box ${type}">${message}</div>`;
        this.container.insertAdjacentHTML('beforeend', html);
        this.showContainer();
    }
    removeMessage() {
        this.removeAllMessages();
    }
    removeAllMessages() {
        while (this.container.firstChild)
            this.container.removeChild(this.container.firstChild);
        this.hideContainer();
    }
    hideContainer() {
        this.container.classList.add('hidden');
    }
    showContainer() {
        this.container.classList.remove('hidden');
    }
}
