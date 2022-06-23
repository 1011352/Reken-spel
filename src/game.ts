import * as PIXI from 'pixi.js'
import heroPlus from "./images/plus.png"
import cityImage from "./images/city.jpg"
import minImage from "./images/1euro.png"
import city2Image from "./images/city4.jpg"
import { Plus } from './plus'
import { Min } from './min'
import { Background } from './background'
import { PauseButton } from './pause'
import { StartButton } from './unpause'
import { Maths } from './question'
import { Button2 } from "./button2";
import { Startmenu } from './startmenu'



export class Game {
    pixi: PIXI.Application
    loader: PIXI.Loader
    private style: PIXI.TextStyle
    private bg: Background
    private plus: Plus
    private min: Min
    private score: PIXI.Text
    private math: Maths
    private mins: Min[] = []
    private text: PIXI.Text
    private button: Button2
    private pButton: PauseButton
    private sButton: StartButton
    private isDone: Boolean = false
    private paused: boolean = false
    private scoreNumber : number
    private container = new PIXI.Container();
    private a: number
    private b: number
    private c: number

    constructor(pixi: PIXI.Application) {
        this.pixi = new PIXI.Application({ width: 1920, height: 1080 })
        document.body.appendChild(this.pixi.view)
        this.loader = new PIXI.Loader()


        this.pixi.loader.add('plusTexture', heroPlus)
            .add('cityTexture', cityImage)
            .add('minTexture', minImage)
            .add('city2Texture', city2Image)
        //.add('city4Texture', city4Image)




        this.pixi.loader.load(() => this.loadCompleted())

    }



    loadCompleted() {
        this.style = new PIXI.TextStyle({
            breakWords: true,
            dropShadow: true,
            fill: "white",
            fontFamily: "Arial Black",
            fontWeight: "bold",
            strokeThickness: 3

        })

        this.bg = new Background(this.pixi.loader.resources["city2Texture"].texture!, this.pixi.screen.width, this.pixi.screen.height)
        this.pixi.stage.addChild(this.bg)


        for (let i = 0; i < 8; i++) {
            this.min = new Min(this.pixi.loader.resources["minTexture"].texture!, this)
            this.pixi.stage.addChild(this.min)
            this.mins.push(this.min)
        }

        this.plus = new Plus(this.pixi.loader.resources["plusTexture"].texture!, this)
        this.pixi.stage.addChild(this.plus)

        this.sButton = new StartButton(
            this.pixi.screen.width / 15,
            this.pixi.screen.height / 35)

        this.pButton = new PauseButton(
            this.pixi.screen.width / 15,
            this.pixi.screen.height / 35
        );

        this.pixi.stage.addChild(this.pButton);

        this.pButton.on("pointerdown", () => this.onClickP());
        this.sButton.on("pointerdown", () => this.onClickS());



        this.pixi.ticker.add((delta: number) => this.update(delta))

        let score2 = new PIXI.Text("Score   =", this.style)

        score2.x = 1700
        score2.y = 20
        this.pixi.stage.addChild(score2)

        this.scoreNumber = 0 

        this.score = new PIXI.Text(this.scoreNumber , this.style)
        this.score.x = 1850
        this.score.y = 20
        this.pixi.stage.addChild(this.score)



    }

    onClickP() {
        if (!this.paused) {
            this.pixi.stage.removeChild(this.pButton)
            this.pixi.stage.addChild(this.sButton)
            this.pixi.ticker.speed = 0
            this.paused = true

        }


    }
    onClickS() {
        if (this.paused) {
            this.pixi.ticker.speed = 1
            this.pixi.stage.removeChild(this.sButton)
            this.pixi.stage.addChild(this.pButton)
            this.paused = false
        }


    }

    public collision(a, b) {
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
        this.a = this.randomInteger(4, 9)
        this.b = this.randomInteger(1, 4)
        this.c = this.a - this.b
        let d = this.randomInteger(1, 10)
        let e = this.randomInteger(11,20)

        this.text = new PIXI.Text("sample", this.style)

        this.text.x = 630
        this.text.y = 275
        this.container.addChild(this.text)
    

        console.log("wat is", this.a, "-", this.b)
        console.log("het antword is", this.c)

        this.text.text = " wat is " + this.a + "-" + this.b;


        for (let i = 0; i < 1; i++) {
            this.min = new Min(this.pixi.loader.resources["minTexture"].texture!, this)
            this.pixi.stage.addChild(this.min)
            this.mins.push(this.min)
        }


        this.addButton(d + 2, 3)
        this.addButton(d - 1, 2.3)
        this.addButton(this.c, 4.3)
        this.button.on("pointerdown", () => this.onClick2());


    }

    onClick2() {

        if (this.c === this.c) {
            let text = new PIXI.Text("Goed!", this.style);
            text.x = 350
            text.y = 400
            this.pixi.stage.addChild(text)
            this.pixi.stage.removeChild(this.text)
            this.scoreNumber += 1
            this.score.text = Number(this.score.text) + 1
            this.onClickS()

            this.pixi.stage.removeChild(this.container)
        } else {
            let text = new PIXI.Text("Probeer het Nog een Keer", this.style);
            text.x = 350
            text.y = 400
            this.pixi.stage.addChild(text)
            this.pixi.stage.removeChild(this.text)
            this.score.text = Number(this.score.text) - 1
            this.button.destroy()
        }

    }




    addButton(answer, move) {

        this.button = new Button2(
            this.pixi.screen.width / move,
            this.pixi.screen.height / 3
        );

        this.button.question.text = answer



        
        
        this.container.addChild(this.button);
        this.pixi.stage.addChild(this.container);
        

    }




    update(delta: number) {

        //this.bg.update(delta)
        this.plus.update(delta)

        for (let g = 0; g < this.mins.length; g++) {
            if (this.collision(this.plus, this.mins[g])) {
                //this.pixi.stage.removeChild(this.min)
                this.pixi.ticker.speed = 0 
                this.mathQues();
                this.onClickP();
                this.mins[g].destroy();
                this.mins = this.mins.filter(ge => ge != this.mins[g]);
            } else {
                //this.pixi.stage.removeChild(this.text)
            }
        }
        /*for (const min of this.mins) {

            if (this.collision(this.plus, min)) {
    
                if (!this.isDone) {

                    this.isDone = true;
                    this.mathQues()
                }
    
            } else {
                this.pixi.stage.removeChild(this.text)

                this.isDone = false

            }
        }*/
    }

}

new Game()