import * as PIXI from 'pixi.js'
import heroPlus from "./images/plus.png"
import cityImage from "./images/city.jpg"
import minImage from "./images/min.png"
import city2Image from "./images/city2.jpg"
import { Plus } from './plus'
import { Min } from './min'



export class Game {
    pixi: PIXI.Application
    loader: PIXI.Loader
    plus: Plus
    bg: PIXI.Sprite
    bg2: PIXI.Sprite
    x: number
    min: Min
    text = new PIXI.Text("Wat is 8 - 2", { fill: ["#ffffff"] })

    constructor(pixi : PIXI.Application) {
        this._pixi = pixi
        this.pixi = new PIXI.Application({ width: 1000, height: 546 })
        document.body.appendChild(this.pixi.view)
        this.loader = new PIXI.Loader()

        this.loader.add('plusTexture', heroPlus)
            .add('cityTexture', cityImage)
            .add('minTexture', minImage)
            .add('city2Texture', city2Image)






        this.loader.load(() => this.loadCompleted())

    }

    bgChange() {

    }

    loadCompleted() {

        this.bg = new PIXI.Sprite(this.loader.resources["cityTexture"].texture!)
        this.pixi.stage.addChild(this.bg)

        this.bg2 = new PIXI.Sprite(this.loader.resources["city2Texture"].texture!)
        this.pixi.stage.addChild(this.bg2)

        this.min = new Min(this.loader.resources["minTexture"].texture!, this)
        this.pixi.stage.addChild(this.min)

        this.plus = new Plus(this.loader.resources["plusTexture"].texture!, this)
        this.pixi.stage.addChild(this.plus)


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

    randomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;



    }

    mathQues() {
        let a = this.randomInteger(4, 9)
        let b = this.randomInteger(1, 4)
        let c = a - b

        /*let text = new PIXI.Text("Wat is",a ,"-", b, { fill: ["#ffffff"] })

        text.x = 200
            text.y = 50
            this.pixi.stage.addChild(text)
            */

        console.log("wat is", a, "-", b)

        console.log("het antword is", c)
    }


    update(delta: number) {
        this.plus.update(delta)




        if (this.collision(this.plus, this.min)) {


            this.text.x = 200
            this.text.y = 200
            this.pixi.stage.addChild(this.text)





            this.mathQues()




        } else {
            this.pixi.stage.removeChild(this.text)

        }






    }

}


