import * as PIXI from 'pixi.js'




export class Game {
    pixi: PIXI.Application
    loader: PIXI.Loader


    constructor() {
        this.pixi = new PIXI.Application({ width: 800, height: 450 })
        document.body.appendChild(this.pixi.view)
        this.loader = new PIXI.Loader()



        this.loader.load(() => this.loadCompleted())

    }

    loadCompleted(){

    }
}       