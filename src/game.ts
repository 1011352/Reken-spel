import * as PIXI from 'pixi.js'
import heroPlus from "./images/plus.png"
import {Plus} from './plus'



export class Game {
    pixi: PIXI.Application
    loader: PIXI.Loader


    constructor() {
        this.pixi = new PIXI.Application({ width: 800, height: 450 })
        document.body.appendChild(this.pixi.view)
        this.loader = new PIXI.Loader()

        this.loader.add('plusTexture', heroPlus)
            
        



        this.loader.load(() => this.loadCompleted())

    }

    loadCompleted(){
        let plus = new Plus(this.loader.resources["plusTexture"].texture!, this.pixi)
        this.pixi.stage.addChild(plus)
      

    }   
}       

let g = new Game()