import * as PIXI from "pixi.js";
import { Button } from "./button";

export class Maths extends PIXI.Graphics{
    text: PIXI.Text
    pixi:PIXI.Application
    button:Button

    constructor(x: number, y: number) {
        super();
        this.x = x;
        this.y = y;

        this.button = new Button(
            this.pixi.screen.width / 2,
            this.pixi.screen.height / 2
        )

        
        
        
    }

    randomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;

    }

    
    /*
    public mathQues() {
        let a = this.randomInteger(4, 9)
        let b = this.randomInteger(1, 4)
        let c = a - b

        this.text = new PIXI.Text("",  {
            breakWords: true,
            dropShadow: true,
            fill: "white",
            fontFamily: "Arial Black",
            fontWeight: "bold",
            strokeThickness: 3
          });

        this.text.x = 200
        this.text.y = 200
        this.beginFill(0x0000ff);
        this.drawRoundedRect(0, 0, 400, 200, 15);
        this.endFill();
        this.pixi.stage.addChild(this.text)

        console.log("wat is", a, "-", b)
        console.log("het antword is", c)
 
        this.text.text = " wat is "+ a+"-"+ b
    }
*/
    
}


