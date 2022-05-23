import * as PIXI from 'pixi.js'
import { Game } from './game'

export class Plus extends PIXI.Sprite {
    speed : number
    

    constructor(texture: PIXI.Texture, pixi: PIXI.Application) {
        super(texture)
        this.x = (Math.random() * pixi.screen.right)
        this.y = (Math.random() * pixi.screen.bottom)
        this.scale.set(-1, 1)
        this.anchor.set(0.5)
        this.tint = (Math.random() * 0xffffff)
        this.speed = 1
    }


}
