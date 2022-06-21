import * as PIXI from 'pixi.js'
import { Game } from './game'

export class Start extends PIXI.Sprite {

    clicked = false

    constructor(texture: PIXI.Texture, game: Game) {
        super(texture)
        this.interactive = true
        this.buttonMode = true
        this.on('pointerdown', () => this.click())
    }

    click() {
        this.clicked = true
        console.log(this.clicked)
        this.destroy()
    }

}