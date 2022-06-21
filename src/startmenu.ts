import * as PIXI from "pixi.js";
import { Game } from "./game";
import { Button } from "./button";

export class Startmenu {
  private _pixi: PIXI.Application;
  button: Button;
  constructor() {
    console.log("startmenu created");

    this._pixi = new PIXI.Application({
        width: 1000, 
        height: 546,
        backgroundColor: 0x333333
    });

    document.body.appendChild(this._pixi.view)

    this.button = new Button(
      this._pixi.screen.width / 2,
      this._pixi.screen.height / 2
    );

    this._pixi.stage.addChild(this.button);

    this.button.on("pointerdown", () => this.onClick())
  }

  private onClick() {
    this.button.destroy()
    new Game(this._pixi);
    
  }
}

new Startmenu()