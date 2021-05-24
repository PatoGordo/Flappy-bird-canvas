import isBottomColliding from '../functions/isBottomColliding.js'
import changeScene from '../functions/changeScene.js'
import { hitSound } from '../sounds/sounds.js'

function flappyBirdInit() {
  let flappyBird = {
    spriteX: 0,
    spriteY: 0,
    width: 33,
    height: 24,
    x: 10,
    y: 50,
    speed: 0,
    jumpForce: 4.6,
    currentFrame: 0,
    spriteAnimation: [
      {spriteX: 0, spriteY: 0},
      {spriteX: 0, spriteY: 26},
      {spriteX: 0, spriteY: 52},
      {spriteX: 0, spriteY: 26},
    ],
    frameUpdate() {
      const frameInterval = 5

      if(window.frames % frameInterval === 0) {
        const frameIncrement = this.currentFrame + 1
        this.currentFrame = frameIncrement % this.spriteAnimation.length
      }
    },
    fly() {
      this.speed = - this.jumpForce
    },
    update(gravity, floor, scenes) {
      if(isBottomColliding(this, floor)) {
        hitSound.play()

        setTimeout(() => {
          changeScene(scenes.startScene)
        }, 500)
        return;
      }

      this.speed = this.speed + gravity
      this.y = this.y + this.speed
    },
    draw(ctx, sprites) {
      this.frameUpdate()
      const { spriteX, spriteY } = this.spriteAnimation[this.currentFrame]
      
      ctx.drawImage(
        sprites,
        spriteX, spriteY,
        this.width, this.height,
        this.x, this.y,
        this.width, this.height
      )
    }
  }
  return flappyBird
}

export default flappyBirdInit