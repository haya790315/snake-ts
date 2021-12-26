"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ScorePanel {
    constructor(maxLevel = 10, upScore = 10) {
        this.maxLevel = maxLevel;
        this.upScore = upScore;
        this.score = 0;
        this.level = 1;
        this.scoreEle = document.getElementById("score");
        this.levelEle = document.getElementById("level");
    }
    addScore() {
        if (this.score % this.upScore === 0) {
            this.levelUp();
        }
        this.scoreEle.innerHTML = ++this.score + "";
    }
    levelUp() {
        if (this.level < this.maxLevel) {
            this.levelEle.innerHTML = ++this.level + "";
        }
    }
}
exports.default = ScorePanel;
//# sourceMappingURL=ScorePanel.js.map