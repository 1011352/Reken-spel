import * as PIXI from 'pixi.js'
import { Game } from './game'

export class Min extends PIXI.Sprite {
    game : Game
    constructor(texture: PIXI.Texture, game:Game) {
        super(texture)
        this.game = game
        

        this.width = 150
        this.height = 150
        this.x = (Math.random() * game.pixi.screen.right)
        this.y = (Math.random() * game.pixi.screen.bottom)
    }


}