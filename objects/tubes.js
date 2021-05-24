import isVerticalColliding from '../functions/isVerticalColliding.js'
import changeScene from '../functions/changeScene.js'
let canvas = document.querySelector('canvas')

function tubesInit() {
  let tubes = {
    width: 52,
    height: 400,
    floor: {
      spriteX: 0,
      spriteY: 169
    },
    roof: {
      spriteX: 52,
      spriteY: 169
    },
    padding: 80,
    pairs: [],
    update(flappyBird, scenes) {
      if(window.frames % 100 === 0) {
        this.pairs.push({
          x: canvas.width,
          y: -220 * (Math.random() + .77)
        })
      }

      this.pairs.forEach((tube) => {
        tube.x = tube.x - 2

        if(isVerticalColliding(flappyBird, tube)) {
          changeScene(scenes.startScene)
        }

        if(tube.x + this.width <= 0) {
          this.pairs.shift()
        }
      })
    },
    draw(ctx, sprites) {
      this.pairs.forEach(tube => {
        const tubesPadding = 90
        const yRandom = tube.y
        // 220 min y
        // 370 max y
        
        const roofTubeX = tube.x
        const roofTubeY = yRandom
  
        ctx.drawImage(
          sprites,
          this.roof.spriteX, this.roof.spriteY,
          this.width, this.height,
          roofTubeX, roofTubeY,
          this.width, this.height
        )
  
        const floorTubeX = tube.x
        const floorTubeY = this.height + tubesPadding + yRandom
  
        ctx.drawImage(
          sprites,
          this.floor.spriteX, this.floor.spriteY,
          this.width, this.height,
          floorTubeX, floorTubeY,
          this.width, this.height
        )

        tube.roofTube = {
          x: roofTubeX,
          y: this.height + roofTubeY
        }

        tube.floorTube = {
          x: floorTubeX,
          y: floorTubeY
        }
      })
    }
  }
  return tubes
}

export default tubesInit