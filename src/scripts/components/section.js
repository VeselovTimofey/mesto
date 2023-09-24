export class Section {
    constructor({callbackPromiseItems, renderer}, containerSelector) {
        this._callbackPromiseItems = callbackPromiseItems;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
        this._listItems = [];
    }

    addItem(element) {
        this._container.prepend(element);
    }

    renderItem(item) {
        this._renderer(item);
    }

    renderItems() {
        const promiseItems = this._callbackPromiseItems();
        promiseItems.then((newItem) => {
            newItem.forEach(this._renderer);
        })
    }
}