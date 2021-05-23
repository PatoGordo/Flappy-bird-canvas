let canvas = document.querySelector('canvas')

let floor = {
  spriteX: 0,
  spriteY: 610,
  width: 224,
  height: 112,
  x: 0,
  y: canvas.height - 112,
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

export default floor