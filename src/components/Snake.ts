class Snake {
  head: HTMLElement;
  bodies: HTMLCollection;
  element: HTMLElement;

  constructor() {
    this.head = document.querySelector("#snake > div") as HTMLElement;
    this.element = document.getElementById("snake")! as HTMLElement;
    this.bodies = this.element.getElementsByTagName("div") as HTMLCollection;
  }

  get X() {
    return this.head.offsetLeft;
  }

  get Y() {
    return this.head.offsetTop;
  }

  set X(value: number) {
    if (this.X === value) {
      return;
    }

    if (value < 0 || value > 290) {
      throw new Error("Game over");
    }

    if(this.bodies[1]&& (this.bodies[1] as HTMLElement).offsetLeft === value){

      if(value>this.X){
        value = this.X -10;
      }else {
        value= this.X +10;
      }

    }

    
    this.move();
    this.head.style.left = value + "px";
    this.checkHeadBody();
  }

  set Y(value) {
    if (this.Y === value) {
      return;
    }

    if (value < 0 || value > 290) {
      throw new Error("Game over");
    }

    if(this.bodies[1]&& (this.bodies[1] as HTMLElement).offsetTop === value){

      if(value>this.Y){
        value = this.Y -10;
      }else {
        value= this.Y +10;
      }

    }
    
    
    this.move();
    this.head.style.top = value + "px";
    this.checkHeadBody();
  }

  addBody() {
    const newBody = document.createElement("div");
    newBody.style.display ="none";
    this.element.insertAdjacentElement("beforeend", newBody);
    
  }
  
  move() {
    for (let i = this.bodies.length - 1; i > 0; i--) {
      let X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
      let Y = (this.bodies[i - 1] as HTMLElement).offsetTop;
      
      (this.bodies[i] as HTMLElement).style.left = X + "px";
      (this.bodies[i] as HTMLElement).style.top = Y + "px";
      (this.bodies[i] as HTMLElement).style.display = "block";
    }
    
  }

  checkHeadBody(){
    for (let i =1 ;i<this.bodies.length ; i++){
      let bd = this.bodies[i] as HTMLElement;
      if(this.X === bd.offsetLeft && this.Y === bd.offsetTop){
        throw new Error('Game over');
      }

    }

  }
}

export default Snake;
