import isColliding from '../functions/isColliding.js'
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
    fly() {
      this.speed = - this.jumpForce
    },
    update(gravity, floor, scenes) {
      if(isColliding(this, floor)) {
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
      ctx.drawImage(
        sprites,
        this.spriteX, this.spriteY,
        this.width, this.height,
        this.x, this.y,
        this.width, this.height
      )
    }
  }
  return flappyBird
}

export default flappyBirdInit