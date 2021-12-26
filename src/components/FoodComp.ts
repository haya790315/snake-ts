

class FoodComp {
  element: HTMLElement;

  constructor() {
    this.element = document.getElementById("food")!;
  }

  //獲取食物的座標

  get X() {
    return this.element.offsetLeft;
  }

  get Y() {
    return this.element.offsetTop;
  }

  change() {
    this.element.style.left = Math.round(Math.random() * 29) * 10 + "px";
    this.element.style.top = Math.round(Math.random() * 29) * 10 + "px";
  }
}

export default FoodComp ;