import './style.css'
import * as PIXI from 'pixi.js'
// import { createBackground } from './background.js'

let app = new PIXI.Application(getScreenWidth())

function getScreenWidth() {
  return { width: screen.width - (screen.width * 0.1), height: screen.height - (screen.height * 0.1) }
}

function run() {
  document.body.appendChild(app.view)
  
  let starship = PIXI.Sprite.from('assets/spaceship-1.png')
  
  app.stage.addChild(starship)
  
  let elapsed = 0.0

  starship.y = app.screen.height / 2
  starship.x = app.screen.width / 2
  // starship.pivot = new PIXI.Point(starship.width, starship.height / 2)

  app.ticker.add((delta) => {
    elapsed += delta
    move(starship)
  })

}

function move(sprite) {
  document.addEventListener("keypress", function(e) {
    console.log(e)
    if (e.key == 'w' || e.key == 'W') {
      sprite.y = sprite.y - 0.1
    }  
    if(e.key == 's' || e.key == 'S') {
      sprite.y = sprite.y + 0.1
    } 
    if(e.key == 'a' || e.key == 'A') {
      sprite.x = sprite.x - 0.1
    } 
    if(e.key == 'd' || e.key == 'D') {
      sprite.x = sprite.x + 0.1
    }

    if(e.key == 'q' || e.key == 'Q') {
      sprite.rotation = sprite.rotation + 0.0005
    }

    if(e.key == 'e' || e.key == 'E') {
      sprite.rotation = sprite.rotation - 0.0005
    }
  })

}

run()