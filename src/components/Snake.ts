class Snake {

  head:HTMLElement;
  bodies:HTMLCollection;
  element:HTMLElement;

  constructor(){
    
    this.head = document.querySelector('#snake > div') as HTMLElement;
    this.element = document.getElementById('snake')!;
    this.bodies = this.element.getElementsByTagName('div') as HTMLCollection;

  }

  

  get X (){
   return this.head.offsetLeft;
  }

  get Y (){
    return this.head.offsetTop;
  }

  set X (value){
    this.head.style.left = value+'px';
  }

  set Y (value){
    this.head.style.top = value+'px';
  }
  
  addBody(){
    const newBody = document.createElement("div");
    this.element.insertAdjacentElement('beforeend',newBody);

  }
  
}


export default Snake;