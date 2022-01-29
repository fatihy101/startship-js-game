import './style.css'
import * as PIXI from 'pixi.js'
import {Starship} from './starship.js'
// import { SpriteMaskFilter } from 'pixi.js'
// import { createBackground } from './background.js'

let app = new PIXI.Application(getScreenWidth())

function getScreenWidth() {
  return { width: window.innerWidth, height: window.innerHeight }
}

function run() {
  document.body.appendChild(app.view)
  
  const starship = new Starship(1, 'assets/spaceship-1.png')

  app.stage.addChild(starship.sprite)
  starship.setInitialPosition(app.screen.width / 2, app.screen.height / 2)

  let elapsed = 0.0

  document.addEventListener("keypress", function(e) {
    starship.move(e.key) 
  })

  app.ticker.add((delta) => {
    // console.log(starship.angle)
    elapsed += delta
    starship.constantlyMove()
  })

}



run()