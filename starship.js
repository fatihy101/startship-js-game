import {Sprite} from 'pixi.js'

const MAX_SPEED = 5
const MAX_ROTATION_SPEED = 0.1

export class Starship {
  constructor(id, assetName) {
    this.id = id
    this.sprite = Sprite.from(assetName)
    this.speed = 0

    this.rotationSpeed = 0
  }

  setInitialPosition(xPos, yPos) {
    this.setX(xPos)
    this.setY(yPos)
  }

  setX(xPos) {
      this.sprite.x = xPos
  }

  setY(yPos) {
      this.sprite.y = yPos
  }

  constantlyMove() {
    this.sprite.y += this.speed * Math.floor(10 * Math.cos(this.sprite.rotation)) / 10
    this.sprite.x -= this.speed * Math.floor(10 * Math.sin(this.sprite.rotation)) / 10
    this.activeRotationSpeed()
  }

  move(key) { 
    if (!!key) {
      if (key == 'w' || key == 'W' && this.speed > -MAX_SPEED) {
          this.speed -= 0.4
      }  
      if(key == 's' || key == 'S' && this.speed < MAX_SPEED) {
        this.speed += 0.4
      } 
      if(key == 'e' || key == 'E' && this.rotationSpeed < MAX_ROTATION_SPEED) {
        this.rotationSpeed -= 0.001
      }
  
      if(key == 'q' || key == 'Q' && this.rotationSpeed > -MAX_ROTATION_SPEED) {
        this.rotationSpeed += 0.001
      }
      if (key == 'c' || key == 'C') {
        this.speed = 0
        this.rotationSpeed = 0 
      }
      key = null
    }
  }

  activeRotationSpeed() {
    this.sprite.rotation += this.rotationSpeed

    if (this.rotationSpeed > 0) {
      this.rotationSpeed -= 0.00006
    } else if (this.rotationSpeed < 0) {
      this.rotationSpeed += 0.00006
    }
  }
}
