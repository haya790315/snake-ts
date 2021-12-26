"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Snake {
    constructor() {
        this.head = document.querySelector('#snake > div');
        this.element = document.getElementById('snake');
        this.bodies = this.element.getElementsByTagName('div');
    }
    get X() {
        return this.head.offsetLeft;
    }
    get Y() {
        return this.head.offsetTop;
    }
    set X(value) {
        this.head.style.left = value + 'px';
    }
    set Y(value) {
        this.head.style.top = value + 'px';
    }
    addBody() {
        const newBody = document.createElement("div");
        this.element.insertAdjacentElement('beforeend', newBody);
    }
}
exports.default = Snake;
//# sourceMappingURL=Snake.js.map