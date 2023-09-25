export class Section {
    constructor({callbackPromiseItems, renderer}, containerSelector) {
        this._callbackPromiseItems = callbackPromiseItems;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    addItem(element) {
        this._container.prepend(element);
    }

    renderItem(item) {
        this._renderer(item);
    }

    renderItems() {
        const promiseItems = this._callbackPromiseItems();
        promiseItems.then(newItem => newItem.reverse().forEach(this._renderer))
    }
}