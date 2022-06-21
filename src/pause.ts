import * as PIXI from "pixi.js";

export class PauseButton extends PIXI.Graphics {
  constructor(x: number, y: number) {
    super();
    this.x = x;
    this.y = y;
    //this.beginFill(0x0000ff);
    //this.drawRoundedRect(-100, -25, 200, 50, 15);
    //this.endFill();

    const pauseText = new PIXI.Text("Pause Game", {
      breakWords: true,
      dropShadow: true,
      fill: "white",
      fontFamily: "Arial Black",
      fontWeight: "bold",
      strokeThickness: 3
    });

    pauseText.x = 0
    pauseText.y = 0
    pauseText.anchor.set(0.5);

    this.addChild(pauseText);

    this.buttonMode = true
    this.interactive = true
  }

}