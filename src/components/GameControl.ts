import Snake from "./Snake";
import ScorePanel from "./ScorePanel";
import FoodComp from "./FoodComp";


class GameControl {
  snake:Snake;
  food :FoodComp;
  scorePanel:ScorePanel;

  constructor() {
    this.snake = new Snake();
    this.food = new FoodComp();
    this.scorePanel = new ScorePanel();
    this.init();
  }

  init (){
    document.addEventListener("keydown",this.keydownHandler,true);

  }

  keydownHandler(event: KeyboardEvent) {

    console.log(event.key)
  }
  
  
}

export  default GameControl;