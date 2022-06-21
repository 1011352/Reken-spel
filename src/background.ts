import * as PIXI from "pixi.js";
import { Sprite } from "pixi.js";
import { Game } from './game'

export class Background extends PIXI.Sprite {
    xmove: number = 0
    game : Game
    pixi : PIXI.Application


    constructor(texture: PIXI.Texture, game: Game) {
        super(texture);
        this.game = game





        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e))
        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e))

    }

    onKeyDown(e: KeyboardEvent): void {
        switch (e.key.toUpperCase()) {
            case "A":
            case "ARROWLEFT":
                this.xmove = 4
                break
            case "D":
            case "ARROWRIGHT":
                this.xmove = -4





        }
    }


    private onKeyUp(e: KeyboardEvent): void {
        switch (e.key.toUpperCase()) {
            case " ":
                break;
            case "A":
            case "D":
            case "ARROWLEFT":
            case "ARROWRIGHT":
                this.xmove = 0
        }
    }

    update(delta: number) {
        this.x += this.xmove * delta

        this.keepInScreen1()


        

    }

    private keepInScreen1() {
        if (this.getBounds().left > this.game.pixi.screen.right) {

            this.x = 0

        }
        if (this.getBounds().right < this.game.pixi.screen.left) {

            this.x = 1000

        }

    }
}

