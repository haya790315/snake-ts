"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Snake_1 = __importDefault(require("./Snake"));
const ScorePanel_1 = __importDefault(require("./ScorePanel"));
const FoodComp_1 = __importDefault(require("./FoodComp"));
class GameControl {
    constructor() {
        this.snake = new Snake_1.default();
        this.food = new FoodComp_1.default();
        this.scorePanel = new ScorePanel_1.default();
        this.init();
    }
    init() {
        document.addEventListener("keydown", this.keydownHandler, true);
    }
    keydownHandler(event) {
        console.log(event.key);
    }
}
exports.default = GameControl;
//# sourceMappingURL=GameControl.js.map