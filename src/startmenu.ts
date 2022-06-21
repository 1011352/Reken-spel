import * as PIXI from "pixi.js";
import { Game } from "./game";
import { Button } from "./button";

export class Startmenu {
  private _pixi: PIXI.Application;
  constructor() {
    console.log("startmenu created");

    this._pixi = new PIXI.Application({
        width: 1000, 
        height: 546,
        backgroundColor: 0x333333
    });

    document.body.appendChild(this._pixi.view)

    const button = new Button(
      this._pixi.screen.width / 2,
      this._pixi.screen.height / 2
    );

    this._pixi.stage.addChild(button);

    button.on("pointerdown", () => this.onClick())
  }

  private onClick() {
    new Game(this._pixi);
    
  }
}

new Startmenu()