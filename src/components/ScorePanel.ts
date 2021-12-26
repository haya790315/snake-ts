class ScorePanel {
  score: number = 0;
  level: number = 1;
  scoreEle: HTMLElement;
  levelEle: HTMLElement;

  constructor(private maxLevel: number = 10, private upScore: number = 10) {
    this.scoreEle = document.getElementById("score")!;
    this.levelEle = document.getElementById("level")!;
  }

  addScore(): void {
    if (this.score % this.upScore === 0) {
      this.levelUp();
    }

    this.scoreEle.innerHTML = ++this.score + "";
  }

  levelUp(): void {
    if (this.level < this.maxLevel) {
      this.levelEle.innerHTML = ++this.level + "";
    }
  }
}

export default ScorePanel;