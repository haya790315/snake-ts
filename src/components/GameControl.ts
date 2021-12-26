import Snake from "./Snake";
import ScorePanel from "./ScorePanel";
import FoodComp from "./FoodComp";


class GameControl  {
  snake:Snake;
  food :FoodComp;
  scorePanel:ScorePanel;
  direction:string ="";
  isLive = true;
  constructor() {
    this.snake = new Snake();
    this.food = new FoodComp();
    this.scorePanel = new ScorePanel();
    this.init();
  }

  init (){
    document.addEventListener("keydown",this.keydownHandler.bind(this),true); 
    this.run();

  }

  keydownHandler(event: KeyboardEvent) {
    event.preventDefault();
    this.direction=event.key
  }
  
  run (){
    switch (this.direction) {
      case "ArrowUp":
      this.snake.Y -= 10;
        
        break;

      case "ArrowDown":
      this.snake.Y += 10;
        
        break;  
    
        case "ArrowLeft":
      this.snake.X -= 10;
        
        break;

        case "ArrowRight":
      this.snake.X += 10;
        
        break;
        
      default:
        break;
    }

    this.isLive && setTimeout(this.run.bind(this),300-(this.scorePanel.level-1)*30);
  }
  
}

export  default GameControl;