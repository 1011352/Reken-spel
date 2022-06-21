import * as PIXI from 'pixi.js'
import heroPlus from "./images/plus.png"
import cityImage from "./images/city.jpg"
import city2Image from "./images/city2.jpg"
import eenEuroImage from "./images/1euro.png"
import tweeEuroImage from "./images/2euro.png"
import vijfEuroImage from "./images/5euro.png"
import youWinImage from "./images/youwin.png"
import startImage from "./images/start.png"
import { Endscreen } from "./endscreen"
import { Plus } from './plus'
import { Geld } from './geld'
import { Start } from './Start'


export class Game {
    pixi: PIXI.Application
    loader: PIXI.Loader
    plus: Plus
    bg: PIXI.Sprite
    bg2 :PIXI.Sprite
    x: number
    score : number
    geld : Geld
    bank : Geld[] = []
    endscreen : Endscreen
    start : Start
  
    constructor() {
        this.score = 0
        this.bank = []
        this.pixi = new PIXI.Application({ width: 1000, height: 546 })
        document.body.appendChild(this.pixi.view)
        this.loader = new PIXI.Loader()

        this.loader.add('plusTexture', heroPlus)
            .add('cityTexture', cityImage)
            .add('city2Texture', city2Image)
            .add('eenEuroImage', eenEuroImage)
            .add('tweeEuroImage', tweeEuroImage)
            .add('vijfEuroImage', vijfEuroImage)
            .add('youWinImage', youWinImage)
            .add('startImage', startImage)

        this.loader.load(() => this.loadCompleted())



    }



    loadCompleted() {

        this.bg = new PIXI.Sprite(this.loader.resources["cityTexture"].texture!)
        this.pixi.stage.addChild(this.bg)

        this.bg2 = new PIXI.Sprite(this.loader.resources["city2Texture"].texture!)
        this.pixi.stage.addChild(this.bg2)

        this.plus = new Plus(this.loader.resources["plusTexture"].texture!, this)
        this.pixi.stage.addChild(this.plus)

        //1euro
        for (let i = 0; i < 3; i++) {
            this.geld = new Geld(this.loader.resources["eenEuroImage"].texture!, this)
            this.pixi.stage.addChild(this.geld)
            this.bank.push(this.geld)
        }

        for (let i = 0; i < 3; i++) {
            this.geld = new Geld(this.loader.resources["tweeEuroImage"].texture!, this)
            this.pixi.stage.addChild(this.geld)
            this.bank.push(this.geld)
        }

        for (let i = 0; i < 3; i++) {
            this.geld = new Geld(this.loader.resources["vijfEuroImage"].texture!, this)
            this.pixi.stage.addChild(this.geld)
            this.bank.push(this.geld)
        }

        this.endscreen = new Endscreen(this.loader.resources["youWinImage"].texture!, this)

        this.start = new Start(this.loader.resources["startImage"].texture!, this)
        this.pixi.stage.addChild(this.start)




        this.pixi.ticker.add((delta: number) => this.update(delta))

    }

    collision(a, b) {
        const bounds1 = a.getBounds()
        const bounds2 = b.getBounds()

        return bounds1.x < bounds2.x + bounds2.width
            && bounds1.x + bounds1.width > bounds2.x
            && bounds1.y < bounds2.y + bounds2.height
            && bounds1.y + bounds1.height > bounds2.y;
    }


    update(delta: number) {
        this.plus.update(delta)
        // this.plus.location()
        for(let g = 0; g < this.bank.length; g++){
            if (this.collision(this.plus, this.bank[g])) {
                console.log("we're rich!")
                this.bank[g].destroy()
                this.bank = this.bank.filter(ge => ge != this.bank[g])
                this.score += 1
                console.log(this.score)
            }
            if (this.score == 9){
                console.log("end")
                this.pixi.stage.addChild(this.endscreen)
            }
        }

    }
    
}

new Game()