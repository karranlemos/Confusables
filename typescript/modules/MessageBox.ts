declare type ErrorTypes = 'success'|'failure'|'';

export default class MessageBox {
    
    private container: HTMLElement;

    constructor(htmlContainerQuery: string, parent?: Element|Document) {
        if (!parent)
            parent = document;
        
        this.container = parent.querySelector(htmlContainerQuery);
        if (!this.container)
            throw `Could not find query "${htmlContainerQuery}" within "${parent.nodeName}"...`;
    }

    public addMessage(message: string, type: ErrorTypes=''): void {
        this.removeAllMessages();

        const html: string = `<div class="message-box ${type}">${message}</div>`;

        this.container.insertAdjacentHTML('beforeend', html);
        this.showContainer();
    }

    public removeMessage(): void {
        this.removeAllMessages();
    }

    private removeAllMessages(): void {
        while (this.container.firstChild)
            this.container.removeChild(this.container.firstChild);
        this.hideContainer();
    }


    private hideContainer(): void {
        this.container.classList.add('hidden');
    }

    private showContainer(): void {
        this.container.classList.remove('hidden');
    }
}