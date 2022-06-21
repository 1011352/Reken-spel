import * as PIXI from 'pixi.js'
import { Game } from './game'


export class Endscreen extends PIXI.Sprite {
    constructor(texture: PIXI.Texture, game:Game) {
        super(texture)
        this.x = 100
        this.y = 50


    }


}