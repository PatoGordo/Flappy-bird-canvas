let canvas = document.querySelector('canvas')

function floorInit() {
  let floor = {
    spriteX: 0,
    spriteY: 610,
    width: 224,
    height: 112,
    x: 0,
    y: canvas.height - 112,
    update() {
      const floorMoviment = 1
      const loop = this.width / 2
      const moviment = this.x - floorMoviment

      this.x = moviment % loop
    },
    draw(ctx, sprites) {
      ctx.drawImage(
        sprites,
        this.spriteX, this.spriteY,
        this.width, this.height,
        this.x, this.y,
        this.width, this.height
      )
      ctx.drawImage(
        sprites,
        this.spriteX, this.spriteY,
        this.width, this.height,
        (this.x + this.width), this.y,
        this.width, this.height
      )
    }
  }
  return floor
}

export default floorInit