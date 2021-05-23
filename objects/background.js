let canvas = document.querySelector('canvas')

let background = {
  spriteX: 390,
  spriteY: 0,
  width: 275,
  height: 204,
  x: 0,
  y: canvas.height - 204,
  draw(ctx, sprites) {
    ctx.fillStyle = '#70c5ce'
    ctx.fillRect(0,0, canvas.width, canvas.height)

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

export default background