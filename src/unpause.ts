import * as PIXI from "pixi.js";

export class StartButton extends PIXI.Graphics {
  constructor(x: number, y: number) {
    super();
    this.x = x;
    this.y = y;
    //this.beginFill(0x0000ff);
    //this.drawRoundedRect(-100, -25, 200, 50, 15);
    //this.endFill();

    const UnPauseText = new PIXI.Text("Unpause Game", {
      breakWords: true,
      dropShadow: true,
      fill: "white",
      fontFamily: "Arial Black",
      fontWeight: "bold",
      strokeThickness: 3
    });

    UnPauseText.x = 0
    UnPauseText.y = 0
    UnPauseText.anchor.set(0.5);

    this.addChild(UnPauseText);

    this.buttonMode = true
    this.interactive = true
  }

}